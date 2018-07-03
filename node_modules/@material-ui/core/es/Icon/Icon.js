import _extends from "@babel/runtime/helpers/builtin/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/builtin/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
import { capitalize } from '../utils/helpers';
export const styles = theme => ({
  root: {
    userSelect: 'none',
    fontSize: 24,
    width: '1em',
    height: '1em',
    // Chrome fix for https://bugs.chromium.org/p/chromium/issues/detail?id=820541
    // To remove at some point.
    overflow: 'hidden',
    flexShrink: 0
  },
  colorPrimary: {
    color: theme.palette.primary.main
  },
  colorSecondary: {
    color: theme.palette.secondary.main
  },
  colorAction: {
    color: theme.palette.action.active
  },
  colorError: {
    color: theme.palette.error.main
  },
  colorDisabled: {
    color: theme.palette.action.disabled
  }
});

function Icon(props) {
  const {
    children,
    classes,
    className,
    color
  } = props,
        other = _objectWithoutProperties(props, ["children", "classes", "className", "color"]);

  return React.createElement("span", _extends({
    className: classNames('material-icons', classes.root, {
      [classes[`color${capitalize(color)}`]]: color !== 'inherit'
    }, className),
    "aria-hidden": "true"
  }, other), children);
}

Icon.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The name of the icon font ligature.
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object.isRequired,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['inherit', 'primary', 'secondary', 'action', 'error', 'disabled'])
} : {};
Icon.defaultProps = {
  color: 'inherit'
};
Icon.muiName = 'Icon';
export default withStyles(styles, {
  name: 'MuiIcon'
})(Icon);