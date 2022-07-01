/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  basePath: process.env.GITHUB_ACTIONS ? "/takunology.github.io/fw.mcwithcode.com" : "",
  trailingSlash: true,
};
