// next.config.js
module.exports = {
  async redirects() {
    return [
      {
        source: '/maintenance',
        destination: '/tune-up',
        permanent: true, // this makes it a 301 redirect
      },
    ]
  },
}
