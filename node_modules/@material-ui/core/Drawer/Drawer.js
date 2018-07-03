"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/builtin/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isHorizontal = isHorizontal;
exports.getAnchor = getAnchor;
exports.default = exports.styles = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectSpread"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/possibleConstructorReturn"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/inherits"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Modal = _interopRequireDefault(require("../Modal"));

var _withStyles = _interopRequireDefault(require("../styles/withStyles"));

var _Slide = _interopRequireDefault(require("../Slide"));

var _Paper = _interopRequireDefault(require("../Paper"));

var _helpers = require("../utils/helpers");

var _transitions = require("../styles/transitions");

var oppositeDirection = {
  left: 'right',
  right: 'left',
  top: 'down',
  bottom: 'up'
};

function isHorizontal(props) {
  return ['left', 'right'].indexOf(props.anchor) !== -1;
}

function getAnchor(props) {
  return props.theme.direction === 'rtl' && isHorizontal(props) ? oppositeDirection[props.anchor] : props.anchor;
}

var styles = function styles(theme) {
  return {
    docked: {
      flex: '0 0 auto'
    },
    paper: {
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      flex: '1 0 auto',
      zIndex: theme.zIndex.drawer,
      WebkitOverflowScrolling: 'touch',
      // Add iOS momentum scrolling.
      // temporary style
      position: 'fixed',
      top: 0,
      // We disable the focus ring for mouse, touch and keyboard users.
      // At some point, it would be better to keep it for keyboard users.
      // :focus-ring CSS pseudo-class will help.
      outline: 'none'
    },
    paperAnchorLeft: {
      left: 0,
      right: 'auto'
    },
    paperAnchorRight: {
      left: 'auto',
      right: 0
    },
    paperAnchorTop: {
      top: 0,
      left: 0,
      bottom: 'auto',
      right: 0,
      height: 'auto',
      maxHeight: '100vh'
    },
    paperAnchorBottom: {
      top: 'auto',
      left: 0,
      bottom: 0,
      right: 0,
      height: 'auto',
      maxHeight: '100vh'
    },
    paperAnchorDockedLeft: {
      borderRight: "1px solid ".concat(theme.palette.divider)
    },
    paperAnchorDockedTop: {
      borderBottom: "1px solid ".concat(theme.palette.divider)
    },
    paperAnchorDockedRight: {
      borderLeft: "1px solid ".concat(theme.palette.divider)
    },
    paperAnchorDockedBottom: {
      borderTop: "1px solid ".concat(theme.palette.divider)
    },
    modal: {} // Just here so people can override the style.

  };
};
/**
 * The properties of the [Modal](/api/modal) component are available
 * when `variant="temporary"` is set.
 */


exports.styles = styles;

var Drawer =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Drawer, _React$Component);

  function Drawer() {
    var _ref;

    var _temp, _this;

    (0, _classCallCheck2.default)(this, Drawer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (0, _possibleConstructorReturn2.default)(_this, (_temp = _this = (0, _possibleConstructorReturn2.default)(this, (_ref = Drawer.__proto__ || Object.getPrototypeOf(Drawer)).call.apply(_ref, [this].concat(args))), _this.mounted = false, _temp));
  }

  (0, _createClass2.default)(Drawer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mounted = true;
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          anchorProp = _props.anchor,
          children = _props.children,
          classes = _props.classes,
          className = _props.className,
          elevation = _props.elevation,
          _props$ModalProps = _props.ModalProps;
      _props$ModalProps = _props$ModalProps === void 0 ? {} : _props$ModalProps;
      var BackdropPropsProp = _props$ModalProps.BackdropProps,
          ModalProps = (0, _objectWithoutProperties2.default)(_props$ModalProps, ["BackdropProps"]),
          onClose = _props.onClose,
          open = _props.open,
          PaperProps = _props.PaperProps,
          SlideProps = _props.SlideProps,
          theme = _props.theme,
          transitionDuration = _props.transitionDuration,
          variant = _props.variant,
          other = (0, _objectWithoutProperties2.default)(_props, ["anchor", "children", "classes", "className", "elevation", "ModalProps", "onClose", "open", "PaperProps", "SlideProps", "theme", "transitionDuration", "variant"]);
      var anchor = getAnchor(this.props);

      var drawer = _react.default.createElement(_Paper.default, (0, _extends2.default)({
        elevation: variant === 'temporary' ? elevation : 0,
        square: true,
        className: (0, _classnames.default)(classes.paper, classes["paperAnchor".concat((0, _helpers.capitalize)(anchor))], (0, _defineProperty2.default)({}, classes["paperAnchorDocked".concat((0, _helpers.capitalize)(anchor))], variant !== 'temporary'))
      }, PaperProps), children);

      if (variant === 'permanent') {
        return _react.default.createElement("div", (0, _extends2.default)({
          className: (0, _classnames.default)(classes.docked, className)
        }, other), drawer);
      }

      var slidingDrawer = _react.default.createElement(_Slide.default, (0, _extends2.default)({
        "in": open,
        direction: oppositeDirection[anchor],
        timeout: transitionDuration,
        appear: this.mounted
      }, SlideProps), drawer);

      if (variant === 'persistent') {
        return _react.default.createElement("div", (0, _extends2.default)({
          className: (0, _classnames.default)(classes.docked, className)
        }, other), slidingDrawer);
      } // variant === temporary


      return _react.default.createElement(_Modal.default, (0, _extends2.default)({
        BackdropProps: (0, _objectSpread2.default)({}, BackdropPropsProp, {
          transitionDuration: transitionDuration
        }),
        className: (0, _classnames.default)(classes.modal, className),
        open: open,
        onClose: onClose
      }, other, ModalProps), slidingDrawer);
    }
  }]);
  return Drawer;
}(_react.default.Component);

Drawer.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Side from which the drawer will appear.
   */
  anchor: _propTypes.default.oneOf(['left', 'top', 'right', 'bottom']),

  /**
   * The contents of the drawer.
   */
  children: _propTypes.default.node,

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
   * The elevation of the drawer.
   */
  elevation: _propTypes.default.number,

  /**
   * Properties applied to the `Modal` element.
   */
  ModalProps: _propTypes.default.object,

  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback
   */
  onClose: _propTypes.default.func,

  /**
   * If `true`, the drawer is open.
   */
  open: _propTypes.default.bool,

  /**
   * Properties applied to the `Paper` element.
   */
  PaperProps: _propTypes.default.object,

  /**
   * Properties applied to the `Slide` element.
   */
  SlideProps: _propTypes.default.object,

  /**
   * @ignore
   */
  theme: _propTypes.default.object.isRequired,

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
    enter: _propTypes.default.number,
    exit: _propTypes.default.number
  })]),

  /**
   * The variant of drawer.
   */
  variant: _propTypes.default.oneOf(['permanent', 'persistent', 'temporary'])
} : {};
Drawer.defaultProps = {
  anchor: 'left',
  elevation: 16,
  open: false,
  transitionDuration: {
    enter: _transitions.duration.enteringScreen,
    exit: _transitions.duration.leavingScreen
  },
  variant: 'temporary' // Mobile first.

};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiDrawer',
  flip: false,
  withTheme: true
})(Drawer);

exports.default = _default;