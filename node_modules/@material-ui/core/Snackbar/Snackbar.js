"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/builtin/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/possibleConstructorReturn"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/defineProperty"));

var _objectSpread8 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectSpread"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactEventListener = _interopRequireDefault(require("react-event-listener"));

var _withStyles = _interopRequireDefault(require("../styles/withStyles"));

var _transitions = require("../styles/transitions");

var _ClickAwayListener = _interopRequireDefault(require("../ClickAwayListener"));

var _helpers = require("../utils/helpers");

var _Slide = _interopRequireDefault(require("../Slide"));

var _SnackbarContent = _interopRequireDefault(require("../SnackbarContent"));

var styles = function styles(theme) {
  var gutter = theme.spacing.unit * 3;
  var top = {
    top: 0
  };
  var bottom = {
    bottom: 0
  };
  var right = {
    justifyContent: 'flex-end'
  };
  var left = {
    justifyContent: 'flex-start'
  };
  var topSpace = {
    top: gutter
  };
  var bottomSpace = {
    bottom: gutter
  };
  var rightSpace = {
    right: gutter
  };
  var leftSpace = {
    left: gutter
  };
  var center = {
    left: '50%',
    right: 'auto',
    transform: 'translateX(-50%)'
  };
  return {
    root: {
      zIndex: theme.zIndex.snackbar,
      position: 'fixed',
      display: 'flex',
      left: 0,
      right: 0,
      justifyContent: 'center',
      alignItems: 'center'
    },
    anchorOriginTopCenter: (0, _objectSpread8.default)({}, top, (0, _defineProperty2.default)({}, theme.breakpoints.up('md'), (0, _objectSpread8.default)({}, center))),
    anchorOriginBottomCenter: (0, _objectSpread8.default)({}, bottom, (0, _defineProperty2.default)({}, theme.breakpoints.up('md'), (0, _objectSpread8.default)({}, center))),
    anchorOriginTopRight: (0, _objectSpread8.default)({}, top, right, (0, _defineProperty2.default)({}, theme.breakpoints.up('md'), (0, _objectSpread8.default)({
      left: 'auto'
    }, topSpace, rightSpace))),
    anchorOriginBottomRight: (0, _objectSpread8.default)({}, bottom, right, (0, _defineProperty2.default)({}, theme.breakpoints.up('md'), (0, _objectSpread8.default)({
      left: 'auto'
    }, bottomSpace, rightSpace))),
    anchorOriginTopLeft: (0, _objectSpread8.default)({}, top, left, (0, _defineProperty2.default)({}, theme.breakpoints.up('md'), (0, _objectSpread8.default)({
      right: 'auto'
    }, topSpace, leftSpace))),
    anchorOriginBottomLeft: (0, _objectSpread8.default)({}, bottom, left, (0, _defineProperty2.default)({}, theme.breakpoints.up('md'), (0, _objectSpread8.default)({
      right: 'auto'
    }, bottomSpace, leftSpace)))
  };
};
/* istanbul ignore if */


exports.styles = styles;

if (process.env.NODE_ENV !== 'production' && !_react.default.createContext) {
  throw new Error('Material-UI: react@16.3.0 or greater is required.');
}

var Snackbar =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Snackbar, _React$Component);

  function Snackbar() {
    var _ref;

    var _temp, _this;

    (0, _classCallCheck2.default)(this, Snackbar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (0, _possibleConstructorReturn2.default)(_this, (_temp = _this = (0, _possibleConstructorReturn2.default)(this, (_ref = Snackbar.__proto__ || Object.getPrototypeOf(Snackbar)).call.apply(_ref, [this].concat(args))), _this.timerAutoHide = null, _this.state = {}, _this.handleMouseEnter = function (event) {
      if (_this.props.onMouseEnter) {
        _this.props.onMouseEnter(event);
      }

      _this.handlePause();
    }, _this.handleMouseLeave = function (event) {
      if (_this.props.onMouseLeave) {
        _this.props.onMouseLeave(event);
      }

      _this.handleResume();
    }, _this.handleClickAway = function (event) {
      if (_this.props.onClose) {
        _this.props.onClose(event, 'clickaway');
      }
    }, _this.handlePause = function () {
      clearTimeout(_this.timerAutoHide);
    }, _this.handleResume = function () {
      if (_this.props.autoHideDuration != null) {
        if (_this.props.resumeHideDuration !== undefined) {
          _this.setAutoHideTimer(_this.props.resumeHideDuration);

          return;
        }

        _this.setAutoHideTimer((_this.props.autoHideDuration || 0) * 0.5);
      }
    }, _this.handleExited = function () {
      _this.setState({
        exited: true
      });
    }, _temp));
  }

  (0, _createClass2.default)(Snackbar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.open) {
        this.setAutoHideTimer();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.open !== this.props.open) {
        if (this.props.open) {
          this.setAutoHideTimer();
        } else {
          clearTimeout(this.timerAutoHide);
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.timerAutoHide);
    }
  }, {
    key: "setAutoHideTimer",
    // Timer that controls delay before snackbar auto hides
    value: function setAutoHideTimer() {
      var _this2 = this;

      var autoHideDuration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (!this.props.onClose || this.props.autoHideDuration == null) {
        return;
      }

      clearTimeout(this.timerAutoHide);
      this.timerAutoHide = setTimeout(function () {
        if (!_this2.props.onClose || _this2.props.autoHideDuration == null) {
          return;
        }

        _this2.props.onClose(null, 'timeout');
      }, autoHideDuration || this.props.autoHideDuration || 0);
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          action = _props.action,
          _props$anchorOrigin = _props.anchorOrigin,
          vertical = _props$anchorOrigin.vertical,
          horizontal = _props$anchorOrigin.horizontal,
          autoHideDuration = _props.autoHideDuration,
          children = _props.children,
          classes = _props.classes,
          className = _props.className,
          ContentProps = _props.ContentProps,
          disableWindowBlurListener = _props.disableWindowBlurListener,
          message = _props.message,
          onClose = _props.onClose,
          onEnter = _props.onEnter,
          onEntered = _props.onEntered,
          onEntering = _props.onEntering,
          onExit = _props.onExit,
          onExited = _props.onExited,
          onExiting = _props.onExiting,
          onMouseEnter = _props.onMouseEnter,
          onMouseLeave = _props.onMouseLeave,
          open = _props.open,
          resumeHideDuration = _props.resumeHideDuration,
          TransitionComponent = _props.TransitionComponent,
          transitionDuration = _props.transitionDuration,
          TransitionProps = _props.TransitionProps,
          other = (0, _objectWithoutProperties2.default)(_props, ["action", "anchorOrigin", "autoHideDuration", "children", "classes", "className", "ContentProps", "disableWindowBlurListener", "message", "onClose", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "onMouseEnter", "onMouseLeave", "open", "resumeHideDuration", "TransitionComponent", "transitionDuration", "TransitionProps"]); // So we only render active snackbars.

      if (!open && this.state.exited) {
        return null;
      }

      return _react.default.createElement(_ClickAwayListener.default, {
        onClickAway: this.handleClickAway
      }, _react.default.createElement("div", (0, _extends2.default)({
        className: (0, _classnames.default)(classes.root, classes["anchorOrigin".concat((0, _helpers.capitalize)(vertical)).concat((0, _helpers.capitalize)(horizontal))], className),
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave
      }, other), _react.default.createElement(_reactEventListener.default, {
        target: "window",
        onFocus: disableWindowBlurListener ? undefined : this.handleResume,
        onBlur: disableWindowBlurListener ? undefined : this.handlePause
      }), _react.default.createElement(TransitionComponent, (0, _extends2.default)({
        appear: true,
        "in": open,
        onEnter: onEnter,
        onEntered: onEntered,
        onEntering: onEntering,
        onExit: onExit,
        onExited: (0, _helpers.createChainedFunction)(this.handleExited, onExited),
        onExiting: onExiting,
        timeout: transitionDuration,
        direction: vertical === 'top' ? 'down' : 'up'
      }, TransitionProps), children || _react.default.createElement(_SnackbarContent.default, (0, _extends2.default)({
        message: message,
        action: action
      }, ContentProps)))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (typeof prevState.exited === 'undefined') {
        return {
          exited: !nextProps.open
        };
      }

      if (nextProps.open) {
        return {
          exited: false
        };
      }

      return null;
    }
  }]);
  return Snackbar;
}(_react.default.Component);

Snackbar.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The action to display.
   */
  action: _propTypes.default.node,

  /**
   * The anchor of the `Snackbar`.
   */
  anchorOrigin: _propTypes.default.shape({
    horizontal: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.oneOf(['left', 'center', 'right'])]),
    vertical: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.oneOf(['top', 'center', 'bottom'])])
  }),

  /**
   * The number of milliseconds to wait before automatically calling the
   * `onClose` function. `onClose` should then set the state of the `open`
   * prop to hide the Snackbar. This behavior is disabled by default with
   * the `null` value.
   */
  autoHideDuration: _propTypes.default.number,

  /**
   * If you wish the take control over the children of the component you can use this property.
   * When used, you replace the `SnackbarContent` component with the children.
   */
  children: _propTypes.default.element,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * Properties applied to the `SnackbarContent` element.
   */
  ContentProps: _propTypes.default.object,

  /**
   * If `true`, the `autoHideDuration` timer will expire even if the window is not focused.
   */
  disableWindowBlurListener: _propTypes.default.bool,

  /**
   * When displaying multiple consecutive Snackbars from a parent rendering a single
   * <Snackbar/>, add the key property to ensure independent treatment of each message.
   * e.g. <Snackbar key={message} />, otherwise, the message may update-in-place and
   * features such as autoHideDuration may be canceled.
   */
  key: _propTypes.default.any,

  /**
   * The message to display.
   */
  message: _propTypes.default.node,

  /**
   * Callback fired when the component requests to be closed.
   * Typically `onClose` is used to set state in the parent component,
   * which is used to control the `Snackbar` `open` prop.
   * The `reason` parameter can optionally be used to control the response to `onClose`,
   * for example ignoring `clickaway`.
   *
   * @param {object} event The event source of the callback
   * @param {string} reason Can be:`"timeout"` (`autoHideDuration` expired) or: `"clickaway"`
   */
  onClose: _propTypes.default.func,

  /**
   * Callback fired before the transition is entering.
   */
  onEnter: _propTypes.default.func,

  /**
   * Callback fired when the transition has entered.
   */
  onEntered: _propTypes.default.func,

  /**
   * Callback fired when the transition is entering.
   */
  onEntering: _propTypes.default.func,

  /**
   * Callback fired before the transition is exiting.
   */
  onExit: _propTypes.default.func,

  /**
   * Callback fired when the transition has exited.
   */
  onExited: _propTypes.default.func,

  /**
   * Callback fired when the transition is exiting.
   */
  onExiting: _propTypes.default.func,

  /**
   * @ignore
   */
  onMouseEnter: _propTypes.default.func,

  /**
   * @ignore
   */
  onMouseLeave: _propTypes.default.func,

  /**
   * If true, `Snackbar` is open.
   */
  open: _propTypes.default.bool,

  /**
   * The number of milliseconds to wait before dismissing after user interaction.
   * If `autoHideDuration` property isn't specified, it does nothing.
   * If `autoHideDuration` property is specified but `resumeHideDuration` isn't,
   * we default to `autoHideDuration / 2` ms.
   */
  resumeHideDuration: _propTypes.default.number,

  /**
   * Transition component.
   */
  TransitionComponent: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
    enter: _propTypes.default.number,
    exit: _propTypes.default.number
  })]),

  /**
   * Properties applied to the `Transition` element.
   */
  TransitionProps: _propTypes.default.object
} : {};
Snackbar.defaultProps = {
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'center'
  },
  disableWindowBlurListener: false,
  TransitionComponent: _Slide.default,
  transitionDuration: {
    enter: _transitions.duration.enteringScreen,
    exit: _transitions.duration.leavingScreen
  }
};

var _default = (0, _withStyles.default)(styles, {
  flip: false,
  name: 'MuiSnackbar'
})(Snackbar);

exports.default = _default;