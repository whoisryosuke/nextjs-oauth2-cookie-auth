"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getConfig;
exports.loadConfig = loadConfig;

var _assign = _interopRequireDefault(require("@babel/runtime/core-js/object/assign"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _map = _interopRequireDefault(require("@babel/runtime/core-js/map"));

var _findUp = _interopRequireDefault(require("find-up"));

var _uuid = _interopRequireDefault(require("uuid"));

var cache = new _map.default();
var defaultConfig = {
  webpack: null,
  webpackDevMiddleware: null,
  poweredByHeader: true,
  distDir: '.next',
  assetPrefix: '',
  configOrigin: 'default',
  useFileSystemPublicRoutes: true,
  generateBuildId: function generateBuildId() {
    return _uuid.default.v4();
  },
  generateEtags: true,
  pageExtensions: ['jsx', 'js']
};

function getConfig(phase, dir, customConfig) {
  if (!cache.has(dir)) {
    cache.set(dir, loadConfig(phase, dir, customConfig));
  }

  return cache.get(dir);
}

function loadConfig(phase, dir, customConfig) {
  if (customConfig && (0, _typeof2.default)(customConfig) === 'object') {
    customConfig.configOrigin = 'server';
    return withDefaults(customConfig);
  }

  var path = _findUp.default.sync('next.config.js', {
    cwd: dir
  });

  var userConfig = {};

  if (path && path.length) {
    // $FlowFixMe
    var userConfigModule = require(path);

    userConfig = userConfigModule.default || userConfigModule;

    if (typeof userConfigModule === 'function') {
      userConfig = userConfigModule(phase, {
        defaultConfig: defaultConfig
      });
    }

    userConfig.configOrigin = 'next.config.js';
  }

  return withDefaults(userConfig);
}

function withDefaults(config) {
  return (0, _assign.default)({}, defaultConfig, config);
}