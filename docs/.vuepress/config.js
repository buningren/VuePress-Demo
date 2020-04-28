module.exports = {
  title: 'VueDemo',
  description: 'Just a VuePress demo',
  head: [
    ['link', {rel: 'icon', href: '/logo.png'}]
  ],
  locales: {
    '/': {
      lang: 'English',
      title: 'VueDemo',
      description: ''
    },
    '/zh/': {
      lang: '简体中文',
      title: 'VueDemo',
      description: ''
    }
  },
  themeConfig: {
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },
          { text: 'API', link: '/api/' },
          { text: 'Component', link: '/component/' },
          { text: 'GitHub', link: 'https://github.com/buningren' },
          { text: 'Ecosystem', items: [
            { text: 'Vue', link: '/pages/a' },
            { text: 'Vue-Router', link: '/pages/b' },
            { text: 'Vue-CLI', link: '/pages/c' }
          ]}
        ],
        sidebar: [
          '/',
          '/guide/'
        ]
      },
      '/zh/': {
        selectText: '多语言',
        label: '简体中文',
        nav: [
          { text: '首页', link: '/' },
          { text: '指南', link: '/guide/' },
          { text: 'API', link: '/api/' },
          { text: '组件', link: '/component/' },
          { text: 'GitHub', link: 'https://github.com/buningren' },
          { text: '社区生态', items: [
            { text: 'Vuex', link: '/pages/a' },
            { text: 'Vue-Router', link: '/pages/b' },
            { text: 'Vue-CLI', link: '/pages/c' }
          ]}
        ],
        sidebar: [
          '/',
          '/guide/'
        ],
      }
    }
  },
  markdown: {
    lineNumbers: true
  }
}