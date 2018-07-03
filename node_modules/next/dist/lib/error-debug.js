"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ErrorDebug;
exports.ClientDebug = void 0;

var _getPrototypeOf = _interopRequireDefault(require("@babel/runtime/core-js/object/get-prototype-of"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _react = _interopRequireDefault(require("react"));

var _ansiHtml = _interopRequireDefault(require("ansi-html"));

var _head = _interopRequireDefault(require("./head"));

var _sourceMapSupport = require("../client/source-map-support");

// On the client side the error can come from multiple places for example react-hot-loader or client/index.js
// `componentDidCatch` doesn't support asynchronous execution, so we have to handle sourcemap support here
var ClientDebug =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(ClientDebug, _React$Component);

  function ClientDebug() {
    var _ref;

    var _temp, _this;

    (0, _classCallCheck2.default)(this, ClientDebug);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (0, _possibleConstructorReturn2.default)(_this, (_temp = _this = (0, _possibleConstructorReturn2.default)(this, (_ref = ClientDebug.__proto__ || (0, _getPrototypeOf.default)(ClientDebug)).call.apply(_ref, [this].concat(args))), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        mappedError: null
      }
    }), _temp));
  }

  (0, _createClass2.default)(ClientDebug, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var error = this.props.error; // If sourcemaps were already applied there is no need to set the state

      if (error.sourceMapsApplied) {
        return;
      } // Since componentDidMount doesn't handle errors we use then/catch here


      (0, _sourceMapSupport.applySourcemaps)(error).then(function () {
        _this2.setState({
          mappedError: error
        });
      }).catch(console.error);
    }
  }, {
    key: "render",
    value: function render() {
      var mappedError = this.state.mappedError;
      var error = this.props.error;

      if (!error.sourceMapsApplied && mappedError === null) {
        return _react.default.createElement("div", {
          style: styles.errorDebug
        }, _react.default.createElement("h1", {
          style: styles.heading
        }, "Loading stacktrace..."));
      }

      return _react.default.createElement(ErrorDebug, {
        error: error
      });
    }
  }]);
  return ClientDebug;
}(_react.default.Component); // On the server side the error has sourcemaps already applied, so `ErrorDebug` is rendered directly.


exports.ClientDebug = ClientDebug;

function ErrorDebug(_ref2) {
  var error = _ref2.error;
  var name = error.name,
      message = error.message,
      module = error.module;
  return _react.default.createElement("div", {
    style: styles.errorDebug
  }, _react.default.createElement(_head.default, null, _react.default.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0"
  })), module ? _react.default.createElement("h1", {
    style: styles.heading
  }, "Error in ", module.rawRequest) : null, name === 'ModuleBuildError' ? _react.default.createElement("pre", {
    style: styles.stack,
    dangerouslySetInnerHTML: {
      __html: (0, _ansiHtml.default)(encodeHtml(message))
    }
  }) : _react.default.createElement(StackTrace, {
    error: error
  }));
}

var StackTrace = function StackTrace(_ref3) {
  var _ref3$error = _ref3.error,
      name = _ref3$error.name,
      message = _ref3$error.message,
      stack = _ref3$error.stack,
      info = _ref3$error.info;
  return _react.default.createElement("div", null, _react.default.createElement("div", {
    style: styles.heading
  }, message || name), _react.default.createElement("pre", {
    style: styles.stack
  }, stack), info && _react.default.createElement("pre", {
    style: styles.stack
  }, info.componentStack));
};

var styles = {
  errorDebug: {
    background: '#0e0d0d',
    boxSizing: 'border-box',
    overflow: 'auto',
    padding: '24px',
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 9999,
    color: '#b3adac'
  },
  stack: {
    fontFamily: '"SF Mono", "Roboto Mono", "Fira Mono", consolas, menlo-regular, monospace',
    fontSize: '13px',
    lineHeight: '18px',
    color: '#b3adac',
    margin: 0,
    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word',
    marginTop: '16px'
  },
  heading: {
    fontFamily: '-apple-system, system-ui, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
    fontSize: '20px',
    fontWeight: '400',
    lineHeight: '28px',
    color: '#fff',
    marginBottom: '0px',
    marginTop: '0px'
  }
};

var encodeHtml = function encodeHtml(str) {
  return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}; // see color definitions of babel-code-frame:
// https://github.com/babel/babel/blob/master/packages/babel-code-frame/src/index.js


_ansiHtml.default.setColors({
  reset: ['6F6767', '0e0d0d'],
  darkgrey: '6F6767',
  yellow: '6F6767',
  green: 'ebe7e5',
  magenta: 'ebe7e5',
  blue: 'ebe7e5',
  cyan: 'ebe7e5',
  red: 'ff001f'
});