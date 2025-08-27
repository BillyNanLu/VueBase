const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // 1. 是否在开发时进行 ESLint 语法检查
  lintOnSave: false,

  // 2. 是否转译 node_modules 依赖
  transpileDependencies: true,

  // 3. 基础路径，部署到子目录时需要修改
  // 例如项目部署在 https://example.com/myapp/
  // publicPath: process.env.NODE_ENV === 'production' ? '/myapp/' : '/',

  // 4. 生成的静态资源存放目录（默认 'dist'）
  // outputDir: 'dist',

  // 5. 静态资源目录名（js, css, img, fonts）
  // assetsDir: 'static',

  // 6. 是否在构建时生成 SourceMap 文件，生产环境建议关闭以减少包体积
  // productionSourceMap: false,

  // 7. 开发服务器配置
  // 示例
  /* devServer: {
    port: 8080, // 本地开发端口
    open: true, // 启动后自动打开浏览器
    proxy: {
      // 解决开发环境跨域问题
      '/api': {
        target: 'http://localhost:3000', // 代理目标 API 服务器
        // ws: true, // 用于支持websocket（可以不写，不写默认true）
        changeOrigin: true, // 用于控制请求头中的host值（可以不写，不写默认true）
        pathRewrite: { '^/api': '' }, // 路径重写
      },
    },
  }, */
  devServer: {
    proxy: {
      // 解决开发环境跨域问题
      '/nanstudio_students': {
        target: 'http://localhost:5002', // 代理目标 API 服务器
        // ws: true, // 用于支持websocket（可以不写，不写默认true）
        changeOrigin: true, // 用于控制请求头中的host值（可以不写，不写默认true）
        pathRewrite: { '^/nanstudio_students': '' }, // 路径重写
      },
      '/nanstudio_cars': {
        target: 'http://localhost:5001/', // 代理目标 API 服务器
        // ws: true, // 用于支持websocket（可以不写，不写默认true）
        changeOrigin: true, // 用于控制请求头中的host值（可以不写，不写默认true）
        pathRewrite: { '^/nanstudio_cars': '' }, // 路径重写
      }
    },
  },

  // 8. 多页面应用配置
  // 如果是单页面应用（SPA），可以去掉 pages
  pages: {
    index: {
      // 入口文件
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      // 可用于 htmlWebpackPlugin.options.title
      title: 'My Vue App',
    },
    // 可添加更多页面
    // admin: {
    //   entry: 'src/admin/main.js',
    //   template: 'public/admin.html',
    //   filename: 'admin.html',
    //   title: 'Admin Panel',
    // },
  },
})
