/** @type {import('next').NextConfig} */

module.exports = {
  async redirects() {
    return [
      {
        source: '/:lang/artister/:artist',
        destination: '/:lang/artists/:artist',
        permanent: true,
      },
    ]
  },
}