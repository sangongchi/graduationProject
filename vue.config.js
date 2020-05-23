const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  devServer: {
    disableHostCheck: true,
    port:7777,
  },
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@components', resolve('src/components'))
      .set('@views', resolve('src/views'));
  },
};
