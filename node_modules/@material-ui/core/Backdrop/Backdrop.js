"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/builtin/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _withStyles = _interopRequireDefault(require("../styles/withStyles"));

var _Fade = _interopRequireDefault(require("../Fade"));

var styles = {
  root: {
    zIndex: -1,
    width: '100%',
    height: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    // Remove grey highlight
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  invisible: {
    backgroundColor: 'transparent'
  }
};
exports.styles = styles;

function Backdrop(props) {
  var classes = props.classes,
      className = props.className,
      invisible = props.invisible,
      open = props.open,
      transitionDuration = props.transitionDuration,
      other = (0, _objectWithoutProperties2.default)(props, ["classes", "className", "invisible", "open", "transitionDuration"]);
  return _react.default.createElement(_Fade.default, (0, _extends2.default)({
    appear: true,
    "in": open,
    timeout: transitionDuration
  }, other), _react.default.createElement("div", {
    className: (0, _classnames.default)(classes.root, (0, _defineProperty2.default)({}, classes.invisible, invisible), className),
    "aria-hidden": "true"
  }));
}

Backdrop.propTypes = process.env.NODE_ENV !== "production" ? {
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
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   */
  invisible: _propTypes.default.bool,

  /**
   * If `true`, the backdrop is open.
   */
  open: _propTypes.default.bool.isRequired,

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
    enter: _propTypes.default.number,
    exit: _propTypes.default.number
  })])
} : {};
Backdrop.defaultProps = {
  invisible: false
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiBackdrop'
})(Backdrop);

exports.default = _default;