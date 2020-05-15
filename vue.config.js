// let transformRemoveConsolePlugin = []
// if (process.env.NODE_ENV === 'production') {
//   transformRemoveConsolePlugin = ['transform-remove-console']
// }

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // vue-cli3.0 起别名后 HTML中引入的文件不生效，就在前面添加~
        assets: '@/assets',
        components: '@/components',
        network: '@/network',
        views: '@/views',
        common: '@/common'
      }
    }
  },
  lintOnSave: false, // 生产环境是否生成 SourceMap
  devServer: {
    host: 'localhost',
    port: 8080,
    https: false,
    hotOnly: false,
    open: true // 配置自动启动浏览器
    // proxy: {
    //   '/api': {
    //     //使用"/api"来代替"http://f.apiplus.c"
    //     // target: 'http://192.168.0.111:9092', //源地址
    //     ws: true,
    //     changeOrigin: true, //改变源
    //     pathRewrite: {
    //       '^/api': '/' //路径重写
    //     }
    //   }
    // }
  }
  // pxtorem
  // css: {
  //   loaderOptions: {
  //     postcss: {
  //       plugins: [
  //         require('postcss-pxtorem')({
  //           rootValue: 16, // 换算的基数
  //           selectorBlackList: [], // 忽略转换正则匹配项，指定不需要转换的类
  //           propList: ['*'], // proplist就是那些属性需要转换成rem，这里*是全部的意思
  //           minPixelValue: 2 // 最小转换单位，这是最小转换单位是2px的意思
  //         })
  //       ]
  //     }
  //   }
  // },
  // // 打包去除console.log()
  // plugins: [
  //   ...transformRemoveConsolePlugin
  // ]
}
