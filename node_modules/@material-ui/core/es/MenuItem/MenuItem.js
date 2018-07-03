import _extends from "@babel/runtime/helpers/builtin/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/builtin/objectWithoutProperties";
import _objectSpread from "@babel/runtime/helpers/builtin/objectSpread";
// @inheritedComponent ListItem
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
import ListItem from '../ListItem';
export const styles = theme => ({
  root: _objectSpread({}, theme.typography.subheading, {
    height: theme.spacing.unit * 3,
    boxSizing: 'content-box',
    width: 'auto',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    '&$selected': {
      backgroundColor: theme.palette.action.selected
    }
  }),
  selected: {}
});

function MenuItem(props) {
  const {
    classes,
    className,
    component,
    selected,
    role
  } = props,
        other = _objectWithoutProperties(props, ["classes", "className", "component", "selected", "role"]);

  return React.createElement(ListItem, _extends({
    button: true,
    role: role,
    tabIndex: -1,
    className: classNames(classes.root, {
      [classes.selected]: selected
    }, className),
    component: component
  }, other));
}

MenuItem.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Menu item contents.
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
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),

  /**
   * @ignore
   */
  role: PropTypes.string,

  /**
   * Use to apply selected styling.
   */
  selected: PropTypes.bool
} : {};
MenuItem.defaultProps = {
  component: 'li',
  role: 'menuitem',
  selected: false
};
export default withStyles(styles, {
  name: 'MuiMenuItem'
})(MenuItem);