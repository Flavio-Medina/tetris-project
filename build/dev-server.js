const bodyParser = require("body-parser");
const config = require('../config');
const cors = require("cors");
const database = require('./../config/database/database');
const express = require('express');
const opn = require('opn');
const path = require('path');
const proxyMiddleware = require('http-proxy-middleware');
const user = require('./../auth/routes/route');
const webpack = require('webpack');
const webpackConfig = require('./webpack.dev.conf');
require('./check-versions')();

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/user', user);

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV);
}

var port = process.env.PORT || config.dev.port;
var autoOpenBrowser = !!config.dev.autoOpenBrowser;
var proxyTable = config.dev.proxyTable;

var compiler = webpack(webpackConfig);

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
});

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: false,
  heartbeat: 2000
});

compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb();
  });
});

Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context];
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options));
})


app.use(require('connect-history-api-fallback')());
app.use(devMiddleware);
app.use(hotMiddleware);

var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory);
app.use(staticPath, express.static('./static'));

var uri = 'http://localhost:' + port;

var _resolve;
var readyPromise = new Promise(resolve => {
  _resolve = resolve;
})

console.log('Starting server');
devMiddleware.waitUntilValid(() => {
  console.log('Listening at ' + uri + '\n');
  console.log('DOCKER: Listening at http://localhost:80');
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    // Zeile opn(uri) "unkommentieren" damit sich der Browser automatisch öffnet nach "npm start".
    // Muss aber für Docker so bleiben bzw. ganz entfernt werden!
    // opn(uri);
  }
  _resolve();
});

var server = app.listen(port);

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close();
  }
}
