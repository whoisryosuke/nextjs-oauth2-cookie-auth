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

var _helpers = require("../utils/helpers");

var _colorManipulator = require("../styles/colorManipulator");

var styles = function styles(theme) {
  return {
    root: {
      display: 'table-cell',
      verticalAlign: 'inherit',
      // Workaround for a rendering bug with spanned columns in Chrome 62.0.
      // Removes the alpha (sets it to 1), and lightens or darkens the theme color.
      borderBottom: "1px solid\n    ".concat(theme.palette.type === 'light' ? (0, _colorManipulator.lighten)((0, _colorManipulator.fade)(theme.palette.divider, 1), 0.88) : (0, _colorManipulator.darken)((0, _colorManipulator.fade)(theme.palette.divider, 1), 0.8)),
      textAlign: 'left',
      padding: "".concat(theme.spacing.unit / 2, "px ").concat(theme.spacing.unit * 7, "px ").concat(theme.spacing.unit / 2, "px ").concat(theme.spacing.unit * 3, "px"),
      '&:last-child': {
        paddingRight: theme.spacing.unit * 3
      }
    },
    head: {
      color: theme.palette.text.secondary,
      fontSize: theme.typography.pxToRem(12),
      fontWeight: theme.typography.fontWeightMedium
    },
    body: {
      color: theme.palette.text.primary,
      fontSize: theme.typography.pxToRem(13),
      fontWeight: theme.typography.fontWeightRegular
    },
    footer: {
      borderBottom: 0,
      color: theme.palette.text.secondary,
      fontSize: theme.typography.pxToRem(12)
    },
    numeric: {
      textAlign: 'right',
      flexDirection: 'row-reverse' // can be dynamically inherited at runtime by contents

    },
    paddingDense: {
      paddingRight: theme.spacing.unit * 3
    },
    paddingCheckbox: {
      padding: '0 12px',
      '&:last-child': {
        paddingRight: 12
      }
    },
    paddingNone: {
      padding: 0,
      '&:last-child': {
        padding: 0
      }
    }
  };
};

exports.styles = styles;

function TableCell(props, context) {
  var _classNames;

  var children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      component = props.component,
      sortDirection = props.sortDirection,
      numeric = props.numeric,
      padding = props.padding,
      scopeProp = props.scope,
      variant = props.variant,
      other = (0, _objectWithoutProperties2.default)(props, ["children", "classes", "className", "component", "sortDirection", "numeric", "padding", "scope", "variant"]);
  var table = context.table;
  var Component;

  if (component) {
    Component = component;
  } else {
    Component = table && table.head ? 'th' : 'td';
  }

  var scope = scopeProp;

  if (!scope && table && table.head) {
    scope = 'col';
  }

  var className = (0, _classnames.default)(classes.root, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.head, variant ? variant === 'head' : table && table.head), (0, _defineProperty2.default)(_classNames, classes.body, variant ? variant === 'body' : table && table.body), (0, _defineProperty2.default)(_classNames, classes.footer, variant ? variant === 'footer' : table && table.footer), (0, _defineProperty2.default)(_classNames, classes.numeric, numeric), (0, _defineProperty2.default)(_classNames, classes["padding".concat((0, _helpers.capitalize)(padding))], padding !== 'default'), _classNames), classNameProp);
  var ariaSort = null;

  if (sortDirection) {
    ariaSort = sortDirection === 'asc' ? 'ascending' : 'descending';
  }

  return _react.default.createElement(Component, (0, _extends2.default)({
    className: className,
    "aria-sort": ariaSort,
    scope: scope
  }, other), children);
}

TableCell.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The table cell contents.
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
   * If `true`, content will align to the right.
   */
  numeric: _propTypes.default.bool,

  /**
   * Sets the padding applied to the cell.
   */
  padding: _propTypes.default.oneOf(['default', 'checkbox', 'dense', 'none']),

  /**
   * Set scope attribute.
   */
  scope: _propTypes.default.string,

  /**
   * Set aria-sort direction.
   */
  sortDirection: _propTypes.default.oneOf(['asc', 'desc', false]),

  /**
   * Specify the cell type.
   * By default, the TableHead, TableBody or TableFooter parent component set the value.
   */
  variant: _propTypes.default.oneOf(['head', 'body', 'footer'])
} : {};
TableCell.defaultProps = {
  numeric: false,
  padding: 'default'
};
TableCell.contextTypes = {
  table: _propTypes.default.object.isRequired
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiTableCell'
})(TableCell);

exports.default = _default;