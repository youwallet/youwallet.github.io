module.exports = {
  title: 'youwallet',
  description:"以太坊",   // 描述
  keywords:"以太坊、区块链、交易所、ERC20、token、代币、合约、比特币、虚拟货币",  // 关键字
  head:[   // 配置头部
      [
          ['link', {rel:'icon', href:"/icon.png"}],
          ['meta', {'name':'viewport', content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;"}]
      ]
  ],
  displayAllHeaders: true, // 默认值：false
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    sidebarDepth: 1, // 侧边栏显示2级
    nav: [
      { text: '首页', link: '/' },
      { text: '博客', link: '/blog/' },
      { text: 'APP下载', link: 'https://github.com/youwallet/wallet/releases' },
      { text: '接口', link: '/api/' },
      { text: '开发团队', link: '/team/' },
      { text: 'Github', link: 'https://github.com/youwallet/wallet/' },
    ],
    //sidebar: require('./sidebar'),  // 引入侧边栏
    sidebar: {
      '/api/': [
            '',     /* /foo/ */
         ],
      '/blog/':[
        '',
        '数字货币交易所的那点事',
        'IDEX协议分析',
        'DEX',
        'youWallet',
        {text:'xx',link:'https://mp.weixin.qq.com/s/qgXg68kQrK9Ym5eTBd4wXw'}
        ]
    } // 引入侧边栏
  },
}