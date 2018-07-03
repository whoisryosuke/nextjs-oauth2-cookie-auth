import _extends from "@babel/runtime/helpers/builtin/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/builtin/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
const styles = {
  root: {
    display: 'table-header-group'
  }
};

class TableHead extends React.Component {
  getChildContext() {
    // eslint-disable-line class-methods-use-this
    return {
      table: {
        head: true
      }
    };
  }

  render() {
    const _props = this.props,
          {
      classes,
      className,
      component: Component
    } = _props,
          other = _objectWithoutProperties(_props, ["classes", "className", "component"]);

    return React.createElement(Component, _extends({
      className: classNames(classes.root, className)
    }, other));
  }

}

TableHead.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The content of the component, normally `TableRow`.
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
  className: PropTypes.string,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object])
} : {};
TableHead.defaultProps = {
  component: 'thead'
};
TableHead.childContextTypes = {
  table: PropTypes.object
};
export default withStyles(styles, {
  name: 'MuiTableHead'
})(TableHead);