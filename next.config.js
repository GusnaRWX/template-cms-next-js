/** @type {import('next').NextConfig} */

const path = require('path')
const withFonts = require('next-fonts')

const alias = {
  '@/components': path.join(__dirname, 'components'),
  '@/containers': path.join(__dirname, 'containers'),
  '@/utils': path.join(__dirname, 'utils'),
  '@/fonts': path.join(__dirname, 'public', 'fonts'),
  '@/icons': path.join(__dirname, 'public', 'icons')
}

module.exports = withFonts({
  images: {
    domains: ['images.unsplash.com']
  },
  webpack: (config) => {
    config.plugins = config.plugins || []
    config.plugins = [
      ...config.plugins
    ]
    config.resolve.alias = Object.assign(
      {},
      config.resolve.alias,
      alias
    )

    return config
  }
})
