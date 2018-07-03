"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/builtin/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectSpread"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/possibleConstructorReturn"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _warning = _interopRequireDefault(require("warning"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactEventListener = _interopRequireDefault(require("react-event-listener"));

var _debounce = _interopRequireDefault(require("debounce"));

var _normalizeScrollLeft = require("normalize-scroll-left");

var _scroll = _interopRequireDefault(require("scroll"));

var _ScrollbarSize = _interopRequireDefault(require("./ScrollbarSize"));

var _withStyles = _interopRequireDefault(require("../styles/withStyles"));

var _TabIndicator = _interopRequireDefault(require("./TabIndicator"));

var _TabScrollButton = _interopRequireDefault(require("./TabScrollButton"));

/* eslint-disable no-restricted-globals */
// < 1kb payload overhead when lodash/debounce is > 3kb.
var styles = function styles(theme) {
  return {
    root: {
      overflow: 'hidden',
      minHeight: 48,
      WebkitOverflowScrolling: 'touch' // Add iOS momentum scrolling.

    },
    flexContainer: {
      display: 'flex'
    },
    scroller: {
      position: 'relative',
      display: 'inline-block',
      flex: '1 1 auto',
      whiteSpace: 'nowrap'
    },
    fixed: {
      overflowX: 'hidden',
      width: '100%'
    },
    scrollable: {
      overflowX: 'scroll'
    },
    centered: {
      justifyContent: 'center'
    },
    scrollButtons: {},
    scrollButtonsAuto: (0, _defineProperty2.default)({}, theme.breakpoints.down('xs'), {
      display: 'none'
    }),
    indicator: {}
  };
};

exports.styles = styles;

var Tabs =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Tabs, _React$Component);

  function Tabs() {
    var _ref;

    var _temp, _this;

    (0, _classCallCheck2.default)(this, Tabs);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (0, _possibleConstructorReturn2.default)(_this, (_temp = _this = (0, _possibleConstructorReturn2.default)(this, (_ref = Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call.apply(_ref, [this].concat(args))), _this.tabs = null, _this.valueToIndex = new Map(), _this.handleResize = (0, _debounce.default)(function () {
      _this.updateIndicatorState(_this.props);

      _this.updateScrollButtonState();
    }, 166), _this.handleTabsScroll = (0, _debounce.default)(function () {
      _this.updateScrollButtonState();
    }, 166), _this.state = {
      indicatorStyle: {},
      scrollerStyle: {
        marginBottom: 0
      },
      showLeftScroll: false,
      showRightScroll: false,
      mounted: false
    }, _this.getConditionalElements = function () {
      var _this$props = _this.props,
          classes = _this$props.classes,
          scrollable = _this$props.scrollable,
          ScrollButtonComponent = _this$props.ScrollButtonComponent,
          scrollButtons = _this$props.scrollButtons,
          theme = _this$props.theme;
      var conditionalElements = {};
      conditionalElements.scrollbarSizeListener = scrollable ? _react.default.createElement(_ScrollbarSize.default, {
        onLoad: _this.handleScrollbarSizeChange,
        onChange: _this.handleScrollbarSizeChange
      }) : null;
      var showScrollButtons = scrollable && (scrollButtons === 'auto' || scrollButtons === 'on');
      conditionalElements.scrollButtonLeft = showScrollButtons ? _react.default.createElement(ScrollButtonComponent, {
        direction: theme && theme.direction === 'rtl' ? 'right' : 'left',
        onClick: _this.handleLeftScrollClick,
        visible: _this.state.showLeftScroll,
        className: (0, _classnames.default)(classes.scrollButtons, (0, _defineProperty2.default)({}, classes.scrollButtonsAuto, scrollButtons === 'auto'))
      }) : null;
      conditionalElements.scrollButtonRight = showScrollButtons ? _react.default.createElement(ScrollButtonComponent, {
        direction: theme && theme.direction === 'rtl' ? 'left' : 'right',
        onClick: _this.handleRightScrollClick,
        visible: _this.state.showRightScroll,
        className: (0, _classnames.default)(classes.scrollButtons, (0, _defineProperty2.default)({}, classes.scrollButtonsAuto, scrollButtons === 'auto'))
      }) : null;
      return conditionalElements;
    }, _this.getTabsMeta = function (value, direction) {
      var tabsMeta;

      if (_this.tabs) {
        var rect = _this.tabs.getBoundingClientRect(); // create a new object with ClientRect class props + scrollLeft


        tabsMeta = {
          clientWidth: _this.tabs ? _this.tabs.clientWidth : 0,
          scrollLeft: _this.tabs ? _this.tabs.scrollLeft : 0,
          scrollLeftNormalized: _this.tabs ? (0, _normalizeScrollLeft.getNormalizedScrollLeft)(_this.tabs, direction) : 0,
          scrollWidth: _this.tabs ? _this.tabs.scrollWidth : 0,
          left: rect.left,
          right: rect.right
        };
      }

      var tabMeta;

      if (_this.tabs && value !== false) {
        var children = _this.tabs.children[0].children;

        if (children.length > 0) {
          var tab = children[_this.valueToIndex.get(value)];

          process.env.NODE_ENV !== "production" ? (0, _warning.default)(tab, "Material-UI: the value provided `".concat(value, "` is invalid")) : void 0;
          tabMeta = tab ? tab.getBoundingClientRect() : null;
        }
      }

      return {
        tabsMeta: tabsMeta,
        tabMeta: tabMeta
      };
    }, _this.handleLeftScrollClick = function () {
      if (_this.tabs) {
        _this.moveTabsScroll(-_this.tabs.clientWidth);
      }
    }, _this.handleRightScrollClick = function () {
      if (_this.tabs) {
        _this.moveTabsScroll(_this.tabs.clientWidth);
      }
    }, _this.handleScrollbarSizeChange = function (_ref2) {
      var scrollbarHeight = _ref2.scrollbarHeight;

      _this.setState({
        scrollerStyle: {
          marginBottom: -scrollbarHeight
        }
      });
    }, _this.moveTabsScroll = function (delta) {
      var theme = _this.props.theme;

      if (_this.tabs) {
        var multiplier = theme.direction === 'rtl' ? -1 : 1;
        var nextScrollLeft = _this.tabs.scrollLeft + delta * multiplier; // Fix for Edge

        var invert = theme.direction === 'rtl' && (0, _normalizeScrollLeft.detectScrollType)() === 'reverse' ? -1 : 1;

        _scroll.default.left(_this.tabs, invert * nextScrollLeft);
      }
    }, _this.scrollSelectedIntoView = function () {
      var _this$props2 = _this.props,
          theme = _this$props2.theme,
          value = _this$props2.value;

      var _this$getTabsMeta = _this.getTabsMeta(value, theme.direction),
          tabsMeta = _this$getTabsMeta.tabsMeta,
          tabMeta = _this$getTabsMeta.tabMeta;

      if (!tabMeta || !tabsMeta) {
        return;
      }

      if (tabMeta.left < tabsMeta.left) {
        // left side of button is out of view
        var nextScrollLeft = tabsMeta.scrollLeft + (tabMeta.left - tabsMeta.left);

        _scroll.default.left(_this.tabs, nextScrollLeft);
      } else if (tabMeta.right > tabsMeta.right) {
        // right side of button is out of view
        var _nextScrollLeft = tabsMeta.scrollLeft + (tabMeta.right - tabsMeta.right);

        _scroll.default.left(_this.tabs, _nextScrollLeft);
      }
    }, _this.updateScrollButtonState = function () {
      var _this$props3 = _this.props,
          scrollable = _this$props3.scrollable,
          scrollButtons = _this$props3.scrollButtons,
          theme = _this$props3.theme;

      if (_this.tabs && scrollable && scrollButtons !== 'off') {
        var _this$tabs = _this.tabs,
            scrollWidth = _this$tabs.scrollWidth,
            clientWidth = _this$tabs.clientWidth;
        var scrollLeft = (0, _normalizeScrollLeft.getNormalizedScrollLeft)(_this.tabs, theme.direction);
        var showLeftScroll = theme.direction === 'rtl' ? scrollWidth > clientWidth + scrollLeft : scrollLeft > 0;
        var showRightScroll = theme.direction === 'rtl' ? scrollLeft > 0 : scrollWidth > clientWidth + scrollLeft;

        if (showLeftScroll !== _this.state.showLeftScroll || showRightScroll !== _this.state.showRightScroll) {
          _this.setState({
            showLeftScroll: showLeftScroll,
            showRightScroll: showRightScroll
          });
        }
      }
    }, _temp));
  }

  (0, _createClass2.default)(Tabs, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // eslint-disable-next-line react/no-did-mount-set-state
      this.setState({
        mounted: true
      });
      this.updateIndicatorState(this.props);
      this.updateScrollButtonState();

      if (this.props.action) {
        this.props.action({
          updateIndicator: this.handleResize
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      this.updateScrollButtonState(); // The index might have changed at the same time.
      // We need to check again the right indicator position.

      this.updateIndicatorState(this.props);

      if (this.state.indicatorStyle !== prevState.indicatorStyle) {
        this.scrollSelectedIntoView();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.handleResize.clear();
      this.handleTabsScroll.clear();
    }
  }, {
    key: "updateIndicatorState",
    value: function updateIndicatorState(props) {
      var theme = props.theme,
          value = props.value;

      var _getTabsMeta = this.getTabsMeta(value, theme.direction),
          tabsMeta = _getTabsMeta.tabsMeta,
          tabMeta = _getTabsMeta.tabMeta;

      var left = 0;

      if (tabMeta && tabsMeta) {
        var correction = theme.direction === 'rtl' ? tabsMeta.scrollLeftNormalized + tabsMeta.clientWidth - tabsMeta.scrollWidth : tabsMeta.scrollLeft;
        left = tabMeta.left - tabsMeta.left + correction;
      }

      var indicatorStyle = {
        left: left,
        // May be wrong until the font is loaded.
        width: tabMeta ? tabMeta.width : 0
      };

      if ((indicatorStyle.left !== this.state.indicatorStyle.left || indicatorStyle.width !== this.state.indicatorStyle.width) && !isNaN(indicatorStyle.left) && !isNaN(indicatorStyle.width)) {
        this.setState({
          indicatorStyle: indicatorStyle
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames3,
          _this2 = this;

      var _props = this.props,
          action = _props.action,
          centered = _props.centered,
          childrenProp = _props.children,
          classes = _props.classes,
          classNameProp = _props.className,
          Component = _props.component,
          fullWidth = _props.fullWidth,
          indicatorColor = _props.indicatorColor,
          onChange = _props.onChange,
          scrollable = _props.scrollable,
          ScrollButtonComponent = _props.ScrollButtonComponent,
          scrollButtons = _props.scrollButtons,
          _props$TabIndicatorPr = _props.TabIndicatorProps,
          TabIndicatorProps = _props$TabIndicatorPr === void 0 ? {} : _props$TabIndicatorPr,
          textColor = _props.textColor,
          theme = _props.theme,
          value = _props.value,
          other = (0, _objectWithoutProperties2.default)(_props, ["action", "centered", "children", "classes", "className", "component", "fullWidth", "indicatorColor", "onChange", "scrollable", "ScrollButtonComponent", "scrollButtons", "TabIndicatorProps", "textColor", "theme", "value"]);
      process.env.NODE_ENV !== "production" ? (0, _warning.default)(!centered || !scrollable, 'Material-UI: you can not use the `centered={true}` and `scrollable={true}` properties ' + 'at the same time on a `Tabs` component.') : void 0;
      var className = (0, _classnames.default)(classes.root, classNameProp);
      var scrollerClassName = (0, _classnames.default)(classes.scroller, (_classNames3 = {}, (0, _defineProperty2.default)(_classNames3, classes.fixed, !scrollable), (0, _defineProperty2.default)(_classNames3, classes.scrollable, scrollable), _classNames3));
      var flexContainerClassName = (0, _classnames.default)(classes.flexContainer, (0, _defineProperty2.default)({}, classes.centered, centered && !scrollable));

      var indicator = _react.default.createElement(_TabIndicator.default, (0, _extends2.default)({
        className: classes.indicator,
        color: indicatorColor
      }, TabIndicatorProps, {
        style: (0, _objectSpread2.default)({}, this.state.indicatorStyle, TabIndicatorProps.style)
      }));

      this.valueToIndex = new Map();
      var childIndex = 0;

      var children = _react.default.Children.map(childrenProp, function (child) {
        if (!_react.default.isValidElement(child)) {
          return null;
        }

        var childValue = child.props.value === undefined ? childIndex : child.props.value;

        _this2.valueToIndex.set(childValue, childIndex);

        var selected = childValue === value;
        childIndex += 1;
        return _react.default.cloneElement(child, {
          fullWidth: fullWidth,
          indicator: selected && !_this2.state.mounted && indicator,
          selected: selected,
          onChange: onChange,
          textColor: textColor,
          value: childValue
        });
      });

      var conditionalElements = this.getConditionalElements();
      return _react.default.createElement(Component, (0, _extends2.default)({
        className: className
      }, other), _react.default.createElement(_reactEventListener.default, {
        target: "window",
        onResize: this.handleResize
      }), conditionalElements.scrollbarSizeListener, _react.default.createElement("div", {
        className: classes.flexContainer
      }, conditionalElements.scrollButtonLeft, _react.default.createElement("div", {
        className: scrollerClassName,
        style: this.state.scrollerStyle,
        ref: function ref(node) {
          _this2.tabs = node;
        },
        role: "tablist",
        onScroll: this.handleTabsScroll
      }, _react.default.createElement("div", {
        className: flexContainerClassName
      }, children), this.state.mounted && indicator), conditionalElements.scrollButtonRight));
    }
  }]);
  return Tabs;
}(_react.default.Component);

Tabs.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Callback fired when the component mounts.
   * This is useful when you want to trigger an action programmatically.
   * It currently only supports `updateIndicator()` action.
   *
   * @param {object} actions This object contains all possible actions
   * that can be triggered programmatically.
   */
  action: _propTypes.default.func,

  /**
   * If `true`, the tabs will be centered.
   * This property is intended for large views.
   */
  centered: _propTypes.default.bool,

  /**
   * The content of the component.
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
   * If `true`, the tabs will grow to use all the available space.
   * This property is intended for small views, like on mobile.
   */
  fullWidth: _propTypes.default.bool,

  /**
   * Determines the color of the indicator.
   */
  indicatorColor: _propTypes.default.oneOf(['secondary', 'primary']),

  /**
   * Callback fired when the value changes.
   *
   * @param {object} event The event source of the callback
   * @param {number} value We default to the index of the child
   */
  onChange: _propTypes.default.func,

  /**
   * True invokes scrolling properties and allow for horizontally scrolling
   * (or swiping) the tab bar.
   */
  scrollable: _propTypes.default.bool,

  /**
   * The component used to render the scroll buttons.
   */
  ScrollButtonComponent: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

  /**
   * Determine behavior of scroll buttons when tabs are set to scroll
   * `auto` will only present them on medium and larger viewports
   * `on` will always present them
   * `off` will never present them
   */
  scrollButtons: _propTypes.default.oneOf(['auto', 'on', 'off']),

  /**
   * Properties applied to the `TabIndicator` element.
   */
  TabIndicatorProps: _propTypes.default.object,

  /**
   * Determines the color of the `Tab`.
   */
  textColor: _propTypes.default.oneOf(['secondary', 'primary', 'inherit']),

  /**
   * @ignore
   */
  theme: _propTypes.default.object.isRequired,

  /**
   * The value of the currently selected `Tab`.
   * If you don't want any selected `Tab`, you can set this property to `false`.
   */
  value: _propTypes.default.any
} : {};
Tabs.defaultProps = {
  centered: false,
  component: 'div',
  fullWidth: false,
  indicatorColor: 'secondary',
  scrollable: false,
  ScrollButtonComponent: _TabScrollButton.default,
  scrollButtons: 'auto',
  textColor: 'inherit'
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiTabs',
  withTheme: true
})(Tabs);

exports.default = _default;