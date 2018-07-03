"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/builtin/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _withStyles = _interopRequireDefault(require("../styles/withStyles"));

var _SvgIcon = _interopRequireDefault(require("../SvgIcon"));

var styles = function styles(theme) {
  return {
    root: {
      color: theme.palette.text.disabled
    },
    text: {
      fill: theme.palette.primary.contrastText,
      fontSize: theme.typography.caption.fontSize,
      fontFamily: theme.typography.fontFamily
    }
  };
};
/**
 * @ignore - internal component.
 */


exports.styles = styles;

var _ref = _react.default.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "12"
});

function StepPositionIcon(props) {
  var position = props.position,
      classes = props.classes,
      className = props.className;
  return _react.default.createElement(_SvgIcon.default, {
    className: (0, _classnames.default)(classes.root, className)
  }, _ref, _react.default.createElement("text", {
    className: classes.text,
    x: "12",
    y: "16",
    textAnchor: "middle"
  }, position));
}

StepPositionIcon.propTypes = process.env.NODE_ENV !== "production" ? {
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
   * The step position as a number.
   */
  position: _propTypes.default.node
} : {};

var _default = (0, _withStyles.default)(styles)(StepPositionIcon);

exports.default = _default;