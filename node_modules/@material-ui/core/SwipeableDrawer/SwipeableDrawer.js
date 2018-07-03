"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/builtin/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/builtin/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reset = reset;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectSpread"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/possibleConstructorReturn"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/assertThisInitialized"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Drawer = _interopRequireWildcard(require("../Drawer/Drawer"));

var _transitions = require("../styles/transitions");

var _withTheme = _interopRequireDefault(require("../styles/withTheme"));

var _utils = require("../transitions/utils");

var _SwipeArea = _interopRequireDefault(require("./SwipeArea"));

/* eslint-disable consistent-this */
// @inheritedComponent Drawer
// This value is closed to what browsers are using internally to
// trigger a native scroll.
var UNCERTAINTY_THRESHOLD = 3; // px
// We can only have one node at the time claiming ownership for handling the swipe.
// Otherwise, the UX would be confusing.
// That's why we use a singleton here.

var nodeThatClaimedTheSwipe = null; // Exported for test purposes.

function reset() {
  nodeThatClaimedTheSwipe = null;
}
/* istanbul ignore if */


if (process.env.NODE_ENV !== 'production' && !_react.default.createContext) {
  throw new Error('Material-UI: react@16.3.0 or greater is required.');
}

var SwipeableDrawer =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(SwipeableDrawer, _React$Component);

  function SwipeableDrawer() {
    var _ref;

    var _temp, _this;

    (0, _classCallCheck2.default)(this, SwipeableDrawer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (0, _possibleConstructorReturn2.default)(_this, (_temp = _this = (0, _possibleConstructorReturn2.default)(this, (_ref = SwipeableDrawer.__proto__ || Object.getPrototypeOf(SwipeableDrawer)).call.apply(_ref, [this].concat(args))), _this.backdrop = null, _this.paper = null, _this.isSwiping = null, _this.startX = null, _this.startY = null, _this.state = {}, _this.handleBodyTouchStart = function (event) {
      // We are not supposed to hanlde this touch move.
      if (nodeThatClaimedTheSwipe !== null && nodeThatClaimedTheSwipe !== (0, _assertThisInitialized2.default)(_this)) {
        return;
      }

      var _this$props = _this.props,
          disableDiscovery = _this$props.disableDiscovery,
          disableSwipeToOpen = _this$props.disableSwipeToOpen,
          open = _this$props.open,
          swipeAreaWidth = _this$props.swipeAreaWidth;
      var anchor = (0, _Drawer.getAnchor)(_this.props);
      var currentX = anchor === 'right' ? document.body.offsetWidth - event.touches[0].pageX : event.touches[0].pageX;
      var currentY = anchor === 'bottom' ? window.innerHeight - event.touches[0].clientY : event.touches[0].clientY;

      if (!open) {
        if (disableSwipeToOpen) {
          return;
        }

        if ((0, _Drawer.isHorizontal)(_this.props)) {
          if (currentX > swipeAreaWidth) {
            return;
          }
        } else if (currentY > swipeAreaWidth) {
          return;
        }
      }

      nodeThatClaimedTheSwipe = (0, _assertThisInitialized2.default)(_this);
      _this.startX = currentX;
      _this.startY = currentY;

      _this.setState({
        maybeSwiping: true
      });

      if (!open && _this.paper) {
        // the ref may be null when a parent component updates while swiping
        _this.setPosition(_this.getMaxTranslate() + (disableDiscovery ? 20 : -swipeAreaWidth), {
          changeTransition: false
        });
      }

      document.body.addEventListener('touchmove', _this.handleBodyTouchMove, {
        passive: false
      });
      document.body.addEventListener('touchend', _this.handleBodyTouchEnd); // https://plus.google.com/+PaulIrish/posts/KTwfn1Y2238

      document.body.addEventListener('touchcancel', _this.handleBodyTouchEnd);
    }, _this.handleBodyTouchMove = function (event) {
      // the ref may be null when a parent component updates while swiping
      if (!_this.paper) return;
      var anchor = (0, _Drawer.getAnchor)(_this.props);
      var horizontalSwipe = (0, _Drawer.isHorizontal)(_this.props);
      var currentX = anchor === 'right' ? document.body.offsetWidth - event.touches[0].pageX : event.touches[0].pageX;
      var currentY = anchor === 'bottom' ? window.innerHeight - event.touches[0].clientY : event.touches[0].clientY; // We don't know yet.

      if (_this.isSwiping == null) {
        var dx = Math.abs(currentX - _this.startX);
        var dy = Math.abs(currentY - _this.startY); // We are likely to be swiping, let's prevent the scroll event on iOS.

        if (dx > dy) {
          event.preventDefault();
        }

        var isSwiping = horizontalSwipe ? dx > dy && dx > UNCERTAINTY_THRESHOLD : dy > dx && dy > UNCERTAINTY_THRESHOLD;

        if (isSwiping === true || (horizontalSwipe ? dy > UNCERTAINTY_THRESHOLD : dx > UNCERTAINTY_THRESHOLD)) {
          _this.isSwiping = isSwiping;

          if (!isSwiping) {
            _this.handleBodyTouchEnd(event);

            return;
          } // Shift the starting point.


          _this.startX = currentX;
          _this.startY = currentY; // Compensate for the part of the drawer displayed on touch start.

          if (!_this.props.disableDiscovery && !_this.props.open) {
            if (horizontalSwipe) {
              _this.startX -= _this.props.swipeAreaWidth;
            } else {
              _this.startY -= _this.props.swipeAreaWidth;
            }
          }
        }
      }

      if (!_this.isSwiping) {
        return;
      } // We are swiping, let's prevent the scroll event on iOS.


      event.preventDefault();

      _this.setPosition(_this.getTranslate(horizontalSwipe ? currentX : currentY));
    }, _this.handleBodyTouchEnd = function (event) {
      nodeThatClaimedTheSwipe = null;

      _this.removeBodyTouchListeners();

      _this.setState({
        maybeSwiping: false
      }); // The swipe wasn't started.


      if (!_this.isSwiping) {
        _this.isSwiping = null;
        return;
      }

      var anchor = (0, _Drawer.getAnchor)(_this.props);
      var current;

      if ((0, _Drawer.isHorizontal)(_this.props)) {
        current = anchor === 'right' ? document.body.offsetWidth - event.changedTouches[0].pageX : event.changedTouches[0].pageX;
      } else {
        current = anchor === 'bottom' ? window.innerHeight - event.changedTouches[0].clientY : event.changedTouches[0].clientY;
      }

      var translateRatio = _this.getTranslate(current) / _this.getMaxTranslate(); // We have to open or close after setting swiping to null,
      // because only then CSS transition is enabled.


      if (translateRatio > 0.5) {
        if (_this.isSwiping && !_this.props.open) {
          // Reset the position, the swipe was aborted.
          _this.setPosition(_this.getMaxTranslate(), {
            mode: 'enter'
          });
        } else {
          _this.props.onClose();
        }
      } else if (_this.isSwiping && !_this.props.open) {
        _this.props.onOpen();
      } else {
        // Reset the position, the swipe was aborted.
        _this.setPosition(0, {
          mode: 'exit'
        });
      }

      _this.isSwiping = null;
    }, _this.handleBackdropRef = function (node) {
      _this.backdrop = node ? _reactDom.default.findDOMNode(node) : null;
    }, _this.handlePaperRef = function (node) {
      _this.paper = node ? _reactDom.default.findDOMNode(node) : null;
    }, _temp));
  }

  (0, _createClass2.default)(SwipeableDrawer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.variant === 'temporary') {
        this.listenTouchStart();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var variant = this.props.variant;
      var prevVariant = prevProps.variant;

      if (variant !== prevVariant) {
        if (variant === 'temporary') {
          this.listenTouchStart();
        } else if (prevVariant === 'temporary') {
          this.removeTouchStart();
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeTouchStart();
      this.removeBodyTouchListeners(); // We need to release the lock.

      if (nodeThatClaimedTheSwipe === this) {
        nodeThatClaimedTheSwipe = null;
      }
    }
  }, {
    key: "getMaxTranslate",
    value: function getMaxTranslate() {
      return (0, _Drawer.isHorizontal)(this.props) ? this.paper.clientWidth : this.paper.clientHeight;
    }
  }, {
    key: "getTranslate",
    value: function getTranslate(current) {
      var start = (0, _Drawer.isHorizontal)(this.props) ? this.startX : this.startY;
      return Math.min(Math.max(this.props.open ? start - current : this.getMaxTranslate() + start - current, 0), this.getMaxTranslate());
    }
  }, {
    key: "setPosition",
    value: function setPosition(translate) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _options$mode = options.mode,
          mode = _options$mode === void 0 ? null : _options$mode,
          _options$changeTransi = options.changeTransition,
          changeTransition = _options$changeTransi === void 0 ? true : _options$changeTransi;
      var anchor = (0, _Drawer.getAnchor)(this.props);
      var rtlTranslateMultiplier = ['right', 'bottom'].indexOf(anchor) !== -1 ? 1 : -1;
      var transform = (0, _Drawer.isHorizontal)(this.props) ? "translate(".concat(rtlTranslateMultiplier * translate, "px, 0)") : "translate(0, ".concat(rtlTranslateMultiplier * translate, "px)");
      var drawerStyle = this.paper.style;
      drawerStyle.webkitTransform = transform;
      drawerStyle.transform = transform;
      var transition = '';

      if (mode) {
        transition = this.props.theme.transitions.create('all', (0, _utils.getTransitionProps)({
          timeout: this.props.transitionDuration
        }, {
          mode: mode
        }));
      }

      if (changeTransition) {
        drawerStyle.webkitTransition = transition;
        drawerStyle.transition = transition;
      }

      if (!this.props.disableBackdropTransition) {
        var backdropStyle = this.backdrop.style;
        backdropStyle.opacity = 1 - translate / this.getMaxTranslate();

        if (changeTransition) {
          backdropStyle.webkitTransition = transition;
          backdropStyle.transition = transition;
        }
      }
    }
  }, {
    key: "listenTouchStart",
    value: function listenTouchStart() {
      document.body.addEventListener('touchstart', this.handleBodyTouchStart);
    }
  }, {
    key: "removeTouchStart",
    value: function removeTouchStart() {
      document.body.removeEventListener('touchstart', this.handleBodyTouchStart);
    }
  }, {
    key: "removeBodyTouchListeners",
    value: function removeBodyTouchListeners() {
      document.body.removeEventListener('touchmove', this.handleBodyTouchMove, {
        passive: false
      });
      document.body.removeEventListener('touchend', this.handleBodyTouchEnd);
      document.body.removeEventListener('touchcancel', this.handleBodyTouchEnd);
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          disableBackdropTransition = _props.disableBackdropTransition,
          disableDiscovery = _props.disableDiscovery,
          disableSwipeToOpen = _props.disableSwipeToOpen,
          _props$ModalProps = _props.ModalProps;
      _props$ModalProps = _props$ModalProps === void 0 ? {} : _props$ModalProps;
      var BackdropProps = _props$ModalProps.BackdropProps,
          ModalPropsProp = (0, _objectWithoutProperties2.default)(_props$ModalProps, ["BackdropProps"]),
          onOpen = _props.onOpen,
          open = _props.open,
          _props$PaperProps = _props.PaperProps,
          PaperProps = _props$PaperProps === void 0 ? {} : _props$PaperProps,
          swipeAreaWidth = _props.swipeAreaWidth,
          variant = _props.variant,
          other = (0, _objectWithoutProperties2.default)(_props, ["disableBackdropTransition", "disableDiscovery", "disableSwipeToOpen", "ModalProps", "onOpen", "open", "PaperProps", "swipeAreaWidth", "variant"]);
      var maybeSwiping = this.state.maybeSwiping;
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Drawer.default, (0, _extends2.default)({
        open: variant === 'temporary' && maybeSwiping ? true : open,
        variant: variant,
        ModalProps: (0, _objectSpread2.default)({
          BackdropProps: (0, _objectSpread2.default)({}, BackdropProps, {
            ref: this.handleBackdropRef
          })
        }, ModalPropsProp),
        PaperProps: (0, _objectSpread2.default)({}, PaperProps, {
          style: (0, _objectSpread2.default)({
            pointerEvents: variant === 'temporary' && !open ? 'none' : ''
          }, PaperProps.style),
          ref: this.handlePaperRef
        })
      }, other)), !disableDiscovery && !disableSwipeToOpen && variant === 'temporary' && _react.default.createElement(_SwipeArea.default, {
        anchor: other.anchor,
        swipeAreaWidth: swipeAreaWidth
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (typeof prevState.maybeSwiping === 'undefined') {
        return {
          maybeSwiping: false,
          open: nextProps.open
        };
      }

      if (!nextProps.open && prevState.open) {
        return {
          maybeSwiping: false,
          open: nextProps.open
        };
      }

      return {
        open: nextProps.open
      };
    }
  }]);
  return SwipeableDrawer;
}(_react.default.Component);

SwipeableDrawer.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * @ignore
   */
  anchor: _propTypes.default.oneOf(['left', 'top', 'right', 'bottom']),

  /**
   * Disable the backdrop transition.
   * This can improve the FPS on low-end devices.
   */
  disableBackdropTransition: _propTypes.default.bool,

  /**
   * If `true`, touching the screen near the edge of the drawer will not slide in the drawer a bit
   * to promote accidental discovery of the swipe gesture.
   */
  disableDiscovery: _propTypes.default.bool,

  /**
   * If `true`, swipe to open is disabled. This is useful in browsers where swiping triggers
   * navigation actions. Swipe to open is disabled on iOS browsers by default.
   */
  disableSwipeToOpen: _propTypes.default.bool,

  /**
   * @ignore
   */
  ModalProps: _propTypes.default.object,

  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback
   */
  onClose: _propTypes.default.func.isRequired,

  /**
   * Callback fired when the component requests to be opened.
   *
   * @param {object} event The event source of the callback
   */
  onOpen: _propTypes.default.func.isRequired,

  /**
   * If `true`, the drawer is open.
   */
  open: _propTypes.default.bool.isRequired,

  /**
   * @ignore
   */
  PaperProps: _propTypes.default.object,

  /**
   * The width of the left most (or right most) area in pixels where the
   * drawer can be swiped open from.
   */
  swipeAreaWidth: _propTypes.default.number,

  /**
   * @ignore
   */
  theme: _propTypes.default.object.isRequired,

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
    enter: _propTypes.default.number,
    exit: _propTypes.default.number
  })]),

  /**
   * @ignore
   */
  variant: _propTypes.default.oneOf(['permanent', 'persistent', 'temporary'])
} : {};
SwipeableDrawer.defaultProps = {
  anchor: 'left',
  disableBackdropTransition: false,
  disableDiscovery: false,
  disableSwipeToOpen: typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent),
  swipeAreaWidth: 20,
  transitionDuration: {
    enter: _transitions.duration.enteringScreen,
    exit: _transitions.duration.leavingScreen
  },
  variant: 'temporary' // Mobile first.

};

var _default = (0, _withTheme.default)()(SwipeableDrawer);

exports.default = _default;