import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const config = [
  ...nextVitals,
  ...nextTs,
  { ignores: [".next/**", "node_modules/**", "readiness-proof/**", "next-env.d.ts", "public/**", ".netlify/**"] },
];

export default config;
