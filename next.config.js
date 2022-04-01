const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? '/Optical-Font-Website/' : '',
  reactStrictMode: true,
}
