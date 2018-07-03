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

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectSpread"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Collapse = _interopRequireDefault(require("../Collapse"));

var _Paper = _interopRequireDefault(require("../Paper"));

var _withStyles = _interopRequireDefault(require("../styles/withStyles"));

var _reactHelpers = require("../utils/reactHelpers");

// @inheritedComponent Paper
// Workaround https://github.com/jsdom/jsdom/issues/2026
var edgeFix = typeof window !== 'undefined' && /jsdom/.test(window.navigator.userAgent) ? {} : {
  // Fix a rendering issue on Edge
  '@supports (-ms-ime-align: auto)': {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  }
};

var styles = function styles(theme) {
  var transition = {
    duration: theme.transitions.duration.shortest
  };
  return {
    root: {
      position: 'relative',
      transition: theme.transitions.create(['margin'], transition),
      '&:before': {
        position: 'absolute',
        left: 0,
        top: -1,
        right: 0,
        height: 1,
        content: '""',
        opacity: 1,
        backgroundColor: theme.palette.divider,
        transition: theme.transitions.create(['opacity', 'background-color'], transition)
      },
      '&:first-child': {
        borderTopLeftRadius: 2,
        borderTopRightRadius: 2,
        '&:before': {
          display: 'none'
        }
      },
      '&:last-child': (0, _objectSpread2.default)({
        borderBottomLeftRadius: 2,
        borderBottomRightRadius: 2
      }, edgeFix),
      '&$expanded + &': {
        '&:before': {
          display: 'none'
        }
      }
    },
    expanded: {
      margin: "".concat(theme.spacing.unit * 2, "px 0"),
      '&:first-child': {
        marginTop: 0
      },
      '&:last-child': {
        marginBottom: 0
      },
      '&:before': {
        opacity: 0
      }
    },
    disabled: {
      backgroundColor: theme.palette.action.disabledBackground
    }
  };
};

exports.styles = styles;

var ExpansionPanel =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(ExpansionPanel, _React$Component);

  function ExpansionPanel(props) {
    var _this;

    (0, _classCallCheck2.default)(this, ExpansionPanel);
    _this = (0, _possibleConstructorReturn2.default)(this, (ExpansionPanel.__proto__ || Object.getPrototypeOf(ExpansionPanel)).call(this, props));
    _this.isControlled = null;
    _this.state = {};

    _this.handleChange = function (event) {
      var expanded = _this.isControlled ? _this.props.expanded : _this.state.expanded;

      if (!_this.isControlled) {
        _this.setState({
          expanded: !expanded
        });
      }

      if (_this.props.onChange) {
        _this.props.onChange(event, !expanded);
      }
    };

    _this.isControlled = props.expanded != null;

    if (!_this.isControlled) {
      // not controlled, use internal state
      _this.state.expanded = props.defaultExpanded !== undefined ? props.defaultExpanded : false;
    }

    return _this;
  }

  (0, _createClass2.default)(ExpansionPanel, [{
    key: "render",
    value: function render() {
      var _classNames,
          _this2 = this;

      var _props = this.props,
          childrenProp = _props.children,
          classes = _props.classes,
          classNameProp = _props.className,
          CollapsePropsProp = _props.CollapseProps,
          defaultExpanded = _props.defaultExpanded,
          disabled = _props.disabled,
          expandedProp = _props.expanded,
          onChange = _props.onChange,
          other = (0, _objectWithoutProperties2.default)(_props, ["children", "classes", "className", "CollapseProps", "defaultExpanded", "disabled", "expanded", "onChange"]);
      var expanded = this.isControlled ? expandedProp : this.state.expanded;
      var className = (0, _classnames.default)(classes.root, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.expanded, expanded), (0, _defineProperty2.default)(_classNames, classes.disabled, disabled), _classNames), classNameProp);
      var summary = null;

      var children = _react.default.Children.map(childrenProp, function (child) {
        if (!_react.default.isValidElement(child)) {
          return null;
        }

        if ((0, _reactHelpers.isMuiElement)(child, ['ExpansionPanelSummary'])) {
          summary = _react.default.cloneElement(child, {
            disabled: disabled,
            expanded: expanded,
            onChange: _this2.handleChange
          });
          return null;
        }

        return child;
      });

      var CollapseProps = !expanded ? {
        'aria-hidden': 'true'
      } : null;
      return _react.default.createElement(_Paper.default, (0, _extends2.default)({
        className: className,
        elevation: 1,
        square: true
      }, other), summary, _react.default.createElement(_Collapse.default, (0, _extends2.default)({
        "in": expanded,
        timeout: "auto"
      }, CollapseProps, CollapsePropsProp), children));
    }
  }]);
  return ExpansionPanel;
}(_react.default.Component);

ExpansionPanel.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The content of the expansion panel.
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
   * Properties applied to the `Collapse` element.
   */
  CollapseProps: _propTypes.default.object,

  /**
   * If `true`, expands the panel by default.
   */
  defaultExpanded: _propTypes.default.bool,

  /**
   * If `true`, the panel will be displayed in a disabled state.
   */
  disabled: _propTypes.default.bool,

  /**
   * If `true`, expands the panel, otherwise collapse it.
   * Setting this prop enables control over the panel.
   */
  expanded: _propTypes.default.bool,

  /**
   * Callback fired when the expand/collapse state is changed.
   *
   * @param {object} event The event source of the callback
   * @param {boolean} expanded The `expanded` state of the panel
   */
  onChange: _propTypes.default.func
} : {};
ExpansionPanel.defaultProps = {
  defaultExpanded: false,
  disabled: false
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiExpansionPanel'
})(ExpansionPanel);

exports.default = _default;