import { NextRequest, NextResponse } from "next/server";

// schema types we check for, grouped by category
const REQUIRED_SCHEMAS: Record<string, string[]> = {
  "Core Business": ["LocalBusiness", "Organization", "TravelAgency", "TouristAttraction"],
  "Tour & Product": ["Product", "Event", "Offer", "AggregateOffer"],
  "Reviews & Ratings": ["AggregateRating", "Review"],
  "Navigation & Structure": ["BreadcrumbList", "WebSite", "WebPage", "SiteNavigationElement"],
  "FAQ & Content": ["FAQPage", "Question", "Answer"],
  "Google Things To Do": ["TouristTrip", "ItemList", "ListItem"],
  "Media & Rich": ["ImageObject"],
  "Speakable & AI": ["speakable"],
};

interface SchemaResult {
  url: string;
  timestamp: string;
  score: number;
  grade: "A" | "B" | "C" | "D" | "F";
  categories: CategoryResult[];
  jsonLd: JsonLdBlock[];
  meta: MetaTags;
  issues: Issue[];
  recommendations: string[];
}

interface CategoryResult {
  name: string;
  status: "pass" | "warn" | "fail";
  found: string[];
  missing: string[];
  score: number;
}

interface JsonLdBlock {
  type: string | string[];
  properties: string[];
  raw: Record<string, unknown>;
}

interface MetaTags {
  title: string | null;
  description: string | null;
  canonical: string | null;
  ogTitle: string | null;
  ogDescription: string | null;
  ogImage: string | null;
  ogType: string | null;
  twitterCard: string | null;
  twitterTitle: string | null;
  twitterDescription: string | null;
  robots: string | null;
  language: string | null;
}

interface Issue {
  severity: "error" | "warning" | "info";
  message: string;
  category: string;
}

function extractJsonLd(html: string): JsonLdBlock[] {
  const blocks: JsonLdBlock[] = [];
  const regex = /<script[^>]*type\s*=\s*["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let match;

  while ((match = regex.exec(html)) !== null) {
    try {
      const data = JSON.parse(match[1].trim());
      const items = Array.isArray(data) ? data : data["@graph"] ? data["@graph"] : [data];

      for (const item of items) {
        const types = Array.isArray(item["@type"]) ? item["@type"] : item["@type"] ? [item["@type"]] : ["Unknown"];
        blocks.push({
          type: types,
          properties: Object.keys(item).filter((k) => !k.startsWith("@")),
          raw: item,
        });
      }
    } catch {
      // malformed JSON-LD
    }
  }

  return blocks;
}

function extractMetaTags(html: string): MetaTags {
  const get = (pattern: RegExp): string | null => {
    const m = html.match(pattern);
    return m ? m[1].trim() : null;
  };

  return {
    title: get(/<title[^>]*>([\s\S]*?)<\/title>/i),
    description: get(/<meta[^>]*name\s*=\s*["']description["'][^>]*content\s*=\s*["']([\s\S]*?)["']/i)
      || get(/<meta[^>]*content\s*=\s*["']([\s\S]*?)["'][^>]*name\s*=\s*["']description["']/i),
    canonical: get(/<link[^>]*rel\s*=\s*["']canonical["'][^>]*href\s*=\s*["']([\s\S]*?)["']/i),
    ogTitle: get(/<meta[^>]*property\s*=\s*["']og:title["'][^>]*content\s*=\s*["']([\s\S]*?)["']/i),
    ogDescription: get(/<meta[^>]*property\s*=\s*["']og:description["'][^>]*content\s*=\s*["']([\s\S]*?)["']/i),
    ogImage: get(/<meta[^>]*property\s*=\s*["']og:image["'][^>]*content\s*=\s*["']([\s\S]*?)["']/i),
    ogType: get(/<meta[^>]*property\s*=\s*["']og:type["'][^>]*content\s*=\s*["']([\s\S]*?)["']/i),
    twitterCard: get(/<meta[^>]*name\s*=\s*["']twitter:card["'][^>]*content\s*=\s*["']([\s\S]*?)["']/i),
    twitterTitle: get(/<meta[^>]*name\s*=\s*["']twitter:title["'][^>]*content\s*=\s*["']([\s\S]*?)["']/i),
    twitterDescription: get(/<meta[^>]*name\s*=\s*["']twitter:description["'][^>]*content\s*=\s*["']([\s\S]*?)["']/i),
    robots: get(/<meta[^>]*name\s*=\s*["']robots["'][^>]*content\s*=\s*["']([\s\S]*?)["']/i),
    language: get(/<html[^>]*lang\s*=\s*["']([\s\S]*?)["']/i),
  };
}

function checkLlmsTxt(html: string, url: string): boolean {
  // we can't check the file from HTML alone, flag as recommendation
  return false;
}

// recursively collect all @type values from nested objects
function collectAllTypes(obj: unknown, types: Set<string>): void {
  if (!obj || typeof obj !== "object") return;
  if (Array.isArray(obj)) {
    for (const item of obj) collectAllTypes(item, types);
    return;
  }
  const record = obj as Record<string, unknown>;
  if (record["@type"]) {
    const t = record["@type"];
    if (Array.isArray(t)) t.forEach((v) => typeof v === "string" && types.add(v));
    else if (typeof t === "string") types.add(t);
  }
  for (const val of Object.values(record)) {
    collectAllTypes(val, types);
  }
}

// recursively check if speakable key exists anywhere
function hasSpeakableDeep(obj: unknown): boolean {
  if (!obj || typeof obj !== "object") return false;
  if (Array.isArray(obj)) return obj.some((item) => hasSpeakableDeep(item));
  const record = obj as Record<string, unknown>;
  if ("speakable" in record) return true;
  return Object.values(record).some((val) => hasSpeakableDeep(val));
}

function analyzeSchemas(jsonLd: JsonLdBlock[], meta: MetaTags, url: string): SchemaResult {
  const allFoundTypes = new Set<string>();
  for (const block of jsonLd) {
    // collect top-level types
    const types = Array.isArray(block.type) ? block.type : [block.type];
    types.forEach((t) => allFoundTypes.add(t));
    // also collect nested types from the full raw object
    collectAllTypes(block.raw, allFoundTypes);
  }

  // check for speakable anywhere in any block
  const hasSpeakable = jsonLd.some((b) => hasSpeakableDeep(b.raw));

  const issues: Issue[] = [];
  const recommendations: string[] = [];
  const categories: CategoryResult[] = [];

  for (const [catName, schemaTypes] of Object.entries(REQUIRED_SCHEMAS)) {
    const found: string[] = [];
    const missing: string[] = [];

    for (const st of schemaTypes) {
      if (st === "speakable") {
        if (hasSpeakable) found.push(st);
        else missing.push(st);
      } else if (allFoundTypes.has(st)) {
        found.push(st);
      } else {
        missing.push(st);
      }
    }

    // at least one from each category = pass, none = fail, partial = warn
    const ratio = found.length / schemaTypes.length;
    const status = found.length === 0 ? "fail" : ratio >= 0.5 ? "pass" : "warn";
    const score = Math.round(ratio * 100);

    categories.push({ name: catName, status, found, missing, score });

    if (found.length === 0) {
      issues.push({
        severity: "error",
        message: `No ${catName} schema found. Add at least one of: ${schemaTypes.join(", ")}`,
        category: catName,
      });
    } else if (missing.length > 0) {
      issues.push({
        severity: "warning",
        message: `${catName}: found ${found.join(", ")} but missing ${missing.join(", ")}`,
        category: catName,
      });
    }
  }

  // meta tag checks
  if (!meta.title) issues.push({ severity: "error", message: "Missing <title> tag", category: "Meta" });
  if (!meta.description) issues.push({ severity: "error", message: "Missing meta description", category: "Meta" });
  if (!meta.canonical) issues.push({ severity: "warning", message: "Missing canonical URL", category: "Meta" });
  if (!meta.ogTitle) issues.push({ severity: "warning", message: "Missing Open Graph title", category: "Meta" });
  if (!meta.ogDescription) issues.push({ severity: "warning", message: "Missing Open Graph description", category: "Meta" });
  if (!meta.ogImage) issues.push({ severity: "warning", message: "Missing Open Graph image", category: "Meta" });
  if (!meta.language) issues.push({ severity: "warning", message: "Missing lang attribute on <html>", category: "Meta" });

  // recommendations
  if (!allFoundTypes.has("FAQPage")) {
    recommendations.push("Add FAQPage schema to boost featured snippet eligibility and AI citation");
  }
  if (!allFoundTypes.has("BreadcrumbList")) {
    recommendations.push("Add BreadcrumbList for enhanced search appearance and site hierarchy signals");
  }
  if (!hasSpeakable) {
    recommendations.push("Add speakable markup so voice assistants and AI can read key content aloud");
  }
  if (!allFoundTypes.has("TouristTrip") && !allFoundTypes.has("ItemList")) {
    recommendations.push("Add TouristTrip/ItemList for Google Things To Do integration");
  }
  if (!meta.ogImage) {
    recommendations.push("Add og:image for better social sharing and AI overview thumbnails");
  }
  if (!meta.canonical) {
    recommendations.push("Set canonical URLs to prevent duplicate content across tenant domains");
  }

  // overall score: weighted avg of category scores + meta score
  const catAvg = categories.reduce((sum, c) => sum + c.score, 0) / categories.length;
  const metaFields = [meta.title, meta.description, meta.canonical, meta.ogTitle, meta.ogDescription, meta.ogImage, meta.language];
  const metaScore = (metaFields.filter(Boolean).length / metaFields.length) * 100;
  const overallScore = Math.round(catAvg * 0.7 + metaScore * 0.3);

  const grade: SchemaResult["grade"] =
    overallScore >= 85 ? "A" : overallScore >= 70 ? "B" : overallScore >= 50 ? "C" : overallScore >= 30 ? "D" : "F";

  return {
    url,
    timestamp: new Date().toISOString(),
    score: overallScore,
    grade,
    categories,
    jsonLd,
    meta,
    issues,
    recommendations,
  };
}

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json();

    if (!url || typeof url !== "string") {
      return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    // validate URL
    let parsedUrl: URL;
    try {
      parsedUrl = new URL(url);
    } catch {
      return NextResponse.json({ error: "Invalid URL format" }, { status: 400 });
    }

    if (!["http:", "https:"].includes(parsedUrl.protocol)) {
      return NextResponse.json({ error: "Only HTTP/HTTPS URLs are supported" }, { status: 400 });
    }

    // fetch the page
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);

    let html: string;
    try {
      const res = await fetch(url, {
        signal: controller.signal,
        headers: {
          "User-Agent": "FoxesSchemaAudit/1.0 (Schema Markup Validator)",
          Accept: "text/html,application/xhtml+xml",
        },
        redirect: "follow",
      });
      clearTimeout(timeout);

      if (!res.ok) {
        return NextResponse.json({ error: `Failed to fetch: HTTP ${res.status}` }, { status: 502 });
      }

      html = await res.text();
    } catch (e: unknown) {
      clearTimeout(timeout);
      const message = e instanceof Error ? e.message : "Unknown error";
      return NextResponse.json({ error: `Fetch failed: ${message}` }, { status: 502 });
    }

    const jsonLd = extractJsonLd(html);
    const meta = extractMetaTags(html);
    const result = analyzeSchemas(jsonLd, meta, url);

    return NextResponse.json(result);
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "Unknown error";
    return NextResponse.json({ error: `Server error: ${message}` }, { status: 500 });
  }
}
