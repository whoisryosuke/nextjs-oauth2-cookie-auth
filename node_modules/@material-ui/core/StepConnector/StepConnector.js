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

var styles = function styles(theme) {
  return {
    root: {
      flex: '1 1 auto'
    },
    horizontal: {},
    vertical: {
      marginLeft: 12,
      // half icon
      padding: "0 0 ".concat(theme.spacing.unit, "px")
    },
    alternativeLabel: {
      position: 'absolute',
      top: theme.spacing.unit + 4,
      left: 'calc(50% + 20px)',
      right: 'calc(-50% + 20px)'
    },
    line: {
      display: 'block',
      borderColor: theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[600]
    },
    lineHorizontal: {
      borderTopStyle: 'solid',
      borderTopWidth: 1
    },
    lineVertical: {
      borderLeftStyle: 'solid',
      borderLeftWidth: 1,
      minHeight: theme.spacing.unit * 3
    }
  };
};

exports.styles = styles;

function StepConnector(props) {
  var _classNames2;

  var alternativeLabel = props.alternativeLabel,
      classNameProp = props.className,
      classes = props.classes,
      orientation = props.orientation,
      other = (0, _objectWithoutProperties2.default)(props, ["alternativeLabel", "className", "classes", "orientation"]);
  var className = (0, _classnames.default)(classes.root, classes[orientation], (0, _defineProperty2.default)({}, classes.alternativeLabel, alternativeLabel), classNameProp);
  var lineClassName = (0, _classnames.default)(classes.line, (_classNames2 = {}, (0, _defineProperty2.default)(_classNames2, classes.lineHorizontal, orientation === 'horizontal'), (0, _defineProperty2.default)(_classNames2, classes.lineVertical, orientation === 'vertical'), _classNames2));
  return _react.default.createElement("div", (0, _extends2.default)({
    className: className
  }, other), _react.default.createElement("span", {
    className: lineClassName
  }));
}

StepConnector.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * @ignore
   * Set internally by Step when it's supplied with the alternativeLabel property.
   */
  alternativeLabel: _propTypes.default.bool,

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
   */
  orientation: _propTypes.default.oneOf(['horizontal', 'vertical'])
} : {};
StepConnector.defaultProps = {
  alternativeLabel: false,
  orientation: 'horizontal'
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiStepConnector'
})(StepConnector);

exports.default = _default;