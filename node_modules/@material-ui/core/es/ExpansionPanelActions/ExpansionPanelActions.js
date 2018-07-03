import _extends from "@babel/runtime/helpers/builtin/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/builtin/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
import { cloneChildrenWithClassName } from '../utils/reactHelpers';
import '../Button'; // So we don't have any override priority issue.

export const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit}px`
  },
  action: {
    marginLeft: theme.spacing.unit
  }
});

function ExpansionPanelActions(props) {
  const {
    children,
    classes,
    className
  } = props,
        other = _objectWithoutProperties(props, ["children", "classes", "className"]);

  return React.createElement("div", _extends({
    className: classNames(classes.root, className)
  }, other), cloneChildrenWithClassName(children, classes.action));
}

ExpansionPanelActions.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The content of the component.
   */
  children: PropTypes.node.isRequired,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object.isRequired,

  /**
   * @ignore
   */
  className: PropTypes.string
} : {};
export default withStyles(styles, {
  name: 'MuiExpansionPanelActions'
})(ExpansionPanelActions);