/** @type {import('next').NextConfig} */
const isGitHubPagesBuild =
  process.env.GITHUB_PAGES === 'true' && process.env.NODE_ENV === 'production';
const repoName = 'ncwiki-redesign';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: isGitHubPagesBuild ? `/${repoName}` : '',
  assetPrefix: isGitHubPagesBuild ? `/${repoName}/` : '',
};

export default nextConfig;
