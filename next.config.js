
module.exports = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  env: {
    SHEET_ID: '1gDkU3nOi9Sbkj72C5SJoC7Kyx3jOAZxW0Bh7JGfb1cY',
    GOOGLE_SECRETS: 'secrets.json'
  }
}