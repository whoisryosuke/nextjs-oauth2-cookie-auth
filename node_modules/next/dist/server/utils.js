"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAvailableChunks = getAvailableChunks;
exports.isInternalUrl = isInternalUrl;
exports.addCorsSupport = addCorsSupport;
exports.MATCH_ROUTE_NAME = exports.IS_BUNDLED_PAGE = void 0;

var _path = require("path");

var _fs = require("fs");

var IS_BUNDLED_PAGE = /^bundles[/\\]pages.*\.js$/;
exports.IS_BUNDLED_PAGE = IS_BUNDLED_PAGE;
var MATCH_ROUTE_NAME = /^bundles[/\\]pages[/\\](.*)\.js$/;
exports.MATCH_ROUTE_NAME = MATCH_ROUTE_NAME;

function getAvailableChunks(dir, dist) {
  var chunksDir = (0, _path.join)(dir, dist, 'chunks');
  if (!(0, _fs.existsSync)(chunksDir)) return {};
  var chunksMap = {};
  var chunkFiles = (0, _fs.readdirSync)(chunksDir);
  chunkFiles.forEach(function (filename) {
    if (/\.js$/.test(filename)) {
      var chunkName = filename.replace(/-.*/, '');
      chunksMap[chunkName] = filename;
    }
  });
  return chunksMap;
}

var internalPrefixes = [/^\/_next\//, /^\/static\//];

function isInternalUrl(url) {
  for (var _i = 0; _i < internalPrefixes.length; _i++) {
    var prefix = internalPrefixes[_i];

    if (prefix.test(url)) {
      return true;
    }
  }

  return false;
}

function addCorsSupport(req, res) {
  if (!req.headers.origin) {
    return {
      preflight: false
    };
  }

  res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Request-Method', req.headers.origin);
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  res.setHeader('Access-Control-Allow-Headers', req.headers.origin);

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return {
      preflight: true
    };
  }

  return {
    preflight: false
  };
}