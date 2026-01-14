import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { pwaPlugin } from '@vuepress/plugin-pwa'
import { searchPlugin } from '@vuepress/plugin-search'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  // 基础配置
  lang: 'zh-CN',
  title: 'WebCoder',
  description: 'Something Good Will Be Happen!',
  dest: 'vuepress',

  // 使用 Vite 打包器
  bundler: viteBundler(),

  // Head 配置
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],

  // 主题配置
  theme: defaultTheme({
    // 仓库配置
    repo: 'dvxiaofan/MyBlog',
    docsDir: 'docs',

    // Git 相关
    lastUpdated: true,
    lastUpdatedText: '上次更新时间',
    contributors: false,
    editLink: false,

    // 导航栏
    navbar: [
      {
        text: 'FrontEnd',
        children: [
          { text: 'JS', link: '/js/' },
          { text: 'CSS', link: '/css/' },
          { text: 'React', link: '/react/' },
          { text: 'Vue', link: '/vue/' }
        ]
      },
      {
        text: 'Tool',
        children: [
          { text: 'Echarts', link: '/echarts/' }
        ]
      },
      { text: 'Others', link: '/other/' },
      { text: 'About', link: '/about/' }
    ],

    // 侧边栏
    sidebar: {
      '/js/': [
        {
          text: 'JavaScript',
          collapsible: false,
          children: [
            '/js/README.md',
            '/js/js02.md',
            '/js/js03.md',
            '/js/js04.md',
            '/js/js05.md',
            '/js/js06.md',
            '/js/fileSave.md'
          ]
        }
      ],
      '/css/': [
        {
          text: 'CSS',
          collapsible: false,
          children: ['/css/README.md']
        }
      ],
      '/html/': [
        {
          text: 'HTML',
          collapsible: false,
          children: []
        }
      ],
      '/echarts/': [
        {
          text: 'Echarts',
          collapsible: false,
          children: ['/echarts/README.md']
        }
      ],
      '/react/': [
        {
          text: 'React',
          collapsible: false,
          children: [
            '/react/README.md',
            '/react/02.md',
            '/react/react-webpack.md',
            '/react/React-setState.md',
            '/react/something-about-react.md'
          ]
        }
      ],
      '/vue/': [
        {
          text: 'Vue',
          collapsible: false,
          children: [
            '/vue/README.md',
            '/vue/input-number.md',
            '/vue/lifecycle.md',
            '/vue/vue-demo01.md',
            '/vue/vue-demo02.md',
            '/vue/file-time.md',
            '/vue/vue-computed.md',
            '/vue/vue-props.md'
          ]
        }
      ],
      '/other/': [
        {
          text: 'Others',
          collapsible: false,
          children: [
            '/other/README.md',
            '/other/nvm.md',
            '/other/emock.md',
            '/other/mockjs.md',
            '/other/git-nums.md'
          ]
        }
      ]
    }
  }),

  // 插件配置
  plugins: [
    // PWA 插件
    pwaPlugin({
      skipWaiting: true
    }),
    // 搜索插件
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索'
        }
      }
    })
  ]
})
