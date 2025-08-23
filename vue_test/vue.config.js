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
