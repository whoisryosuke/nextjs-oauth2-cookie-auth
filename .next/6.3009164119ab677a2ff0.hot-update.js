webpackHotUpdate(6,{

/***/ "./utils/withAuth.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module, process) {/* harmony export (immutable) */ __webpack_exports__["a"] = withAuth;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AuthService__ = __webpack_require__("./utils/AuthService.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_Cookies__ = __webpack_require__("./utils/Cookies.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_js_cookie__ = __webpack_require__("./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_js_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_js_cookie__);

var _jsxFileName = "/Users/ryo/Development/seshsource-dashboard-next-context/utils/withAuth.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






function withAuth(AuthComponent) {
  var Auth = new __WEBPACK_IMPORTED_MODULE_3__AuthService__["a" /* default */](process.env.API_DOMAIN_URL);
  return (
    /*#__PURE__*/
    function (_Component) {
      _inherits(Authenticated, _Component);

      _createClass(Authenticated, null, [{
        key: "getInitialProps",
        value: function () {
          var _getInitialProps = _asyncToGenerator(
          /*#__PURE__*/
          __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(ctx) {
            var isServer, userAgent, seshToken, isLoading, pageProps;
            return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    isServer = !!ctx.req; // Ensures material-ui renders the correct css prefixes server-side

                    if (!isServer) {
                      userAgent = navigator.userAgent;
                      seshToken = __WEBPACK_IMPORTED_MODULE_5_js_cookie___default.a.get('seshToken');
                    } else {
                      userAgent = ctx.req.headers['user-agent'];
                      seshToken = Object(__WEBPACK_IMPORTED_MODULE_4__utils_Cookies__["a" /* getCookie */])('seshToken', ctx.req);
                    }

                    isLoading = true;
                    console.log(seshToken);

                    if (!seshToken) {// ctx.res.writeHead(301, {
                      //   Location: `http://localhost/oauth/authorize/?client_id=4&redirect_uri=http://localhost:3000/token&response_type=code`
                      // })
                      // ctx.res.end()
                    } else {
                      Object(__WEBPACK_IMPORTED_MODULE_4__utils_Cookies__["b" /* setCookie */])('seshToken', seshToken);
                      isLoading = false;
                    } // Check if Page has a `getInitialProps`; if so, call it.


                    _context.t0 = AuthComponent.getInitialProps;

                    if (!_context.t0) {
                      _context.next = 10;
                      break;
                    }

                    _context.next = 9;
                    return AuthComponent.getInitialProps(ctx);

                  case 9:
                    _context.t0 = _context.sent;

                  case 10:
                    pageProps = _context.t0;
                    return _context.abrupt("return", _objectSpread({}, pageProps, {
                      userAgent: userAgent,
                      isLoading: isLoading,
                      seshToken: seshToken
                    }));

                  case 12:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          return function getInitialProps(_x) {
            return _getInitialProps.apply(this, arguments);
          };
        }()
      }]);

      function Authenticated(props) {
        var _this;

        _classCallCheck(this, Authenticated);

        _this = _possibleConstructorReturn(this, (Authenticated.__proto__ || Object.getPrototypeOf(Authenticated)).call(this, props));
        _this.state = {
          isLoading: props.isLoading,
          token: props.seshToken
        };
        return _this;
      }

      _createClass(Authenticated, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          if (!this.state.token) {
            __WEBPACK_IMPORTED_MODULE_2_next_router___default.a.push('/');
          }

          this.setState({
            isLoading: false
          });
        }
      }, {
        key: "render",
        value: function render() {
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 64
            }
          }, this.state.isLoading ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 66
            }
          }, "LOADING....") : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(AuthComponent, _extends({}, this.props, {
            auth: Auth,
            token: this.state.token,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 68
            }
          })));
        }
      }, {
        key: "__reactstandin__regenerateByEval",
        // @ts-ignore
        value: function __reactstandin__regenerateByEval(key, code) {
          // @ts-ignore
          this[key] = eval(code);
        }
      }]);

      return Authenticated;
    }(__WEBPACK_IMPORTED_MODULE_1_react__["Component"])
  );
}
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(withAuth, "withAuth", "/Users/ryo/Development/seshsource-dashboard-next-context/utils/withAuth.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module), __webpack_require__("./node_modules/node-libs-browser/node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=6.3009164119ab677a2ff0.hot-update.js.map