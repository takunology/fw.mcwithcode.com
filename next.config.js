/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
<<<<<<< HEAD
  basePath: process.env.GITHUB_ACTIONS ? "/" : "",
=======
  basePath: process.env.GITHUB_ACTIONS ? "/takunology.github.io/fw.mcwithcode.com" : "",
>>>>>>> parent of c2c4147 (Update next.config.js)
  trailingSlash: true,
};
