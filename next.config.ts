import type { NextConfig } from "next";

const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === "true";
const [repositoryOwner = "", repositoryName = ""] = (
  process.env.GITHUB_REPOSITORY ?? ""
).split("/");
const isUserPagesRepository =
  repositoryName.toLowerCase() ===
  `${repositoryOwner.toLowerCase()}.github.io`;
const basePath =
  isGitHubPagesBuild && repositoryName && !isUserPagesRepository
    ? `/${repositoryName}`
    : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
