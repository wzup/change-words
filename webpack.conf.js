'use strict';

/**
 * Перенес конфиги в webpack/ директорию
 *
 * Для дева. Этот конфиг юзаю во время разработки.
 *
 * --watch перерезагружает при изменениях в entry файлах
 * -s для вывода в терминал аутпута от всяких лоадеров и плагинов
 * -p Production shortcut, Equals to --optimize-minimize --optimize-occurence-order
 * -d Development shortcut Equals to --debug --devtool source-map --output-pathinfo
 * -c --colors
 * --display-error-details - Show more information about the errors. I.e. this shows which paths are tried while resolving a module.
 *
 *     NODE_ENV='development' webpack --config webpack.conf.js -sdc --progress --display-error-details --display-chunks --watch
 *     NODE_ENV='production' webpack --config webpack.conf.js -sc --progress --display-error-details --display-chunks
 *
 *     NODE_ENV='production' webpack --config webpack/drafts/webpack.conf.test.js -sdc --progress --display-error-details --watch
 */

const NODE_ENV = process.env.NODE_ENV || 'development';
const path = require('path');
const webpack = require('webpack');
const browser_config = require(path.resolve('webpack/' + NODE_ENV + '.browser'));
// const server_config = require(path.resolve('webpack/' + NODE_ENV + '.server'));


module.exports = [browser_config/*, server_config*/];
// module.exports = [server_config];

