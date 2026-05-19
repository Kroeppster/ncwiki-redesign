/** @type {import('next').NextConfig} */
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
const repoName = 'ncwiki-redesign';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: isGitHubActions ? `/${repoName}` : '',
  assetPrefix: isGitHubActions ? `/${repoName}/` : '',
};

export default nextConfig;
