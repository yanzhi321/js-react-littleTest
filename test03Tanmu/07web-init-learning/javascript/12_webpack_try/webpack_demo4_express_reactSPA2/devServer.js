//要启用HMR，还需要修改webpack配置对象以包含HMR入口点。该webpack-dev-server软件包包含一个addDevServerEntrypoints您可以用来执行此操作的方法。这是一个小例子，它看起来如何：
// 无须刷新
// npm run devserver
const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const config = require('./webpack.config.js');
const options = {
  contentBase: './dist',
  hot: true,
  host: 'localhost'
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

const port = 3005
server.listen(port, 'localhost', () => {
  console.log('dev server listening on port 3005');
});