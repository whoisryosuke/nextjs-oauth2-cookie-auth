"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = build;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _promise = _interopRequireDefault(require("@babel/runtime/core-js/promise"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _path = require("path");

var _promisify = _interopRequireDefault(require("../lib/promisify"));

var _fs = _interopRequireDefault(require("fs"));

var _webpack = _interopRequireDefault(require("webpack"));

var _config = _interopRequireDefault(require("../config"));

var _constants = require("../../lib/constants");

var _webpack2 = _interopRequireDefault(require("./webpack"));

var access = (0, _promisify.default)(_fs.default.access);
var writeFile = (0, _promisify.default)(_fs.default.writeFile);

function build(_x) {
  return _build.apply(this, arguments);
}

function _build() {
  _build = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2(dir) {
    var conf,
        config,
        buildId,
        configs,
        _args2 = arguments;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            conf = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : null;
            config = (0, _config.default)(_constants.PHASE_PRODUCTION_BUILD, dir, conf);
            _context2.next = 4;
            return config.generateBuildId();

          case 4:
            buildId = _context2.sent;
            _context2.prev = 5;
            _context2.next = 8;
            return access(dir, (_fs.default.constants || _fs.default).W_OK);

          case 8:
            _context2.next = 14;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](5);
            console.error("> Failed, build directory is not writeable. https://err.sh/zeit/next.js/build-dir-not-writeable");
            throw _context2.t0;

          case 14:
            _context2.prev = 14;
            _context2.next = 17;
            return _promise.default.all([(0, _webpack2.default)(dir, {
              buildId: buildId,
              isServer: false,
              config: config
            }), (0, _webpack2.default)(dir, {
              buildId: buildId,
              isServer: true,
              config: config
            })]);

          case 17:
            configs = _context2.sent;
            _context2.next = 20;
            return runCompiler(configs);

          case 20:
            _context2.next = 22;
            return writeBuildId(dir, buildId, config);

          case 22:
            _context2.next = 28;
            break;

          case 24:
            _context2.prev = 24;
            _context2.t1 = _context2["catch"](14);
            console.error("> Failed to build");
            throw _context2.t1;

          case 28:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[5, 10], [14, 24]]);
  }));
  return _build.apply(this, arguments);
}

function runCompiler(compiler) {
  return new _promise.default(
  /*#__PURE__*/
  function () {
    var _ref = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(resolve, reject) {
      var webpackCompiler;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.t0 = _webpack.default;
              _context.next = 3;
              return compiler;

            case 3:
              _context.t1 = _context.sent;
              _context.next = 6;
              return (0, _context.t0)(_context.t1);

            case 6:
              webpackCompiler = _context.sent;
              webpackCompiler.run(function (err, stats) {
                if (err) return reject(err);
                var jsonStats = stats.toJson();

                if (jsonStats.errors.length > 0) {
                  var error = new Error(jsonStats.errors[0]);
                  error.errors = jsonStats.errors;
                  error.warnings = jsonStats.warnings;
                  return reject(error);
                }

                resolve(jsonStats);
              });

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function (_x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }());
}

function writeBuildId(_x4, _x5, _x6) {
  return _writeBuildId.apply(this, arguments);
}

function _writeBuildId() {
  _writeBuildId = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee3(dir, buildId, config) {
    var buildIdPath;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            buildIdPath = (0, _path.join)(dir, config.distDir, 'BUILD_ID');
            _context3.next = 3;
            return writeFile(buildIdPath, buildId, 'utf8');

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));
  return _writeBuildId.apply(this, arguments);
}