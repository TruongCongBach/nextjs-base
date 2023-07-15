/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    BASE_URL: process.env.BASE_URL,
    PREVIEW_STORYBLOK_ACCESSTOKEN: process?.env?.PREVIEW_STORYBLOK_ACCESSTOKEN,
    JM360_APP_KEY: process?.env?.NEXT_PUBLIC_JM360_APP_KEY,
    JM360_DEVICE_KEY: process?.env?.NEXT_PUBLIC_JM360_DEVICE_KEY,
    NEXT_PUBLIC_USE_PIM_TRANSLATION: process?.env?.NEXT_PUBLIC_USE_PIM_TRANSLATION,
    NEXT_PUBLIC_LOCALE_DEFAULT: process.env.NEXT_PUBLIC_LOCALE_DEFAULT,
    IS_DISPLAY_STOCK_TRAFFIC_LIGHT: process.env.NEXT_PUBLIC_IS_DISPLAY_STOCK_TRAFFIC_LIGHT === 'true'
  },
}

module.exports = nextConfig
