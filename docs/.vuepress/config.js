module.exports = {
  dest: 'vuepress',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'devZhang',
      description: 'something good will be arrive'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  serviceWorker: true,
  theme: 'vue',
  themeConfig: {
    repo: 'dvxiaofan',
    editLinks: false,
    docsDir: 'docs',
    locales: {
      '/': {
        // label: '简体中文',
        // selectText: '选择语言',
        // editLinkText: '编辑此页',
        // lastUpdated: '上次更新',
        nav: [
          {
            text: '前端',
            items: [
							{
                text: 'JS',
                link: '/js/'
							},
              // {
              //   text: 'CSS',
              //   link: '/css/'
              // },
              {
                text: 'Echarts',
                link: '/echarts/'
              },
              
						]
          },
          {
            text: '生活随笔',
            link: '/lifes/'
          },
          {
            text: '关于',
            link: '/about/'
          }
        ],
        sidebar: {
					'/js/': jsSidebarConfig('JS相关'),
					'/css/': cssSidebarConfig('CSS相关'),
					'/echarts/': echartSidebarConfig('Echarts'),
					'/lifes/': lifeSidebarConfig('生活小记录'),
					
        }
      }
    }
  }
}
// 侧边栏配置
// JS页面
function jsSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        // '',
        'js01',
        'js02',
        'js03',
        'js04',
        'js05',
      ]
    }
  ]
}
// CSS页面
function cssSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        // '',
        'css01',
				// 'css02'
      ]
    }
  ]
}

// Echarts页面
function echartSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        // '',
        '01',
				// '02'
      ]
    }
  ]
}


// 生活随笔页面
function lifeSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        // '',
        'life01',
				// 'life02'
      ]
    }
  ]
}
