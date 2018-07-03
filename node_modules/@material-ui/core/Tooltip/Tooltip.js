"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/builtin/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectSpread"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/possibleConstructorReturn"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactEventListener = _interopRequireDefault(require("react-event-listener"));

var _debounce = _interopRequireDefault(require("debounce"));

var _warning = _interopRequireDefault(require("warning"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactPopper = require("react-popper");

var _helpers = require("../utils/helpers");

var _RootRef = _interopRequireDefault(require("../RootRef"));

var _Portal = _interopRequireDefault(require("../Portal"));

var _common = _interopRequireDefault(require("../colors/common"));

var _withStyles = _interopRequireDefault(require("../styles/withStyles"));

/* eslint-disable react/no-multi-comp, no-underscore-dangle */
// < 1kb payload overhead when lodash/debounce is > 3kb.
var styles = function styles(theme) {
  return {
    popper: {
      zIndex: theme.zIndex.tooltip,
      pointerEvents: 'none',
      '&$open': {
        pointerEvents: 'auto'
      }
    },
    open: {},
    tooltip: {
      backgroundColor: theme.palette.grey[700],
      borderRadius: theme.shape.borderRadius,
      color: _common.default.white,
      fontFamily: theme.typography.fontFamily,
      opacity: 0,
      transform: 'scale(0)',
      transition: theme.transitions.create(['opacity', 'transform'], {
        duration: theme.transitions.duration.shortest,
        easing: theme.transitions.easing.easeIn
      }),
      minHeight: 0,
      padding: "".concat(theme.spacing.unit / 2, "px ").concat(theme.spacing.unit, "px"),
      fontSize: theme.typography.pxToRem(10),
      lineHeight: "".concat(theme.typography.round(14 / 10), "em"),
      '&$open': {
        opacity: 0.9,
        transform: 'scale(1)',
        transition: theme.transitions.create(['opacity', 'transform'], {
          duration: theme.transitions.duration.shortest,
          easing: theme.transitions.easing.easeOut
        })
      }
    },
    touch: {
      padding: "".concat(theme.spacing.unit, "px ").concat(theme.spacing.unit * 2, "px"),
      fontSize: theme.typography.pxToRem(14),
      lineHeight: "".concat(theme.typography.round(16 / 14), "em")
    },
    tooltipPlacementLeft: (0, _defineProperty2.default)({
      transformOrigin: 'right center',
      margin: "0 ".concat(theme.spacing.unit * 3, "px")
    }, theme.breakpoints.up('sm'), {
      margin: '0 14px'
    }),
    tooltipPlacementRight: (0, _defineProperty2.default)({
      transformOrigin: 'left center',
      margin: "0 ".concat(theme.spacing.unit * 3, "px")
    }, theme.breakpoints.up('sm'), {
      margin: '0 14px'
    }),
    tooltipPlacementTop: (0, _defineProperty2.default)({
      transformOrigin: 'center bottom',
      margin: "".concat(theme.spacing.unit * 3, "px 0")
    }, theme.breakpoints.up('sm'), {
      margin: '14px 0'
    }),
    tooltipPlacementBottom: (0, _defineProperty2.default)({
      transformOrigin: 'center top',
      margin: "".concat(theme.spacing.unit * 3, "px 0")
    }, theme.breakpoints.up('sm'), {
      margin: '14px 0'
    })
  };
};

exports.styles = styles;

function flipPlacement(placement) {
  switch (placement) {
    case 'bottom-end':
      return 'bottom-start';

    case 'bottom-start':
      return 'bottom-end';

    case 'top-end':
      return 'top-start';

    case 'top-start':
      return 'top-end';

    default:
      return placement;
  }
}

var Tooltip =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Tooltip, _React$Component);

  // Corresponds to 10 frames at 60 Hz.
  function Tooltip(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Tooltip);
    _this = (0, _possibleConstructorReturn2.default)(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call(this, props));
    _this.enterTimer = null;
    _this.leaveTimer = null;
    _this.touchTimer = null;
    _this.closeTimer = null;
    _this.isControlled = null;
    _this.popper = null;
    _this.children = null;
    _this.ignoreNonTouchEvents = false;
    _this.handleResize = (0, _debounce.default)(function () {
      if (_this.popper) {
        _this.popper._popper.scheduleUpdate();
      }
    }, 166);
    _this.state = {};

    _this.handleEnter = function (event) {
      var _this$props = _this.props,
          children = _this$props.children,
          enterDelay = _this$props.enterDelay;
      var childrenProps = children.props;

      if (event.type === 'focus' && childrenProps.onFocus) {
        childrenProps.onFocus(event);
      }

      if (event.type === 'mouseover' && childrenProps.onMouseOver) {
        childrenProps.onMouseOver(event);
      }

      if (_this.ignoreNonTouchEvents && event.type !== 'touchstart') {
        return;
      }

      clearTimeout(_this.enterTimer);
      clearTimeout(_this.leaveTimer);

      if (enterDelay) {
        event.persist();
        _this.enterTimer = setTimeout(function () {
          _this.handleOpen(event);
        }, enterDelay);
      } else {
        _this.handleOpen(event);
      }
    };

    _this.handleOpen = function (event) {
      if (!_this.isControlled) {
        _this.setState({
          open: true
        });
      }

      if (_this.props.onOpen) {
        _this.props.onOpen(event, true);
      }
    };

    _this.handleLeave = function (event) {
      var _this$props2 = _this.props,
          children = _this$props2.children,
          leaveDelay = _this$props2.leaveDelay;
      var childrenProps = children.props;

      if (event.type === 'blur' && childrenProps.onBlur) {
        childrenProps.onBlur(event);
      }

      if (event.type === 'mouseleave' && childrenProps.onMouseLeave) {
        childrenProps.onMouseLeave(event);
      }

      clearTimeout(_this.enterTimer);
      clearTimeout(_this.leaveTimer);

      if (leaveDelay) {
        event.persist();
        _this.leaveTimer = setTimeout(function () {
          _this.handleClose(event);
        }, leaveDelay);
      } else {
        _this.handleClose(event);
      }
    };

    _this.handleClose = function (event) {
      if (!_this.isControlled) {
        _this.setState({
          open: false
        });
      }

      if (_this.props.onClose) {
        _this.props.onClose(event, false);
      }

      clearTimeout(_this.closeTimer);
      _this.closeTimer = setTimeout(function () {
        _this.ignoreNonTouchEvents = false;
      }, _this.props.theme.transitions.duration.shortest);
    };

    _this.handleTouchStart = function (event) {
      _this.ignoreNonTouchEvents = true;
      var _this$props3 = _this.props,
          children = _this$props3.children,
          enterTouchDelay = _this$props3.enterTouchDelay;
      var childrenProps = children.props;

      if (childrenProps.onTouchStart) {
        childrenProps.onTouchStart(event);
      }

      clearTimeout(_this.leaveTimer);
      clearTimeout(_this.closeTimer);
      clearTimeout(_this.touchTimer);
      event.persist();
      _this.touchTimer = setTimeout(function () {
        _this.handleEnter(event);
      }, enterTouchDelay);
    };

    _this.handleTouchEnd = function (event) {
      var _this$props4 = _this.props,
          children = _this$props4.children,
          leaveTouchDelay = _this$props4.leaveTouchDelay;
      var childrenProps = children.props;

      if (childrenProps.onTouchEnd) {
        childrenProps.onTouchEnd(event);
      }

      clearTimeout(_this.touchTimer);
      clearTimeout(_this.leaveTimer);
      event.persist();
      _this.leaveTimer = setTimeout(function () {
        _this.handleClose(event);
      }, leaveTouchDelay);
    };

    _this.isControlled = props.open != null;

    if (!_this.isControlled) {
      // not controlled, use internal state
      _this.state.open = false;
    }

    return _this;
  }

  (0, _createClass2.default)(Tooltip, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      process.env.NODE_ENV !== "production" ? (0, _warning.default)(!this.children || !this.children.disabled || !this.children.tagName.toLowerCase() === 'button', ['Material-UI: you are providing a disabled `button` child to the Tooltip component.', 'A disabled element does not fire events.', "Tooltip needs to listen to the child element's events to display the title.", '', 'Place a `div` container on top of the element.'].join('\n')) : void 0;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.enterTimer);
      clearTimeout(this.leaveTimer);
      clearTimeout(this.touchTimer);
      clearTimeout(this.closeTimer);
      this.handleResize.clear();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          classes = _props.classes,
          className = _props.className,
          disableFocusListener = _props.disableFocusListener,
          disableHoverListener = _props.disableHoverListener,
          disableTouchListener = _props.disableTouchListener,
          enterDelay = _props.enterDelay,
          enterTouchDelay = _props.enterTouchDelay,
          id = _props.id,
          leaveDelay = _props.leaveDelay,
          leaveTouchDelay = _props.leaveTouchDelay,
          onClose = _props.onClose,
          onOpen = _props.onOpen,
          openProp = _props.open,
          placementProp = _props.placement,
          _props$PopperProps = _props.PopperProps;
      _props$PopperProps = _props$PopperProps === void 0 ? {} : _props$PopperProps;
      var PopperClassName = _props$PopperProps.className,
          PopperProps = (0, _objectWithoutProperties2.default)(_props$PopperProps, ["className"]),
          theme = _props.theme,
          title = _props.title,
          other = (0, _objectWithoutProperties2.default)(_props, ["children", "classes", "className", "disableFocusListener", "disableHoverListener", "disableTouchListener", "enterDelay", "enterTouchDelay", "id", "leaveDelay", "leaveTouchDelay", "onClose", "onOpen", "open", "placement", "PopperProps", "theme", "title"]);
      var placement = theme.direction === 'rtl' ? flipPlacement(placementProp) : placementProp;
      var open = this.isControlled ? openProp : this.state.open;
      var childrenProps = {
        'aria-describedby': id
      }; // There is no point at displaying an empty tooltip.

      if (title === '') {
        open = false;
      }

      if (!disableTouchListener) {
        childrenProps.onTouchStart = this.handleTouchStart;
        childrenProps.onTouchEnd = this.handleTouchEnd;
      }

      if (!disableHoverListener) {
        childrenProps.onMouseOver = this.handleEnter;
        childrenProps.onMouseLeave = this.handleLeave;
      }

      if (!disableFocusListener) {
        childrenProps.onFocus = this.handleEnter;
        childrenProps.onBlur = this.handleLeave;
      }

      process.env.NODE_ENV !== "production" ? (0, _warning.default)(!children.props.title, ['Material-UI: you have been providing a `title` property to the child of <Tooltip />.', "Remove this title property `".concat(children.props.title, "` or the Tooltip component.")].join('\n')) : void 0;
      return _react.default.createElement(_reactPopper.Manager, (0, _extends2.default)({
        tag: false
      }, other), _react.default.createElement(_reactEventListener.default, {
        target: "window",
        onResize: this.handleResize
      }), _react.default.createElement(_reactPopper.Target, null, function (_ref) {
        var targetProps = _ref.targetProps;
        return _react.default.createElement(_RootRef.default, {
          rootRef: function rootRef(node) {
            _this2.children = node;
            targetProps.ref(_this2.children);
          }
        }, _react.default.cloneElement(children, childrenProps));
      }), _react.default.createElement(_Portal.default, null, _react.default.createElement(_reactPopper.Popper, (0, _extends2.default)({
        placement: placement,
        eventsEnabled: open,
        className: (0, _classnames.default)(classes.popper, (0, _defineProperty2.default)({}, classes.open, open), PopperClassName),
        ref: function ref(node) {
          _this2.popper = node;
        }
      }, PopperProps), function (_ref2) {
        var popperProps = _ref2.popperProps,
            restProps = _ref2.restProps;
        var actualPlacement = (popperProps['data-placement'] || placement).split('-')[0];
        return _react.default.createElement("div", (0, _extends2.default)({}, popperProps, restProps, {
          style: (0, _objectSpread2.default)({}, popperProps.style, {
            top: popperProps.style.top || 0,
            left: popperProps.style.left || 0
          }, restProps.style)
        }), _react.default.createElement("div", {
          id: id,
          role: "tooltip",
          "aria-hidden": !open,
          className: (0, _classnames.default)(classes.tooltip, (0, _defineProperty2.default)({}, classes.open, open), (0, _defineProperty2.default)({}, classes.touch, _this2.ignoreNonTouchEvents), classes["tooltipPlacement".concat((0, _helpers.capitalize)(actualPlacement))])
        }, title));
      })));
    }
  }]);
  return Tooltip;
}(_react.default.Component);

Tooltip.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Tooltip reference element.
   */
  children: _propTypes.default.element.isRequired,

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
   * Do not respond to focus events.
   */
  disableFocusListener: _propTypes.default.bool,

  /**
   * Do not respond to hover events.
   */
  disableHoverListener: _propTypes.default.bool,

  /**
   * Do not respond to long press touch events.
   */
  disableTouchListener: _propTypes.default.bool,

  /**
   * The number of milliseconds to wait before showing the tooltip.
   * This property won't impact the enter touch delay (`enterTouchDelay`).
   */
  enterDelay: _propTypes.default.number,

  /**
   * The number of milliseconds a user must touch the element before showing the tooltip.
   */
  enterTouchDelay: _propTypes.default.number,

  /**
   * The relationship between the tooltip and the wrapper component is not clear from the DOM.
   * By providing this property, we can use aria-describedby to solve the accessibility issue.
   */
  id: _propTypes.default.string,

  /**
   * The number of milliseconds to wait before hiding the tooltip.
   * This property won't impact the leave touch delay (`leaveTouchDelay`).
   */
  leaveDelay: _propTypes.default.number,

  /**
   * The number of milliseconds after the user stops touching an element before hiding the tooltip.
   */
  leaveTouchDelay: _propTypes.default.number,

  /**
   * Callback fired when the tooltip requests to be closed.
   *
   * @param {object} event The event source of the callback
   */
  onClose: _propTypes.default.func,

  /**
   * Callback fired when the tooltip requests to be open.
   *
   * @param {object} event The event source of the callback
   */
  onOpen: _propTypes.default.func,

  /**
   * If `true`, the tooltip is shown.
   */
  open: _propTypes.default.bool,

  /**
   * Tooltip placement
   */
  placement: _propTypes.default.oneOf(['bottom-end', 'bottom-start', 'bottom', 'left-end', 'left-start', 'left', 'right-end', 'right-start', 'right', 'top-end', 'top-start', 'top']),

  /**
   * Properties applied to the `Popper` element.
   */
  PopperProps: _propTypes.default.object,

  /**
   * @ignore
   */
  theme: _propTypes.default.object.isRequired,

  /**
   * Tooltip title. Zero-length titles string are never displayed.
   */
  title: _propTypes.default.node.isRequired
} : {};
Tooltip.defaultProps = {
  disableFocusListener: false,
  disableHoverListener: false,
  disableTouchListener: false,
  enterDelay: 0,
  enterTouchDelay: 1000,
  leaveDelay: 0,
  leaveTouchDelay: 1500,
  placement: 'bottom'
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiTooltip',
  withTheme: true
})(Tooltip);

exports.default = _default;