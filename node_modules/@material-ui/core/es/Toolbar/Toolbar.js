import _extends from "@babel/runtime/helpers/builtin/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/builtin/objectWithoutProperties";
import _objectSpread from "@babel/runtime/helpers/builtin/objectSpread";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
export const styles = theme => ({
  root: _objectSpread({}, theme.mixins.toolbar, {
    position: 'relative',
    display: 'flex',
    alignItems: 'center'
  }),
  gutters: theme.mixins.gutters()
});

function Toolbar(props) {
  const {
    children,
    classes,
    className: classNameProp,
    disableGutters
  } = props,
        other = _objectWithoutProperties(props, ["children", "classes", "className", "disableGutters"]);

  const className = classNames(classes.root, {
    [classes.gutters]: !disableGutters
  }, classNameProp);
  return React.createElement("div", _extends({
    className: className
  }, other), children);
}

Toolbar.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Toolbar children, usually a mixture of `IconButton`, `Button` and `Typography`.
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
   * If `true`, disables gutter padding.
   */
  disableGutters: PropTypes.bool
} : {};
Toolbar.defaultProps = {
  disableGutters: false
};
export default withStyles(styles, {
  name: 'MuiToolbar'
})(Toolbar);