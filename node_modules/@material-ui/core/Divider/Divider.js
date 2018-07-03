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

var _colorManipulator = require("../styles/colorManipulator");

var styles = function styles(theme) {
  return {
    root: {
      height: 1,
      margin: 0,
      // Reset browser default style.
      border: 'none',
      flexShrink: 0,
      backgroundColor: theme.palette.divider
    },
    absolute: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%'
    },
    inset: {
      marginLeft: theme.spacing.unit * 9
    },
    light: {
      backgroundColor: (0, _colorManipulator.fade)(theme.palette.divider, 0.08)
    }
  };
};

exports.styles = styles;

function Divider(props) {
  var _classNames;

  var absolute = props.absolute,
      classes = props.classes,
      classNameProp = props.className,
      Component = props.component,
      inset = props.inset,
      light = props.light,
      other = (0, _objectWithoutProperties2.default)(props, ["absolute", "classes", "className", "component", "inset", "light"]);
  var className = (0, _classnames.default)(classes.root, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.absolute, absolute), (0, _defineProperty2.default)(_classNames, classes.inset, inset), (0, _defineProperty2.default)(_classNames, classes.light, light), _classNames), classNameProp);
  return _react.default.createElement(Component, (0, _extends2.default)({
    className: className
  }, other));
}

Divider.propTypes = process.env.NODE_ENV !== "production" ? {
  absolute: _propTypes.default.bool,

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
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

  /**
   * If `true`, the divider will be indented.
   */
  inset: _propTypes.default.bool,

  /**
   * If `true`, the divider will have a lighter color.
   */
  light: _propTypes.default.bool
} : {};
Divider.defaultProps = {
  absolute: false,
  component: 'hr',
  inset: false,
  light: false
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiDivider'
})(Divider);

exports.default = _default;