module.exports = {
  runtimeCompiler: true,
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: '',
  devServer: {
    compress: true,
    disableHostCheck: true,   // That solved it

 }   
}


