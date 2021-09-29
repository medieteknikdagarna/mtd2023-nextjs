
const withVideos = require('next-videos')

module.exports = withVideos({
  reactStrictMode: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  }
})

