module.exports = {
  dest: 'vuepress',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'DevZhang',
      description: 'Something Good Will Be Happen!'
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
        nav: [
          {
            text: 'FrontEnd',
            items: [
							{
                text: 'JS',
                link: '/js/'
							},
              {
                text: 'React',
                link: '/react/'
              },
              {
                text: 'Vue',
                link: '/vue/'
              }
						]
					},
					{
						text: 'Tool',
						items: [
							{
                text: 'Echarts',
                link: '/echarts/'
							},
						]
          },
          {
						text: 'Others',
            link: '/other/'
					},
          {
            text: 'Life',
            link: '/life/'
          },
          {
            text: 'About',
            link: '/about/'
          }
        ],
        sidebar: {
					'/js/': jsSidebarConfig('JavaScript'),
					'/css/': cssSidebarConfig('CSS'),
					'/html/': htmlSidebarConfig('HTML'),
					'/echarts/': echartSidebarConfig('Echarts'),
					'/react/': reactSidebarConfig('React'),
					'/vue/': vueSidebarConfig('Vue'),
					'/life/': lifeSidebarConfig('Life'),
					'/other/': otherSidebarConfig('Others'),
					
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
        '',
        'js02',
        'js03',
        'js04',
        'js05',
        'js06',
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
        '',
				// 'css02'
      ]
    }
  ]
}

// HTML页面
function htmlSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        // '',
				// '02'
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
        '',
				// '02'
      ]
    }
  ]
}

// React页面
function reactSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
				'02'
      ]
    }
  ]
}
// Vue页面
function vueSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
				// '02'
      ]
    }
  ]
}

// 其他技术文章目录
function otherSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'nvm',
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
        // 'life01',
				// 'life02'
      ]
    }
  ]
}
