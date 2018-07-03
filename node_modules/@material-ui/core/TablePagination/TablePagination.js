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

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _withStyles = _interopRequireDefault(require("../styles/withStyles"));

var _Input = _interopRequireDefault(require("../Input"));

var _MenuItem = _interopRequireDefault(require("../MenuItem"));

var _Select = _interopRequireDefault(require("../Select"));

var _TableCell = _interopRequireDefault(require("../TableCell"));

var _Toolbar = _interopRequireDefault(require("../Toolbar"));

var _Typography = _interopRequireDefault(require("../Typography"));

var _TablePaginationActions = _interopRequireDefault(require("../TablePaginationActions"));

// @inheritedComponent TableCell
var styles = function styles(theme) {
  return {
    root: {
      fontSize: theme.typography.pxToRem(12),
      // Increase the specificity to override TableCell.
      '&:last-child': {
        padding: 0
      }
    },
    toolbar: {
      height: 56,
      minHeight: 56,
      paddingRight: 2
    },
    spacer: {
      flex: '1 1 100%'
    },
    menuItem: {},
    caption: {
      flexShrink: 0
    },
    input: {
      fontSize: 'inherit',
      flexShrink: 0
    },
    selectRoot: {
      marginRight: theme.spacing.unit * 4,
      marginLeft: theme.spacing.unit,
      color: theme.palette.text.secondary
    },
    select: {
      paddingLeft: theme.spacing.unit,
      paddingRight: theme.spacing.unit * 2
    },
    selectIcon: {
      top: 1
    },
    actions: {
      flexShrink: 0,
      color: theme.palette.text.secondary,
      marginLeft: theme.spacing.unit * 2.5
    }
  };
};
/**
 * A `TableCell` based component for placing inside `TableFooter` for pagination.
 */


exports.styles = styles;

var TablePagination =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(TablePagination, _React$Component);

  function TablePagination() {
    (0, _classCallCheck2.default)(this, TablePagination);
    return (0, _possibleConstructorReturn2.default)(this, (TablePagination.__proto__ || Object.getPrototypeOf(TablePagination)).apply(this, arguments));
  }

  (0, _createClass2.default)(TablePagination, [{
    key: "componentDidUpdate",
    // This logic would be better handled on userside.
    // However, we have it just in case.
    value: function componentDidUpdate() {
      var _props = this.props,
          count = _props.count,
          onChangePage = _props.onChangePage,
          page = _props.page,
          rowsPerPage = _props.rowsPerPage;
      var newLastPage = Math.max(0, Math.ceil(count / rowsPerPage) - 1);

      if (page > newLastPage) {
        onChangePage(null, newLastPage);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          ActionsComponent = _props2.ActionsComponent,
          backIconButtonProps = _props2.backIconButtonProps,
          classes = _props2.classes,
          colSpanProp = _props2.colSpan,
          Component = _props2.component,
          count = _props2.count,
          labelDisplayedRows = _props2.labelDisplayedRows,
          labelRowsPerPage = _props2.labelRowsPerPage,
          nextIconButtonProps = _props2.nextIconButtonProps,
          onChangePage = _props2.onChangePage,
          onChangeRowsPerPage = _props2.onChangeRowsPerPage,
          page = _props2.page,
          rowsPerPage = _props2.rowsPerPage,
          rowsPerPageOptions = _props2.rowsPerPageOptions,
          SelectProps = _props2.SelectProps,
          other = (0, _objectWithoutProperties2.default)(_props2, ["ActionsComponent", "backIconButtonProps", "classes", "colSpan", "component", "count", "labelDisplayedRows", "labelRowsPerPage", "nextIconButtonProps", "onChangePage", "onChangeRowsPerPage", "page", "rowsPerPage", "rowsPerPageOptions", "SelectProps"]);
      var colSpan;

      if (Component === _TableCell.default || Component === 'td') {
        colSpan = colSpanProp || 1000; // col-span over everything
      }

      return _react.default.createElement(Component, (0, _extends2.default)({
        className: classes.root,
        colSpan: colSpan
      }, other), _react.default.createElement(_Toolbar.default, {
        className: classes.toolbar
      }, _react.default.createElement("div", {
        className: classes.spacer
      }), rowsPerPageOptions.length > 1 && _react.default.createElement(_Typography.default, {
        variant: "caption",
        className: classes.caption
      }, labelRowsPerPage), rowsPerPageOptions.length > 1 && _react.default.createElement(_Select.default, (0, _extends2.default)({
        classes: {
          root: classes.selectRoot,
          select: classes.select,
          icon: classes.selectIcon
        },
        input: _react.default.createElement(_Input.default, {
          className: classes.input,
          disableUnderline: true
        }),
        value: rowsPerPage,
        onChange: onChangeRowsPerPage
      }, SelectProps), rowsPerPageOptions.map(function (rowsPerPageOption) {
        return _react.default.createElement(_MenuItem.default, {
          className: classes.menuItem,
          key: rowsPerPageOption,
          value: rowsPerPageOption
        }, rowsPerPageOption);
      })), _react.default.createElement(_Typography.default, {
        variant: "caption",
        className: classes.caption
      }, labelDisplayedRows({
        from: count === 0 ? 0 : page * rowsPerPage + 1,
        to: Math.min(count, (page + 1) * rowsPerPage),
        count: count,
        page: page
      })), _react.default.createElement(ActionsComponent, {
        className: classes.actions,
        backIconButtonProps: backIconButtonProps,
        count: count,
        nextIconButtonProps: nextIconButtonProps,
        onChangePage: onChangePage,
        page: page,
        rowsPerPage: rowsPerPage
      })));
    }
  }]);
  return TablePagination;
}(_react.default.Component);

TablePagination.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The component used for displaying the actions.
   * Either a string to use a DOM element or a component.
   */
  ActionsComponent: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

  /**
   * Properties applied to the back arrow `IconButton` component.
   */
  backIconButtonProps: _propTypes.default.object,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  colSpan: _propTypes.default.number,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

  /**
   * The total number of rows.
   */
  count: _propTypes.default.number.isRequired,

  /**
   * Customize the displayed rows label.
   */
  labelDisplayedRows: _propTypes.default.func,

  /**
   * Customize the rows per page label. Invoked with a `{ from, to, count, page }`
   * object.
   */
  labelRowsPerPage: _propTypes.default.node,

  /**
   * Properties applied to the next arrow `IconButton` element.
   */
  nextIconButtonProps: _propTypes.default.object,

  /**
   * Callback fired when the page is changed.
   *
   * @param {object} event The event source of the callback
   * @param {number} page The page selected
   */
  onChangePage: _propTypes.default.func.isRequired,

  /**
   * Callback fired when the number of rows per page is changed.
   *
   * @param {object} event The event source of the callback
   */
  onChangeRowsPerPage: _propTypes.default.func,

  /**
   * The zero-based index of the current page.
   */
  page: _propTypes.default.number.isRequired,

  /**
   * The number of rows per page.
   */
  rowsPerPage: _propTypes.default.number.isRequired,

  /**
   * Customizes the options of the rows per page select field. If less than two options are
   * available, no select field will be displayed.
   */
  rowsPerPageOptions: _propTypes.default.array,

  /**
   * Properties applied to the rows per page `Select` element.
   */
  SelectProps: _propTypes.default.object
} : {};
TablePagination.defaultProps = {
  ActionsComponent: _TablePaginationActions.default,
  component: _TableCell.default,
  labelDisplayedRows: function labelDisplayedRows(_ref) {
    var from = _ref.from,
        to = _ref.to,
        count = _ref.count;
    return "".concat(from, "-").concat(to, " of ").concat(count);
  },
  labelRowsPerPage: 'Rows per page:',
  rowsPerPageOptions: [5, 10, 25]
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiTablePagination'
})(TablePagination);

exports.default = _default;