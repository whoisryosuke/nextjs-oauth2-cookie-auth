"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getBaseWebpackConfig;

var _stringify = _interopRequireDefault(require("@babel/runtime/core-js/json/stringify"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _keys = _interopRequireDefault(require("@babel/runtime/core-js/object/keys"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _map = _interopRequireDefault(require("@babel/runtime/core-js/map"));

var _path = _interopRequireWildcard(require("path"));

var _webpack = _interopRequireDefault(require("webpack"));

var _resolve = _interopRequireDefault(require("resolve"));

var _uglifyjsWebpackPlugin = _interopRequireDefault(require("uglifyjs-webpack-plugin"));

var _caseSensitivePathsWebpackPlugin = _interopRequireDefault(require("case-sensitive-paths-webpack-plugin"));

var _writeFileWebpackPlugin = _interopRequireDefault(require("write-file-webpack-plugin"));

var _friendlyErrorsWebpackPlugin = _interopRequireDefault(require("friendly-errors-webpack-plugin"));

var _core = require("@babel/core");

var _utils = require("./webpack/utils");

var _pagesPlugin = _interopRequireDefault(require("./plugins/pages-plugin"));

var _nextjsSsrImport = _interopRequireDefault(require("./plugins/nextjs-ssr-import"));

var _dynamicChunksPlugin = _interopRequireDefault(require("./plugins/dynamic-chunks-plugin"));

var _unlinkFilePlugin = _interopRequireDefault(require("./plugins/unlink-file-plugin"));

var _pagesManifestPlugin = _interopRequireDefault(require("./plugins/pages-manifest-plugin"));

var _buildManifestPlugin = _interopRequireDefault(require("./plugins/build-manifest-plugin"));

var presetItem = (0, _core.createConfigItem)(require('./babel/preset'), {
  type: 'preset'
});
var hotLoaderItem = (0, _core.createConfigItem)(require('react-hot-loader/babel'), {
  type: 'plugin'
});
var reactJsxSourceItem = (0, _core.createConfigItem)(require('@babel/plugin-transform-react-jsx-source'), {
  type: 'plugin'
});

var nextDir = _path.default.join(__dirname, '..', '..', '..');

var nextNodeModulesDir = _path.default.join(nextDir, 'node_modules');

var nextPagesDir = _path.default.join(nextDir, 'pages');

var defaultPages = ['_error.js', '_document.js', '_app.js'];
var interpolateNames = new _map.default(defaultPages.map(function (p) {
  return [_path.default.join(nextPagesDir, p), "dist/bundles/pages/".concat(p)];
}));

function babelConfig(dir, _ref) {
  var isServer = _ref.isServer,
      dev = _ref.dev;
  var mainBabelOptions = {
    cacheDirectory: true,
    presets: [],
    plugins: [dev && !isServer && hotLoaderItem, dev && reactJsxSourceItem].filter(Boolean)
  };

  var filename = _path.default.join(dir, 'filename.js');

  var externalBabelConfig = (0, _core.loadPartialConfig)({
    babelrc: true,
    filename: filename
  });

  if (externalBabelConfig && externalBabelConfig.babelrc) {
    // Log it out once
    if (!isServer) {
      console.log("> Using external babel configuration");
      console.log("> Location: \"".concat(externalBabelConfig.babelrc, "\""));
    }

    mainBabelOptions.babelrc = true;
  } else {
    mainBabelOptions.babelrc = false;
  } // Add our default preset if the no "babelrc" found.


  if (!mainBabelOptions.babelrc) {
    mainBabelOptions.presets.push(presetItem);
  }

  return mainBabelOptions;
}

function externalsConfig(dir, isServer) {
  var externals = [];

  if (!isServer) {
    return externals;
  }

  externals.push(function (context, request, callback) {
    (0, _resolve.default)(request, {
      basedir: dir,
      preserveSymlinks: true
    }, function (err, res) {
      if (err) {
        return callback();
      } // Default pages have to be transpiled


      if (res.match(/node_modules[/\\]next[/\\]dist[/\\]pages/)) {
        return callback();
      } // Webpack itself has to be compiled because it doesn't always use module relative paths


      if (res.match(/node_modules[/\\]webpack/)) {
        return callback();
      }

      if (res.match(/node_modules[/\\].*\.js$/)) {
        return callback(null, "commonjs ".concat(request));
      }

      callback();
    });
  });
  return externals;
}

function getBaseWebpackConfig(_x, _x2) {
  return _getBaseWebpackConfig.apply(this, arguments);
}

function _getBaseWebpackConfig() {
  _getBaseWebpackConfig = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2(dir, _ref2) {
    var _ref2$dev, dev, _ref2$isServer, isServer, buildId, config, babelLoaderOptions, defaultLoaders, nodePathList, pagesEntries, totalPages, clientEntries, webpackConfig;

    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _ref2$dev = _ref2.dev, dev = _ref2$dev === void 0 ? false : _ref2$dev, _ref2$isServer = _ref2.isServer, isServer = _ref2$isServer === void 0 ? false : _ref2$isServer, buildId = _ref2.buildId, config = _ref2.config;
            babelLoaderOptions = babelConfig(dir, {
              dev: dev,
              isServer: isServer
            });
            defaultLoaders = {
              babel: {
                loader: 'babel-loader',
                options: babelLoaderOptions
              } // Support for NODE_PATH

            };
            nodePathList = (process.env.NODE_PATH || '').split(process.platform === 'win32' ? ';' : ':').filter(function (p) {
              return !!p;
            });
            _context2.next = 6;
            return (0, _utils.getPages)(dir, {
              dev: dev,
              isServer: isServer,
              pageExtensions: config.pageExtensions.join('|')
            });

          case 6:
            pagesEntries = _context2.sent;
            totalPages = (0, _keys.default)(pagesEntries).length;
            clientEntries = !isServer ? {
              'main.js': [dev && !isServer && _path.default.join(__dirname, '..', '..', 'client', 'webpack-hot-middleware-client'), dev && !isServer && _path.default.join(__dirname, '..', '..', 'client', 'on-demand-entries-client'), require.resolve("../../client/next".concat(dev ? '-dev' : ''))].filter(Boolean)
            } : {};
            webpackConfig = {
              devtool: dev ? 'cheap-module-source-map' : false,
              name: isServer ? 'server' : 'client',
              cache: true,
              target: isServer ? 'node' : 'web',
              externals: externalsConfig(dir, isServer),
              context: dir,
              // Kept as function to be backwards compatible
              entry: function () {
                var _entry = (0, _asyncToGenerator2.default)(
                /*#__PURE__*/
                _regenerator.default.mark(function _callee() {
                  return _regenerator.default.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          return _context.abrupt("return", (0, _objectSpread2.default)({}, clientEntries, pagesEntries));

                        case 1:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, this);
                }));

                return function entry() {
                  return _entry.apply(this, arguments);
                };
              }(),
              output: {
                path: _path.default.join(dir, config.distDir, isServer ? 'dist' : ''),
                // server compilation goes to `.next/dist`
                filename: '[name]',
                libraryTarget: 'commonjs2',
                // This saves chunks with the name given via require.ensure()
                chunkFilename: '[name]-[chunkhash].js',
                strictModuleExceptionHandling: true
              },
              performance: {
                hints: false
              },
              resolve: {
                extensions: ['.js', '.jsx', '.json'],
                modules: [nextNodeModulesDir, 'node_modules'].concat((0, _toConsumableArray2.default)(nodePathList)),
                alias: {
                  next: nextDir,
                  // React already does something similar to this.
                  // But if the user has react-devtools, it'll throw an error showing that
                  // we haven't done dead code elimination (via uglifyjs).
                  // We purposly do not uglify React code to save the build time.
                  // (But it didn't increase the overall build size)
                  // Here we are doing an exact match with '$'
                  // So, you can still require nested modules like `react-dom/server`
                  react$: dev ? 'react/cjs/react.development.js' : 'react/cjs/react.production.min.js',
                  'react-dom$': dev ? 'react-dom/cjs/react-dom.development.js' : 'react-dom/cjs/react-dom.production.min.js'
                }
              },
              resolveLoader: {
                modules: [nextNodeModulesDir, 'node_modules', _path.default.join(__dirname, 'loaders')].concat((0, _toConsumableArray2.default)(nodePathList))
              },
              module: {
                rules: [dev && !isServer && {
                  test: /\.(js|jsx)$/,
                  loader: 'hot-self-accept-loader',
                  include: [_path.default.join(dir, 'pages'), nextPagesDir],
                  options: {
                    extensions: /\.(js|jsx)$/
                  }
                }, {
                  test: /\.(js|jsx)$/,
                  include: [dir],
                  exclude: /node_modules/,
                  use: defaultLoaders.babel
                }].filter(Boolean)
              },
              plugins: [new _webpack.default.IgnorePlugin(/(precomputed)/, /node_modules.+(elliptic)/), dev && new _webpack.default.NoEmitOnErrorsPlugin(), dev && !isServer && new _friendlyErrorsWebpackPlugin.default(), dev && new _webpack.default.NamedModulesPlugin(), dev && !isServer && new _webpack.default.HotModuleReplacementPlugin(), // Hot module replacement
              dev && new _unlinkFilePlugin.default(), dev && new _caseSensitivePathsWebpackPlugin.default(), // Since on macOS the filesystem is case-insensitive this will make sure your path are case-sensitive
              dev && new _webpack.default.LoaderOptionsPlugin({
                options: {
                  context: dir,
                  customInterpolateName: function customInterpolateName(url, name, opts) {
                    return interpolateNames.get(this.resourcePath) || url;
                  }
                }
              }), dev && new _writeFileWebpackPlugin.default({
                exitOnErrors: false,
                log: false,
                // required not to cache removed files
                useHashIndex: false
              }), !dev && new _webpack.default.IgnorePlugin(/react-hot-loader/), !isServer && !dev && new _uglifyjsWebpackPlugin.default({
                exclude: /react\.js/,
                parallel: true,
                sourceMap: false,
                uglifyOptions: {
                  compress: {
                    arrows: false,
                    booleans: false,
                    collapse_vars: false,
                    comparisons: false,
                    computed_props: false,
                    hoist_funs: false,
                    hoist_props: false,
                    hoist_vars: false,
                    if_return: false,
                    inline: false,
                    join_vars: false,
                    keep_infinity: true,
                    loops: false,
                    negate_iife: false,
                    properties: false,
                    reduce_funcs: false,
                    reduce_vars: false,
                    sequences: false,
                    side_effects: false,
                    switches: false,
                    top_retain: false,
                    toplevel: false,
                    typeofs: false,
                    unused: false,
                    conditionals: true,
                    dead_code: true,
                    evaluate: true
                  }
                }
              }), new _webpack.default.DefinePlugin({
                'process.env.NODE_ENV': (0, _stringify.default)(dev ? 'development' : 'production')
              }), !dev && new _webpack.default.optimize.ModuleConcatenationPlugin(), isServer && new _pagesManifestPlugin.default(), !isServer && new _buildManifestPlugin.default(), !isServer && new _pagesPlugin.default(), !isServer && new _dynamicChunksPlugin.default(), isServer && new _nextjsSsrImport.default(), // In dev mode, we don't move anything to the commons bundle.
              // In production we move common modules into the existing main.js bundle
              !isServer && new _webpack.default.optimize.CommonsChunkPlugin({
                name: 'main.js',
                filename: dev ? 'static/commons/main.js' : 'static/commons/main-[chunkhash].js',
                minChunks: function minChunks(module, count) {
                  // React and React DOM are used everywhere in Next.js. So they should always be common. Even in development mode, to speed up compilation.
                  if (module.resource && module.resource.includes("".concat(_path.sep, "react-dom").concat(_path.sep)) && count >= 0) {
                    return true;
                  }

                  if (module.resource && module.resource.includes("".concat(_path.sep, "react").concat(_path.sep)) && count >= 0) {
                    return true;
                  } // In the dev we use on-demand-entries.
                  // So, it makes no sense to use commonChunks based on the minChunks count.
                  // Instead, we move all the code in node_modules into each of the pages.


                  if (dev) {
                    return false;
                  } // commons
                  // If there are one or two pages, only move modules to common if they are
                  // used in all of the pages. Otherwise, move modules used in at-least
                  // 1/2 of the total pages into commons.


                  if (totalPages <= 2) {
                    return count >= totalPages;
                  }

                  return count >= totalPages * 0.5; // commons end
                }
              }), // We use a manifest file in development to speed up HMR
              dev && !isServer && new _webpack.default.optimize.CommonsChunkPlugin({
                name: 'manifest.js',
                filename: dev ? 'static/commons/manifest.js' : 'static/commons/manifest-[chunkhash].js'
              })].filter(Boolean)
            };

            if (typeof config.webpack === 'function') {
              webpackConfig = config.webpack(webpackConfig, {
                dir: dir,
                dev: dev,
                isServer: isServer,
                buildId: buildId,
                config: config,
                defaultLoaders: defaultLoaders,
                totalPages: totalPages
              });
            }

            return _context2.abrupt("return", webpackConfig);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _getBaseWebpackConfig.apply(this, arguments);
}