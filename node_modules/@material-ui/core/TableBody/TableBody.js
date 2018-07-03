"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/builtin/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/possibleConstructorReturn"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/inherits"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _withStyles = _interopRequireDefault(require("../styles/withStyles"));

var styles = {
  root: {
    display: 'table-row-group'
  }
};

var TableBody =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(TableBody, _React$Component);

  function TableBody() {
    (0, _classCallCheck2.default)(this, TableBody);
    return (0, _possibleConstructorReturn2.default)(this, (TableBody.__proto__ || Object.getPrototypeOf(TableBody)).apply(this, arguments));
  }

  (0, _createClass2.default)(TableBody, [{
    key: "getChildContext",
    value: function getChildContext() {
      // eslint-disable-line class-methods-use-this
      return {
        table: {
          body: true
        }
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          className = _props.className,
          Component = _props.component,
          other = (0, _objectWithoutProperties2.default)(_props, ["classes", "className", "component"]);
      return _react.default.createElement(Component, (0, _extends2.default)({
        className: (0, _classnames.default)(classes.root, className)
      }, other));
    }
  }]);
  return TableBody;
}(_react.default.Component);

TableBody.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The content of the component, normally `TableRow`.
   */
  children: _propTypes.default.node.isRequired,

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
  component: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object])
} : {};
TableBody.defaultProps = {
  component: 'tbody'
};
TableBody.childContextTypes = {
  table: _propTypes.default.object
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiTableBody'
})(TableBody);

exports.default = _default;