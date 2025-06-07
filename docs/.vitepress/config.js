/** @type {import('vitepress').UserConfig} */
export default {
  lang: 'zh-CN',
  title: "Charlie全球应援",
  description: "周深国际化粉丝支援平台",
  theme: './theme', // 启用自定义主题

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '地区资源', link: '/regions/asia' },
      { text: '活动日历', link: '/events/calendar' },
      { text: '实用指南', link: '/guides/faq' }
    ],

    sidebar: {
      '/regions/': [
        { text: '亚洲', link: '/regions/asia' },
        { text: '欧洲', link: '/regions/europe' },
        { text: '美洲', link: '/regions/americas' }
      ]
    }
  },

  locales: {
    root: { label: '简体中文', lang: 'zh-CN' },
    en: { label: 'English', lang: 'en-US', link: 'https://example.com/en' }
  }
}