"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/builtin/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _withStyles = _interopRequireDefault(require("../styles/withStyles"));

var _Typography = _interopRequireDefault(require("../Typography"));

var styles = function styles(theme) {
  return {
    root: theme.mixins.gutters({
      display: 'flex',
      alignItems: 'center',
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2
    }),
    avatar: {
      flex: '0 0 auto',
      marginRight: theme.spacing.unit * 2
    },
    action: {
      flex: '0 0 auto',
      alignSelf: 'flex-start',
      marginTop: theme.spacing.unit * -1,
      marginRight: theme.spacing.unit * -2
    },
    content: {
      flex: '1 1 auto'
    },
    title: {},
    subheader: {}
  };
};

exports.styles = styles;

function CardHeader(props) {
  var action = props.action,
      avatar = props.avatar,
      classes = props.classes,
      classNameProp = props.className,
      Component = props.component,
      subheader = props.subheader,
      title = props.title,
      other = (0, _objectWithoutProperties2.default)(props, ["action", "avatar", "classes", "className", "component", "subheader", "title"]);
  return _react.default.createElement(Component, (0, _extends2.default)({
    className: (0, _classnames.default)(classes.root, classNameProp)
  }, other), avatar && _react.default.createElement("div", {
    className: classes.avatar
  }, avatar), _react.default.createElement("div", {
    className: classes.content
  }, _react.default.createElement(_Typography.default, {
    variant: avatar ? 'body2' : 'headline',
    component: "span",
    className: classes.title
  }, title), subheader && _react.default.createElement(_Typography.default, {
    variant: avatar ? 'body2' : 'body1',
    component: "span",
    color: "textSecondary",
    className: classes.subheader
  }, subheader)), action && _react.default.createElement("div", {
    className: classes.action
  }, action));
}

CardHeader.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The action to display in the card header.
   */
  action: _propTypes.default.node,

  /**
   * The Avatar for the Card Header.
   */
  avatar: _propTypes.default.node,

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
   * The content of the component.
   */
  subheader: _propTypes.default.node,

  /**
   * The content of the Card Title.
   */
  title: _propTypes.default.node
} : {};
CardHeader.defaultProps = {
  component: 'div'
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiCardHeader'
})(CardHeader);

exports.default = _default;