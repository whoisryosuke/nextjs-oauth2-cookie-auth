"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/builtin/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

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

var _ButtonBase = _interopRequireDefault(require("../ButtonBase"));

var _IconButton = _interopRequireDefault(require("../IconButton"));

var _withStyles = _interopRequireDefault(require("../styles/withStyles"));

// @inheritedComponent ButtonBase
var styles = function styles(theme) {
  var transition = {
    duration: theme.transitions.duration.shortest
  };
  return {
    root: {
      display: 'flex',
      minHeight: theme.spacing.unit * 6,
      transition: theme.transitions.create(['min-height', 'background-color'], transition),
      padding: "0 ".concat(theme.spacing.unit * 3, "px 0 ").concat(theme.spacing.unit * 3, "px"),
      '&:hover:not($disabled)': {
        cursor: 'pointer'
      },
      '&$expanded': {
        minHeight: 64
      },
      '&$focused': {
        backgroundColor: theme.palette.grey[300]
      },
      '&$disabled': {
        opacity: 0.38
      }
    },
    expanded: {},
    focused: {},
    disabled: {},
    content: {
      display: 'flex',
      flexGrow: 1,
      transition: theme.transitions.create(['margin'], transition),
      margin: '12px 0',
      '& > :last-child': {
        paddingRight: theme.spacing.unit * 4
      },
      '&$expanded': {
        margin: '20px 0'
      }
    },
    expandIcon: {
      position: 'absolute',
      top: '50%',
      right: theme.spacing.unit,
      transform: 'translateY(-50%) rotate(0deg)',
      transition: theme.transitions.create('transform', transition),
      '&:hover': {
        // Disable the hover effect for the IconButton,
        // because a hover effect should apply to the entire Expand button and
        // not only to the IconButton.
        backgroundColor: 'transparent'
      },
      '&$expanded': {
        transform: 'translateY(-50%) rotate(180deg)'
      }
    }
  };
};

exports.styles = styles;

var ExpansionPanelSummary =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(ExpansionPanelSummary, _React$Component);

  function ExpansionPanelSummary() {
    var _ref;

    var _temp, _this;

    (0, _classCallCheck2.default)(this, ExpansionPanelSummary);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (0, _possibleConstructorReturn2.default)(_this, (_temp = _this = (0, _possibleConstructorReturn2.default)(this, (_ref = ExpansionPanelSummary.__proto__ || Object.getPrototypeOf(ExpansionPanelSummary)).call.apply(_ref, [this].concat(args))), _this.state = {
      focused: false
    }, _this.handleFocus = function () {
      _this.setState({
        focused: true
      });
    }, _this.handleBlur = function () {
      _this.setState({
        focused: false
      });
    }, _this.handleChange = function (event) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          onClick = _this$props.onClick;

      if (onChange) {
        onChange(event);
      }

      if (onClick) {
        onClick(event);
      }
    }, _temp));
  }

  (0, _createClass2.default)(ExpansionPanelSummary, [{
    key: "render",
    value: function render() {
      var _classNames;

      var _props = this.props,
          children = _props.children,
          classes = _props.classes,
          className = _props.className,
          disabled = _props.disabled,
          expanded = _props.expanded,
          expandIcon = _props.expandIcon,
          onChange = _props.onChange,
          other = (0, _objectWithoutProperties2.default)(_props, ["children", "classes", "className", "disabled", "expanded", "expandIcon", "onChange"]);
      var focused = this.state.focused;
      return _react.default.createElement(_ButtonBase.default, (0, _extends2.default)({
        focusRipple: false,
        disableRipple: true,
        disabled: disabled,
        component: "div",
        "aria-expanded": expanded,
        className: (0, _classnames.default)(classes.root, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.disabled, disabled), (0, _defineProperty2.default)(_classNames, classes.expanded, expanded), (0, _defineProperty2.default)(_classNames, classes.focused, focused), _classNames), className)
      }, other, {
        onFocusVisible: this.handleFocus,
        onBlur: this.handleBlur,
        onClick: this.handleChange
      }), _react.default.createElement("div", {
        className: (0, _classnames.default)(classes.content, (0, _defineProperty2.default)({}, classes.expanded, expanded))
      }, children), expandIcon && _react.default.createElement(_IconButton.default, {
        disabled: disabled,
        className: (0, _classnames.default)(classes.expandIcon, (0, _defineProperty2.default)({}, classes.expanded, expanded)),
        component: "div",
        tabIndex: -1,
        "aria-hidden": "true"
      }, expandIcon));
    }
  }]);
  return ExpansionPanelSummary;
}(_react.default.Component);

ExpansionPanelSummary.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The content of the expansion panel summary.
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
   * @ignore
   * If `true`, the summary will be displayed in a disabled state.
   */
  disabled: _propTypes.default.bool,

  /**
   * @ignore
   * If `true`, expands the summary, otherwise collapse it.
   */
  expanded: _propTypes.default.bool,

  /**
   * The icon to display as the expand indicator.
   */
  expandIcon: _propTypes.default.node,

  /**
   * @ignore
   */
  onChange: _propTypes.default.func,

  /**
   * @ignore
   */
  onClick: _propTypes.default.func
} : {};
ExpansionPanelSummary.defaultProps = {
  disabled: false
};
ExpansionPanelSummary.muiName = 'ExpansionPanelSummary';

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiExpansionPanelSummary'
})(ExpansionPanelSummary);

exports.default = _default;