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

var styles = function styles(theme) {
  return {
    root: {
      color: 'inherit',
      display: 'table-row',
      height: 48,
      verticalAlign: 'middle',
      // We disable the focus ring for mouse, touch and keyboard users.
      outline: 'none',
      '&$selected': {
        backgroundColor: theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.04)' // grey[100]
        : 'rgba(255, 255, 255, 0.08)'
      },
      '&$hover:hover': {
        backgroundColor: theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.07)' // grey[200]
        : 'rgba(255, 255, 255, 0.14)'
      }
    },
    selected: {},
    hover: {},
    head: {
      height: 56
    },
    footer: {
      height: 56
    }
  };
};
/**
 * Will automatically set dynamic row height
 * based on the material table element parent (head, body, etc).
 */


exports.styles = styles;

function TableRow(props, context) {
  var _classNames;

  var classes = props.classes,
      classNameProp = props.className,
      Component = props.component,
      hover = props.hover,
      selected = props.selected,
      other = (0, _objectWithoutProperties2.default)(props, ["classes", "className", "component", "hover", "selected"]);
  var table = context.table;
  var className = (0, _classnames.default)(classes.root, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.head, table && table.head), (0, _defineProperty2.default)(_classNames, classes.footer, table && table.footer), (0, _defineProperty2.default)(_classNames, classes.hover, table && hover), (0, _defineProperty2.default)(_classNames, classes.selected, table && selected), _classNames), classNameProp);
  return _react.default.createElement(Component, (0, _extends2.default)({
    className: className
  }, other));
}

TableRow.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Should be valid <tr> children such as `TableCell`.
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
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

  /**
   * If `true`, the table row will shade on hover.
   */
  hover: _propTypes.default.bool,

  /**
   * If `true`, the table row will have the selected shading.
   */
  selected: _propTypes.default.bool
} : {};
TableRow.defaultProps = {
  component: 'tr',
  hover: false,
  selected: false
};
TableRow.contextTypes = {
  table: _propTypes.default.object
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiTableRow'
})(TableRow);

exports.default = _default;