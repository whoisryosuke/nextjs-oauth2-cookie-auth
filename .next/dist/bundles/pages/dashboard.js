module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/css/seshsource.css":
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Drawer__ = __webpack_require__("@material-ui/core/Drawer");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Drawer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Drawer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_AppBar__ = __webpack_require__("@material-ui/core/AppBar");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_AppBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_AppBar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_Toolbar__ = __webpack_require__("@material-ui/core/Toolbar");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_Toolbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_Toolbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_List__ = __webpack_require__("@material-ui/core/List");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_List___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_List__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_core_ListItem__ = __webpack_require__("@material-ui/core/ListItem");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_core_ListItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__material_ui_core_ListItem__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_ui_core_ListItemText__ = __webpack_require__("@material-ui/core/ListItemText");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_ui_core_ListItemText___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__material_ui_core_ListItemText__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_ui_core_ListItemIcon__ = __webpack_require__("@material-ui/core/ListItemIcon");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_ui_core_ListItemIcon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__material_ui_core_ListItemIcon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_ui_core_Typography__ = __webpack_require__("@material-ui/core/Typography");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_ui_core_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__material_ui_core_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__material_ui_core_Divider__ = __webpack_require__("@material-ui/core/Divider");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__material_ui_core_Divider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__material_ui_core_Divider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__material_ui_core_IconButton__ = __webpack_require__("@material-ui/core/IconButton");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__material_ui_core_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__material_ui_core_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__material_ui_icons_Menu__ = __webpack_require__("@material-ui/icons/Menu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__material_ui_icons_Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__material_ui_icons_Menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__material_ui_icons_AccountCircle__ = __webpack_require__("@material-ui/icons/AccountCircle");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__material_ui_icons_AccountCircle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__material_ui_icons_AccountCircle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__material_ui_icons_ChevronLeft__ = __webpack_require__("@material-ui/icons/ChevronLeft");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__material_ui_icons_ChevronLeft___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__material_ui_icons_ChevronLeft__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__material_ui_icons_ChevronRight__ = __webpack_require__("@material-ui/icons/ChevronRight");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__material_ui_icons_ChevronRight___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__material_ui_icons_ChevronRight__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__material_ui_icons_Drafts__ = __webpack_require__("@material-ui/icons/Drafts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__material_ui_icons_Drafts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19__material_ui_icons_Drafts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__material_ui_icons_Inbox__ = __webpack_require__("@material-ui/icons/Inbox");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__material_ui_icons_Inbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20__material_ui_icons_Inbox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__material_ui_core_MenuItem__ = __webpack_require__("@material-ui/core/MenuItem");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__material_ui_core_MenuItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21__material_ui_core_MenuItem__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__material_ui_core_Menu__ = __webpack_require__("@material-ui/core/Menu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__material_ui_core_Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22__material_ui_core_Menu__);
var _jsxFileName = "/Users/ryo/Development/seshsource-dashboard-next-context/components/header.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
























var drawerWidth = 240;

var styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1,
      zIndex: 1,
      position: 'relative',
      display: 'flex'
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: "calc(100% - ".concat(drawerWidth, "px)"),
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 36
    },
    hide: {
      display: 'none'
    },
    drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerPaperClose: _defineProperty({
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      width: theme.spacing.unit * 7
    }, theme.breakpoints.up('sm'), {
      width: theme.spacing.unit * 9
    })
  };
};

var Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Header.__proto__ || Object.getPrototypeOf(Header)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        open: false,
        anchorEl: null
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleDrawerOpen", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          open: true
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleDrawerClose", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          open: false
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleMenu", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        _this.setState({
          anchorEl: event.currentTarget
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleClose", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          anchorEl: null
        });
      }
    }), _temp));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          theme = _props.theme,
          loggedIn = _props.loggedIn,
          user = _props.user;
      var _state = this.state,
          auth = _state.auth,
          anchorEl = _state.anchorEl;
      var open = Boolean(anchorEl);
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_AppBar___default.a, {
        position: "absolute",
        className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(classes.appBar, this.state.open && classes.appBarShift),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_Toolbar___default.a, {
        disableGutters: !this.state.open,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__material_ui_core_IconButton___default.a, {
        color: "inherit",
        "aria-label": "open drawer",
        onClick: this.handleDrawerOpen,
        className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(classes.menuButton, this.state.open && classes.hide),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__material_ui_icons_Menu___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__material_ui_core_Typography___default.a, {
        variant: "title",
        color: "inherit",
        noWrap: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, "SeshSource"), user && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__material_ui_core_IconButton___default.a, {
        "aria-owns": open ? 'menu-appbar' : null,
        "aria-haspopup": "true",
        onClick: this.handleMenu,
        color: "inherit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__material_ui_icons_AccountCircle___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_22__material_ui_core_Menu___default.a, {
        id: "menu-appbar",
        anchorEl: anchorEl,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right'
        },
        transformOrigin: {
          vertical: 'top',
          horizontal: 'right'
        },
        open: open,
        onClose: this.handleClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_21__material_ui_core_MenuItem___default.a, {
        onClick: this.handleClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }, "Profile"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_21__material_ui_core_MenuItem___default.a, {
        onClick: this.handleClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }, "My account"))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Drawer___default.a, {
        variant: "permanent",
        classes: {
          paper: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(classes.drawerPaper, !this.state.open && classes.drawerPaperClose)
        },
        open: this.state.open,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.toolbar,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__material_ui_core_IconButton___default.a, {
        onClick: this.handleDrawerClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }, theme.direction === 'rtl' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_18__material_ui_icons_ChevronRight___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17__material_ui_icons_ChevronLeft___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_List___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
        href: "/events/manage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__material_ui_core_ListItem___default.a, {
        button: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__material_ui_core_ListItemIcon___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_19__material_ui_icons_Drafts___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__material_ui_core_ListItemText___default.a, {
        primary: "Manage Events",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
        href: "/events/create",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__material_ui_core_ListItem___default.a, {
        button: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__material_ui_core_ListItemIcon___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_20__material_ui_icons_Inbox___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__material_ui_core_ListItemText___default.a, {
        primary: "Create Event",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__material_ui_core_Divider___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_List___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
        href: "/events/create",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__material_ui_core_ListItem___default.a, {
        button: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__material_ui_core_ListItemIcon___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_20__material_ui_icons_Inbox___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__material_ui_core_ListItemText___default.a, {
        primary: "Inbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__material_ui_core_ListItem___default.a, {
        button: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__material_ui_core_ListItemIcon___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_19__material_ui_icons_Drafts___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__material_ui_core_ListItemText___default.a, {
        primary: "Drafts",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__material_ui_core_Divider___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        }
      })));
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Header.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,
  theme: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_styles__["withStyles"])(styles, {
  withTheme: true
})(Header));

/***/ }),

/***/ "./pages/dashboard.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_withAuth__ = __webpack_require__("./utils/withAuth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Paper__ = __webpack_require__("@material-ui/core/Paper");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Paper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Paper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Typography__ = __webpack_require__("@material-ui/core/Typography");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_header__ = __webpack_require__("./components/header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_css_seshsource_css__ = __webpack_require__("./assets/css/seshsource.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_css_seshsource_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__assets_css_seshsource_css__);
var _jsxFileName = "/Users/ryo/Development/seshsource-dashboard-next-context/pages/dashboard.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1,
      zIndex: 1,
      position: 'relative',
      display: 'flex'
    },
    toolbar: _objectSpread({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px'
    }, theme.mixins.toolbar),
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing.unit * 3
    },
    paper: _objectSpread({}, theme.mixins.gutters(), {
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2
    })
  };
};

var Dashboard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Dashboard, _React$Component);

  function Dashboard() {
    _classCallCheck(this, Dashboard);

    return _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).apply(this, arguments));
  }

  _createClass(Dashboard, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          theme = _props.theme,
          loggedIn = _props.loggedIn; //  const user = this.props.auth.getProfile()

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_header__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("main", {
        className: classes.content,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.toolbar,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Paper___default.a, {
        className: classes.paper,
        elevation: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Typography___default.a, {
        variant: "headline",
        component: "h3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, "Recent Events"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Typography___default.a, {
        component: "p",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, "List of recent events here"))));
    }
  }]);

  return Dashboard;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1__utils_withAuth__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["withStyles"])(styles, {
  withTheme: true
})(Dashboard)));

/***/ }),

/***/ "./utils/AuthService.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AuthService =
/*#__PURE__*/
function () {
  function AuthService(domain) {
    _classCallCheck(this, AuthService);

    this.domain = domain || 'http://localhost';
    this.fetch = this.fetch.bind(this);
    this.login = this.login.bind(this);
    this.getProfile = this.getProfile.bind(this);
  }

  _createClass(AuthService, [{
    key: "login",
    value: function login(email, password) {
      var _this = this;

      // Get a token
      return this.fetch("".concat(this.domain, "/api/token"), {
        method: 'POST',
        body: JSON.stringify({
          email: email,
          password: password
        })
      }).then(function (res) {
        _this.setToken(res);

        return _this.fetch("".concat(_this.domain, "/api/user"), {
          method: 'GET'
        });
      }).then(function (res) {
        _this.setProfile(res);

        return Promise.resolve(res);
      });
    }
  }, {
    key: "setProfile",
    value: function setProfile(profile) {
      // Saves profile data to localStorage
      localStorage.setItem('profile', JSON.stringify(profile));
    }
  }, {
    key: "getProfile",
    value: function getProfile() {
      // Retrieves the profile data from localStorage
      var profile = localStorage.getItem('profile');
      return profile ? JSON.parse(localStorage.profile) : {};
    }
  }, {
    key: "getToken",
    value: function getToken() {
      // Retrieves the user token from localStorage
      return localStorage.getItem('id_token');
    }
  }, {
    key: "logout",
    value: function logout() {
      // Clear user token and profile data from localStorage
      localStorage.removeItem('id_token');
      localStorage.removeItem('profile');
    }
  }, {
    key: "_checkStatus",
    value: function _checkStatus(response) {
      // raises an error in case response status is not a success
      if (response.status >= 200 && response.status < 300) {
        return response;
      } else {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
    }
  }, {
    key: "fetch",
    value: function (_fetch) {
      function fetch(_x, _x2) {
        return _fetch.apply(this, arguments);
      }

      fetch.toString = function () {
        return _fetch.toString();
      };

      return fetch;
    }(function (url, options) {
      // performs api calls sending the required authentication headers
      var headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };

      if (this.loggedIn()) {
        headers['Authorization'] = 'Bearer ' + this.getToken();
      }

      return fetch(url, _objectSpread({
        headers: headers
      }, options)).then(this._checkStatus).then(function (response) {
        return response.json();
      });
    })
  }]);

  return AuthService;
}();



/***/ }),

/***/ "./utils/Cookies.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setCookie; });
/* unused harmony export removeCookie */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCookie; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_js_cookie__ = __webpack_require__("js-cookie");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_js_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_js_cookie__);

var setCookie = function setCookie(key, value) {
  if (process.browser) {
    __WEBPACK_IMPORTED_MODULE_0_js_cookie___default.a.set(key, value, {
      expires: 1,
      path: "/"
    });
  }
};
var removeCookie = function removeCookie(key) {
  if (process.browser) {
    __WEBPACK_IMPORTED_MODULE_0_js_cookie___default.a.remove(key, {
      expires: 1
    });
  }
};
var getCookie = function getCookie(key, req) {
  return process.browser ? getCookieFromBrowser(key) : getCookieFromServer(key, req);
};

var getCookieFromBrowser = function getCookieFromBrowser(key) {
  console.log('grabbing key from browser');
  return __WEBPACK_IMPORTED_MODULE_0_js_cookie___default.a.get(key);
};

var getCookieFromServer = function getCookieFromServer(key, req) {
  console.log('grabbing key from server');

  if (!req.headers.cookie) {
    return undefined;
  }

  var rawCookie = req.headers.cookie.split(";").find(function (c) {
    return c.trim().startsWith("".concat(key, "="));
  });

  if (!rawCookie) {
    return undefined;
  }

  return rawCookie.split("=")[1];
};

/***/ }),

/***/ "./utils/withAuth.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = withAuth;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AuthService__ = __webpack_require__("./utils/AuthService.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_Cookies__ = __webpack_require__("./utils/Cookies.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_js_cookie__ = __webpack_require__("js-cookie");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_js_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_js_cookie__);

var _jsxFileName = "/Users/ryo/Development/seshsource-dashboard-next-context/utils/withAuth.js";

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
      }]);

      return Authenticated;
    }(__WEBPACK_IMPORTED_MODULE_1_react__["Component"])
  );
}

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/dashboard.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "@material-ui/core/AppBar":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Divider":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "@material-ui/core/Drawer":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),

/***/ "@material-ui/core/IconButton":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/List":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "@material-ui/core/ListItem":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "@material-ui/core/ListItemIcon":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "@material-ui/core/Menu":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Menu");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "@material-ui/core/Paper":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Typography":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/AccountCircle":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AccountCircle");

/***/ }),

/***/ "@material-ui/icons/ChevronLeft":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ChevronLeft");

/***/ }),

/***/ "@material-ui/icons/ChevronRight":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ChevronRight");

/***/ }),

/***/ "@material-ui/icons/Drafts":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Drafts");

/***/ }),

/***/ "@material-ui/icons/Inbox":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Inbox");

/***/ }),

/***/ "@material-ui/icons/Menu":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "classnames":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "js-cookie":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=dashboard.js.map