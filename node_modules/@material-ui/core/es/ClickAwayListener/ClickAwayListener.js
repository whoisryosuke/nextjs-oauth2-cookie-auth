import _extends from "@babel/runtime/helpers/builtin/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/builtin/objectWithoutProperties";
// @inheritedComponent EventListener
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import EventListener from 'react-event-listener';
import ownerDocument from '../utils/ownerDocument';
/**
 * Listen for click events that occur somewhere in the document, outside of the element itself.
 * For instance, if you need to hide a menu when people click anywhere else on your page.
 */

class ClickAwayListener extends React.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.node = null, this.mounted = null, this.handleClickAway = event => {
      // Ignore events that have been `event.preventDefault()` marked.
      if (event.defaultPrevented) {
        return;
      } // IE11 support, which trigger the handleClickAway even after the unbind


      if (!this.mounted) {
        return;
      } // The child might render null.


      if (!this.node) {
        return;
      }

      const doc = ownerDocument(this.node);

      if (doc.documentElement && doc.documentElement.contains(event.target) && !this.node.contains(event.target)) {
        this.props.onClickAway(event);
      }
    }, _temp;
  }

  componentDidMount() {
    this.node = ReactDOM.findDOMNode(this);
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const _props = this.props,
          {
      children,
      mouseEvent,
      touchEvent,
      onClickAway
    } = _props,
          other = _objectWithoutProperties(_props, ["children", "mouseEvent", "touchEvent", "onClickAway"]);

    const listenerProps = {};

    if (mouseEvent !== false) {
      listenerProps[mouseEvent] = this.handleClickAway;
    }

    if (touchEvent !== false) {
      listenerProps[touchEvent] = this.handleClickAway;
    }

    return React.createElement(EventListener, _extends({
      target: "document"
    }, listenerProps, other), children);
  }

}

ClickAwayListener.propTypes = process.env.NODE_ENV !== "production" ? {
  children: PropTypes.node.isRequired,
  mouseEvent: PropTypes.oneOf(['onClick', 'onMouseDown', 'onMouseUp', false]),
  onClickAway: PropTypes.func.isRequired,
  touchEvent: PropTypes.oneOf(['onTouchStart', 'onTouchEnd', false])
} : {};
ClickAwayListener.defaultProps = {
  mouseEvent: 'onMouseUp',
  touchEvent: 'onTouchEnd'
};
export default ClickAwayListener;