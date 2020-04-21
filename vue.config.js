const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  devServer: {
    disableHostCheck: true,
    proxy: 'http://localhost:8080',
    public: '192.168.xxx.xxx:8080', // 本地ip
  },
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@components', resolve('src/components'))
      .set('@views', resolve('src/views'));
  },
};
