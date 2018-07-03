import _extends from "@babel/runtime/helpers/builtin/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/builtin/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
import { capitalize } from '../utils/helpers';
export const styles = theme => ({
  root: {
    position: 'absolute',
    height: 2,
    bottom: 0,
    width: '100%',
    transition: theme.transitions.create(),
    willChange: 'left, width'
  },
  colorPrimary: {
    backgroundColor: theme.palette.primary.main
  },
  colorSecondary: {
    backgroundColor: theme.palette.secondary.main
  }
});
/**
 * @ignore - internal component.
 */

function TabIndicator(props) {
  const {
    classes,
    className,
    color
  } = props,
        other = _objectWithoutProperties(props, ["classes", "className", "color"]);

  return React.createElement("span", _extends({
    className: classNames(classes.root, classes[`color${capitalize(color)}`], className)
  }, other));
}

TabIndicator.propTypes = process.env.NODE_ENV !== "production" ? {
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
   * @ignore
   * The color of the tab indicator.
   */
  color: PropTypes.oneOf(['primary', 'secondary'])
} : {};
export default withStyles(styles)(TabIndicator);