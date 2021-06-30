module.exports = {
  runtimeCompiler: true,
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: '',
  devServer: {
    compress: true,
    disableHostCheck: true,
    
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 300,
    poll: 1000,
  },
 } 
}
