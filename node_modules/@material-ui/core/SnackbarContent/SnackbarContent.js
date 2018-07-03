"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/builtin/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectWithoutProperties"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _withStyles = _interopRequireDefault(require("../styles/withStyles"));

var _Paper = _interopRequireDefault(require("../Paper"));

var _Typography = _interopRequireDefault(require("../Typography"));

var _colorManipulator = require("../styles/colorManipulator");

// @inheritedComponent Paper
var styles = function styles(theme) {
  var _root;

  var emphasis = theme.palette.type === 'light' ? 0.8 : 0.98;
  var backgroundColor = (0, _colorManipulator.emphasize)(theme.palette.background.default, emphasis);
  return {
    root: (_root = {
      pointerEvents: 'initial',
      color: theme.palette.getContrastText(backgroundColor),
      backgroundColor: backgroundColor,
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      padding: "6px ".concat(theme.spacing.unit * 3, "px")
    }, (0, _defineProperty2.default)(_root, theme.breakpoints.up('md'), {
      minWidth: 288,
      maxWidth: 568,
      borderRadius: theme.shape.borderRadius
    }), (0, _defineProperty2.default)(_root, theme.breakpoints.down('sm'), {
      flexGrow: 1
    }), _root),
    message: {
      padding: "".concat(theme.spacing.unit, "px 0")
    },
    action: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: 'auto',
      paddingLeft: theme.spacing.unit * 3,
      marginRight: -theme.spacing.unit
    }
  };
};

exports.styles = styles;

function SnackbarContent(props) {
  var action = props.action,
      classes = props.classes,
      className = props.className,
      message = props.message,
      other = (0, _objectWithoutProperties2.default)(props, ["action", "classes", "className", "message"]);
  return _react.default.createElement(_Paper.default, (0, _extends2.default)({
    component: _Typography.default,
    headlineMapping: {
      body1: 'div'
    },
    role: "alertdialog",
    square: true,
    elevation: 6,
    className: (0, _classnames.default)(classes.root, className)
  }, other), _react.default.createElement("div", {
    className: classes.message
  }, message), action ? _react.default.createElement("div", {
    className: classes.action
  }, action) : null);
}

SnackbarContent.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The action to display.
   */
  action: _propTypes.default.node,

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
   * The message to display.
   */
  message: _propTypes.default.node
} : {};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiSnackbarContent'
})(SnackbarContent);

exports.default = _default;