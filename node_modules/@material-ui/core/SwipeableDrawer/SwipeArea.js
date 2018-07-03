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

var _Drawer = require("../Drawer/Drawer");

var styles = function styles(theme) {
  return {
    root: {
      position: 'fixed',
      top: 0,
      left: 0,
      height: '100vh',
      zIndex: theme.zIndex.drawer - 1
    },
    discoveryAnchorLeft: {
      right: 'auto'
    },
    discoveryAnchorRight: {
      left: 'auto',
      right: 0
    },
    discoveryAnchorTop: {
      bottom: 'auto',
      right: 0
    },
    discoveryAnchorBottom: {
      top: 'auto',
      bottom: 0,
      right: 0
    }
  };
};
/**
 * @ignore - internal component.
 */


exports.styles = styles;

function SwipeArea(props) {
  var anchor = props.anchor,
      classes = props.classes,
      swipeAreaWidth = props.swipeAreaWidth,
      other = (0, _objectWithoutProperties2.default)(props, ["anchor", "classes", "swipeAreaWidth"]);
  return _react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)(classes.root, classes["discoveryAnchor".concat((0, _helpers.capitalize)(anchor))]),
    style: (0, _defineProperty2.default)({}, (0, _Drawer.isHorizontal)(props) ? 'width' : 'height', swipeAreaWidth)
  }, other));
}

SwipeArea.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Side on which to attach the discovery area.
   */
  anchor: _propTypes.default.oneOf(['left', 'top', 'right', 'bottom']).isRequired,

  /**
   * @ignore
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * The width of the left most (or right most) area in pixels where the
   * drawer can be swiped open from.
   */
  swipeAreaWidth: _propTypes.default.number.isRequired
} : {};

var _default = (0, _withStyles.default)(styles)(SwipeArea);

exports.default = _default;