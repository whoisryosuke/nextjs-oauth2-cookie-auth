"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/builtin/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _withStyles = _interopRequireDefault(require("../styles/withStyles"));

var _Paper = _interopRequireDefault(require("../Paper"));

var _helpers = require("../utils/helpers");

var _LinearProgress = _interopRequireDefault(require("../LinearProgress"));

// @inheritedComponent Paper
var styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: theme.palette.background.default,
      padding: theme.spacing.unit
    },
    positionBottom: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: theme.zIndex.mobileStepper
    },
    positionTop: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: theme.zIndex.mobileStepper
    },
    positionStatic: {},
    dots: {
      display: 'flex',
      flexDirection: 'row'
    },
    dot: {
      backgroundColor: theme.palette.action.disabled,
      borderRadius: '50%',
      width: theme.spacing.unit,
      height: theme.spacing.unit,
      margin: '0 2px'
    },
    dotActive: {
      backgroundColor: theme.palette.primary.main
    },
    progress: {
      width: '50%'
    }
  };
};

exports.styles = styles;

function MobileStepper(props) {
  var activeStep = props.activeStep,
      backButton = props.backButton,
      classes = props.classes,
      classNameProp = props.className,
      nextButton = props.nextButton,
      position = props.position,
      steps = props.steps,
      variant = props.variant,
      other = (0, _objectWithoutProperties2.default)(props, ["activeStep", "backButton", "classes", "className", "nextButton", "position", "steps", "variant"]);
  var className = (0, _classnames.default)(classes.root, classes["position".concat((0, _helpers.capitalize)(position))], classNameProp);
  return _react.default.createElement(_Paper.default, (0, _extends2.default)({
    square: true,
    elevation: 0,
    className: className
  }, other), backButton, variant === 'dots' && _react.default.createElement("div", {
    className: classes.dots
  }, (0, _toConsumableArray2.default)(new Array(steps)).map(function (_, step) {
    var dotClassName = (0, _classnames.default)(classes.dot, (0, _defineProperty2.default)({}, classes.dotActive, step === activeStep)); // eslint-disable-next-line react/no-array-index-key

    return _react.default.createElement("div", {
      key: step,
      className: dotClassName
    });
  })), variant === 'progress' && _react.default.createElement(_LinearProgress.default, {
    className: classes.progress,
    variant: "determinate",
    value: Math.ceil(activeStep / (steps - 1) * 100)
  }), nextButton);
}

MobileStepper.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Set the active step (zero based index).
   * Defines which dot is highlighted when the variant is 'dots'.
   */
  activeStep: _propTypes.default.number,

  /**
   * A back button element. For instance, it can be be a `Button` or a `IconButton`.
   */
  backButton: _propTypes.default.node,

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
   * A next button element. For instance, it can be be a `Button` or a `IconButton`.
   */
  nextButton: _propTypes.default.node,

  /**
   * Set the positioning type.
   */
  position: _propTypes.default.oneOf(['bottom', 'top', 'static']),

  /**
   * The total steps.
   */
  steps: _propTypes.default.number.isRequired,

  /**
   * The type of mobile stepper to use.
   */
  variant: _propTypes.default.oneOf(['text', 'dots', 'progress'])
} : {};
MobileStepper.defaultProps = {
  activeStep: 0,
  position: 'bottom',
  variant: 'dots'
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiMobileStepper'
})(MobileStepper);

exports.default = _default;