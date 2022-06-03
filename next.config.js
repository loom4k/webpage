const { withPlugins } = require('next-compose-plugins')
const withImages = require('next-images')
const withYAML = require('next-yaml')

/** @type {import('next').NextConfig} */
module.exports = withPlugins([withImages, withYAML], {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/loom4k',
        permanent: true,
      }
    ]
  }
})
