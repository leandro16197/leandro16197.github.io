module.exports = {
  publicPath: '/leandro16197.github.io/',
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Leandro Ovejero | Developer'
        return args
      })
  }
}