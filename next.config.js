/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  basePath: process.env.GITHUB_ACTIONS ? "http://www.takunology.jp/mcwithcode-fw-website" : "",
  trailingSlash: true,
};
