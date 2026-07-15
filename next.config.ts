import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  ...(isGithubPages ? { output: "export" as const } : {}),
  trailingSlash: true,
  basePath: isGithubPages ? "/momo-pet-treats" : "",
  assetPrefix: isGithubPages ? "/momo-pet-treats/" : undefined,
};

export default nextConfig;
