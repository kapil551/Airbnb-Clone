// https://nextjs.org/docs/messages/next-image-unconfigured-host

module.exports = {
    images: {
      domains: ['links.papareact.com'],
    },
    // https://nextjs.org/docs/api-reference/next.config.js/environment-variables
    // It should never be used to store private keys
    env: {
      mapbox_key: 'pk.eyJ1Ijoia2FwaWxjcjciLCJhIjoiY2t4NDJpZ3dtMDlmYjJzcGt1b3BzcjV3MCJ9.9qD49lJLoU3nyU3j_m1GJg',
      stripe_public_key: process.env.STRIPE_PUBLIC_KEY
    }
  }