export default {
	// Global page headers (https://go.nuxtjs.dev/config-head)
  mode: 'universal',
  head: {
    title: 'Catapult',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    '~/styles/variables.css',
    'normalize.css/normalize.css',
    '~/styles/typography.css',
	],

	generate: {
    dir: 'public'
  },

  buildModules: [
  ],

  modules: [
  ],

  build: {
  }
}
