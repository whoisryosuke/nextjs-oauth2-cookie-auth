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

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactEventListener = _interopRequireDefault(require("react-event-listener"));

var _ownerDocument = _interopRequireDefault(require("../utils/ownerDocument"));

// @inheritedComponent EventListener

/**
 * Listen for click events that occur somewhere in the document, outside of the element itself.
 * For instance, if you need to hide a menu when people click anywhere else on your page.
 */
var ClickAwayListener =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(ClickAwayListener, _React$Component);

  function ClickAwayListener() {
    var _ref;

    var _temp, _this;

    (0, _classCallCheck2.default)(this, ClickAwayListener);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (0, _possibleConstructorReturn2.default)(_this, (_temp = _this = (0, _possibleConstructorReturn2.default)(this, (_ref = ClickAwayListener.__proto__ || Object.getPrototypeOf(ClickAwayListener)).call.apply(_ref, [this].concat(args))), _this.node = null, _this.mounted = null, _this.handleClickAway = function (event) {
      // Ignore events that have been `event.preventDefault()` marked.
      if (event.defaultPrevented) {
        return;
      } // IE11 support, which trigger the handleClickAway even after the unbind


      if (!_this.mounted) {
        return;
      } // The child might render null.


      if (!_this.node) {
        return;
      }

      var doc = (0, _ownerDocument.default)(_this.node);

      if (doc.documentElement && doc.documentElement.contains(event.target) && !_this.node.contains(event.target)) {
        _this.props.onClickAway(event);
      }
    }, _temp));
  }

  (0, _createClass2.default)(ClickAwayListener, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.node = _reactDom.default.findDOMNode(this);
      this.mounted = true;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mounted = false;
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          mouseEvent = _props.mouseEvent,
          touchEvent = _props.touchEvent,
          onClickAway = _props.onClickAway,
          other = (0, _objectWithoutProperties2.default)(_props, ["children", "mouseEvent", "touchEvent", "onClickAway"]);
      var listenerProps = {};

      if (mouseEvent !== false) {
        listenerProps[mouseEvent] = this.handleClickAway;
      }

      if (touchEvent !== false) {
        listenerProps[touchEvent] = this.handleClickAway;
      }

      return _react.default.createElement(_reactEventListener.default, (0, _extends2.default)({
        target: "document"
      }, listenerProps, other), children);
    }
  }]);
  return ClickAwayListener;
}(_react.default.Component);

ClickAwayListener.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes.default.node.isRequired,
  mouseEvent: _propTypes.default.oneOf(['onClick', 'onMouseDown', 'onMouseUp', false]),
  onClickAway: _propTypes.default.func.isRequired,
  touchEvent: _propTypes.default.oneOf(['onTouchStart', 'onTouchEnd', false])
} : {};
ClickAwayListener.defaultProps = {
  mouseEvent: 'onMouseUp',
  touchEvent: 'onTouchEnd'
};
var _default = ClickAwayListener;
exports.default = _default;