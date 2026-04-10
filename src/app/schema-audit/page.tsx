"use client";

import { useState } from "react";

// EEO brand sites to pre-fill
const PRESET_SITES = [
  { label: "EEO Main", url: "https://egyptexcursionsonline.com" },
  { label: "Rittal Travel", url: "https://rittaltravelegypt.com" },
  { label: "Splash Speedboat", url: "https://splashspeedboathurghada.com" },
  { label: "Egypt Sunmarine", url: "https://egyptsunmarine.com" },
  { label: "Kairo Ausfluege", url: "https://kairoausfluege.de" },
  { label: "Aegypten Ausfluege", url: "https://aegypten-ausfluege.de" },
  { label: "Attractions Network", url: "https://attractions-network.netlify.app" },
  { label: "Get Egypt Guide", url: "https://getegyptguide.netlify.app" },
];

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

interface AuditResult {
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

const gradeColors: Record<string, string> = {
  A: "from-emerald-500 to-green-500",
  B: "from-blue-500 to-cyan-500",
  C: "from-yellow-500 to-amber-500",
  D: "from-orange-500 to-red-400",
  F: "from-red-500 to-rose-600",
};

const gradeTextColors: Record<string, string> = {
  A: "text-emerald-400",
  B: "text-blue-400",
  C: "text-yellow-400",
  D: "text-orange-400",
  F: "text-red-400",
};

const statusIcons: Record<string, { icon: string; color: string; bg: string }> = {
  pass: { icon: "\u2713", color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20" },
  warn: { icon: "!", color: "text-yellow-400", bg: "bg-yellow-500/10 border-yellow-500/20" },
  fail: { icon: "\u2717", color: "text-red-400", bg: "bg-red-500/10 border-red-500/20" },
};

const severityStyles: Record<string, { dot: string; text: string }> = {
  error: { dot: "bg-red-400", text: "text-red-300" },
  warning: { dot: "bg-yellow-400", text: "text-yellow-300" },
  info: { dot: "bg-blue-400", text: "text-blue-300" },
};

export default function SchemaAuditPage() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AuditResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [batchResults, setBatchResults] = useState<AuditResult[]>([]);
  const [batchLoading, setBatchLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<"single" | "batch">("single");
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  async function runAudit(targetUrl: string): Promise<AuditResult | null> {
    try {
      const res = await fetch("/api/schema-audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: targetUrl }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Audit failed");
      return data;
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Unknown error";
      throw new Error(msg);
    }
  }

  async function handleSingleAudit() {
    if (!url.trim()) return;
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const data = await runAudit(url.trim());
      setResult(data);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }

  async function handleBatchAudit() {
    setBatchLoading(true);
    setBatchResults([]);

    const results: AuditResult[] = [];
    for (const site of PRESET_SITES) {
      try {
        const data = await runAudit(site.url);
        if (data) results.push(data);
      } catch {
        results.push({
          url: site.url,
          timestamp: new Date().toISOString(),
          score: 0,
          grade: "F",
          categories: [],
          jsonLd: [],
          meta: { title: null, description: null, canonical: null, ogTitle: null, ogDescription: null, ogImage: null, ogType: null, twitterCard: null, twitterTitle: null, twitterDescription: null, robots: null, language: null },
          issues: [{ severity: "error", message: "Failed to fetch site", category: "Network" }],
          recommendations: [],
        });
      }
    }

    setBatchResults(results);
    setBatchLoading(false);
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <section className="pt-24 pb-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 px-4 py-1.5 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-400" />
            </span>
            <span className="text-sm text-indigo-300 font-medium">Schema Audit Tool</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Schema Markup
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"> Auditor</span>
          </h1>
          <p className="mt-4 text-lg text-white/50 max-w-2xl mx-auto">
            Scan any page for JSON-LD structured data, Open Graph tags, and Google Things To Do compliance.
            Get a scored report with actionable fixes.
          </p>
        </div>
      </section>

      {/* Tab Switcher */}
      <div className="max-w-5xl mx-auto px-6 mb-8">
        <div className="flex gap-1 bg-white/5 rounded-xl p-1 max-w-xs mx-auto">
          <button
            onClick={() => setActiveTab("single")}
            className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium transition-all ${
              activeTab === "single"
                ? "bg-white/10 text-white shadow-lg"
                : "text-white/40 hover:text-white/60"
            }`}
          >
            Single URL
          </button>
          <button
            onClick={() => setActiveTab("batch")}
            className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium transition-all ${
              activeTab === "batch"
                ? "bg-white/10 text-white shadow-lg"
                : "text-white/40 hover:text-white/60"
            }`}
          >
            Batch Scan
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-24">
        {/* Single URL Mode */}
        {activeTab === "single" && (
          <>
            {/* URL Input */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSingleAudit()}
                  placeholder="https://egyptexcursionsonline.com/tours/pyramids-tour"
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition"
                />
                <button
                  onClick={handleSingleAudit}
                  disabled={loading || !url.trim()}
                  className="shrink-0 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold px-8 py-3.5 rounded-xl hover:shadow-lg hover:shadow-indigo-500/25 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Scanning...
                    </span>
                  ) : (
                    "Scan Page"
                  )}
                </button>
              </div>

              {/* Quick presets */}
              <div className="mt-4 flex flex-wrap gap-2">
                {PRESET_SITES.slice(0, 5).map((site) => (
                  <button
                    key={site.url}
                    onClick={() => { setUrl(site.url); }}
                    className="text-xs text-white/40 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 hover:bg-white/10 hover:text-white/60 transition"
                  >
                    {site.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-5 mb-6">
                <p className="text-red-300 font-medium">Scan Failed</p>
                <p className="text-red-400/70 text-sm mt-1">{error}</p>
              </div>
            )}

            {/* Results */}
            {result && <AuditResultCard result={result} expandedCategory={expandedCategory} setExpandedCategory={setExpandedCategory} />}
          </>
        )}

        {/* Batch Mode */}
        {activeTab === "batch" && (
          <>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-white font-semibold">Batch Scan All EEO Sites</h3>
                  <p className="text-white/40 text-sm mt-1">Scans {PRESET_SITES.length} sites sequentially and generates a comparison report.</p>
                </div>
                <button
                  onClick={handleBatchAudit}
                  disabled={batchLoading}
                  className="shrink-0 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold px-8 py-3 rounded-xl hover:shadow-lg hover:shadow-indigo-500/25 disabled:opacity-40 transition-all"
                >
                  {batchLoading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Scanning {PRESET_SITES.length} sites...
                    </span>
                  ) : (
                    "Start Batch Scan"
                  )}
                </button>
              </div>

              {/* Site list */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {PRESET_SITES.map((site) => {
                  const batchResult = batchResults.find((r) => r.url === site.url);
                  return (
                    <div
                      key={site.url}
                      className={`rounded-lg border px-3 py-2 text-sm ${
                        batchResult
                          ? `bg-white/5 ${batchResult.grade === "A" || batchResult.grade === "B" ? "border-emerald-500/30" : batchResult.grade === "C" ? "border-yellow-500/30" : "border-red-500/30"}`
                          : "bg-white/[0.02] border-white/10"
                      }`}
                    >
                      <span className="text-white/60">{site.label}</span>
                      {batchResult && (
                        <span className={`ml-2 font-bold ${gradeTextColors[batchResult.grade]}`}>
                          {batchResult.grade}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Batch comparison table */}
            {batchResults.length > 0 && (
              <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                <div className="px-6 py-4 border-b border-white/10">
                  <h3 className="text-white font-semibold">Comparison Report</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left text-white/40 font-medium px-6 py-3">Site</th>
                        <th className="text-center text-white/40 font-medium px-4 py-3">Grade</th>
                        <th className="text-center text-white/40 font-medium px-4 py-3">Score</th>
                        <th className="text-center text-white/40 font-medium px-4 py-3">JSON-LD</th>
                        <th className="text-center text-white/40 font-medium px-4 py-3">Issues</th>
                        <th className="text-center text-white/40 font-medium px-4 py-3">Meta</th>
                      </tr>
                    </thead>
                    <tbody>
                      {batchResults.map((r) => {
                        const metaCount = [r.meta.title, r.meta.description, r.meta.ogTitle, r.meta.ogImage, r.meta.canonical].filter(Boolean).length;
                        return (
                          <tr key={r.url} className="border-b border-white/5 hover:bg-white/[0.02] transition">
                            <td className="px-6 py-3">
                              <span className="text-white/70 font-medium">{new URL(r.url).hostname}</span>
                            </td>
                            <td className="text-center px-4 py-3">
                              <span className={`inline-flex items-center justify-center w-8 h-8 rounded-lg font-bold text-sm bg-gradient-to-br ${gradeColors[r.grade]} text-white`}>
                                {r.grade}
                              </span>
                            </td>
                            <td className="text-center px-4 py-3 text-white/60 font-mono">{r.score}%</td>
                            <td className="text-center px-4 py-3 text-white/60">{r.jsonLd.length} blocks</td>
                            <td className="text-center px-4 py-3">
                              <span className={`${r.issues.filter((i) => i.severity === "error").length > 0 ? "text-red-400" : "text-white/40"}`}>
                                {r.issues.filter((i) => i.severity === "error").length} errors
                              </span>
                            </td>
                            <td className="text-center px-4 py-3 text-white/60">{metaCount}/5</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}

function AuditResultCard({
  result,
  expandedCategory,
  setExpandedCategory,
}: {
  result: AuditResult;
  expandedCategory: string | null;
  setExpandedCategory: (v: string | null) => void;
}) {
  return (
    <div className="space-y-6">
      {/* Score card */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
        <div className="flex items-center gap-8">
          {/* Grade circle */}
          <div className={`shrink-0 w-28 h-28 rounded-2xl bg-gradient-to-br ${gradeColors[result.grade]} flex flex-col items-center justify-center shadow-2xl`}>
            <span className="text-4xl font-black text-white">{result.grade}</span>
            <span className="text-white/70 text-xs font-medium mt-0.5">{result.score}%</span>
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-white font-semibold text-lg truncate">{result.url}</h3>
            <p className="text-white/40 text-sm mt-1">
              Scanned {new Date(result.timestamp).toLocaleString()} &middot; {result.jsonLd.length} JSON-LD blocks found &middot; {result.issues.length} issues
            </p>

            {/* Category quick status */}
            <div className="mt-4 flex flex-wrap gap-2">
              {result.categories.map((cat) => (
                <span
                  key={cat.name}
                  className={`inline-flex items-center gap-1.5 text-xs font-medium rounded-lg border px-2.5 py-1 ${statusIcons[cat.status].bg}`}
                >
                  <span className={statusIcons[cat.status].color}>{statusIcons[cat.status].icon}</span>
                  <span className="text-white/60">{cat.name}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Categories detail */}
      <div className="grid gap-3">
        {result.categories.map((cat) => (
          <div
            key={cat.name}
            className={`rounded-2xl border transition-all ${statusIcons[cat.status].bg}`}
          >
            <button
              onClick={() => setExpandedCategory(expandedCategory === cat.name ? null : cat.name)}
              className="w-full flex items-center justify-between px-6 py-4 text-left"
            >
              <div className="flex items-center gap-3">
                <span className={`text-lg font-bold ${statusIcons[cat.status].color}`}>
                  {statusIcons[cat.status].icon}
                </span>
                <div>
                  <span className="text-white font-medium">{cat.name}</span>
                  <span className="text-white/30 text-sm ml-3">{cat.found.length} found / {cat.missing.length} missing</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-24 h-2 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${
                      cat.status === "pass" ? "bg-emerald-400" : cat.status === "warn" ? "bg-yellow-400" : "bg-red-400"
                    }`}
                    style={{ width: `${cat.score}%` }}
                  />
                </div>
                <span className="text-white/40 text-sm font-mono w-10 text-right">{cat.score}%</span>
                <svg
                  className={`w-4 h-4 text-white/30 transition-transform ${expandedCategory === cat.name ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>

            {expandedCategory === cat.name && (
              <div className="px-6 pb-5 border-t border-white/5 pt-4">
                {cat.found.length > 0 && (
                  <div className="mb-3">
                    <p className="text-xs text-white/30 uppercase tracking-wider mb-2">Found</p>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.found.map((s) => (
                        <span key={s} className="text-xs bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 rounded-md px-2 py-1">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {cat.missing.length > 0 && (
                  <div>
                    <p className="text-xs text-white/30 uppercase tracking-wider mb-2">Missing</p>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.missing.map((s) => (
                        <span key={s} className="text-xs bg-red-500/10 text-red-300 border border-red-500/20 rounded-md px-2 py-1">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Meta Tags */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <h3 className="text-white font-semibold mb-4">Meta Tags</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {(Object.entries(result.meta) as [string, string | null][]).map(([key, value]) => (
            <div key={key} className="flex items-start gap-3">
              <span className={`mt-1 shrink-0 w-2 h-2 rounded-full ${value ? "bg-emerald-400" : "bg-red-400"}`} />
              <div className="min-w-0">
                <p className="text-white/40 text-xs">{key}</p>
                <p className={`text-sm truncate ${value ? "text-white/70" : "text-red-400/60 italic"}`}>
                  {value || "Not found"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Issues */}
      {result.issues.length > 0 && (
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="text-white font-semibold mb-4">Issues ({result.issues.length})</h3>
          <div className="space-y-2">
            {result.issues.map((issue, i) => (
              <div key={i} className="flex items-start gap-3 py-2">
                <span className={`mt-1.5 shrink-0 w-2 h-2 rounded-full ${severityStyles[issue.severity].dot}`} />
                <div>
                  <span className={`text-sm ${severityStyles[issue.severity].text}`}>{issue.message}</span>
                  <span className="text-white/20 text-xs ml-2">{issue.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recommendations */}
      {result.recommendations.length > 0 && (
        <div className="bg-indigo-500/5 border border-indigo-500/20 rounded-2xl p-6">
          <h3 className="text-indigo-300 font-semibold mb-4">Recommendations</h3>
          <div className="space-y-3">
            {result.recommendations.map((rec, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-300 flex items-center justify-center text-xs font-bold">
                  {i + 1}
                </span>
                <p className="text-white/60 text-sm">{rec}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Raw JSON-LD blocks */}
      {result.jsonLd.length > 0 && (
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="text-white font-semibold mb-4">JSON-LD Blocks ({result.jsonLd.length})</h3>
          <div className="space-y-3">
            {result.jsonLd.map((block, i) => {
              const types = Array.isArray(block.type) ? block.type.join(", ") : block.type;
              return (
                <details key={i} className="group">
                  <summary className="flex items-center gap-3 cursor-pointer py-2 text-white/60 hover:text-white/80 transition">
                    <svg className="w-4 h-4 transition-transform group-open:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="text-sm font-medium text-indigo-300">{types}</span>
                    <span className="text-white/20 text-xs">{block.properties.length} properties</span>
                  </summary>
                  <pre className="mt-2 ml-7 p-4 bg-black/30 rounded-xl text-xs text-white/50 overflow-x-auto max-h-64">
                    {JSON.stringify(block.raw, null, 2)}
                  </pre>
                </details>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
