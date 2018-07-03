import React from 'react';
import PropTypes from 'prop-types';
import EventListener from 'react-event-listener';
import debounce from 'debounce'; // < 1kb payload overhead when lodash/debounce is > 3kb.

const styles = {
  width: '100px',
  height: '100px',
  position: 'absolute',
  top: '-10000px',
  overflow: 'scroll',
  msOverflowStyle: 'scrollbar'
};
/**
 * @ignore - internal component.
 * The component is originates from https://github.com/STORIS/react-scrollbar-size.
 * It has been moved into the core in order to minimize the bundle size.
 */

class ScrollbarSize extends React.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.handleResize = debounce(() => {
      const {
        onChange
      } = this.props;
      const prevHeight = this.scrollbarHeight;
      const prevWidth = this.scrollbarWidth;
      this.setMeasurements();

      if (prevHeight !== this.scrollbarHeight || prevWidth !== this.scrollbarWidth) {
        onChange({
          scrollbarHeight: this.scrollbarHeight,
          scrollbarWidth: this.scrollbarWidth
        });
      }
    }, 166), this.setMeasurements = () => {
      if (!this.node) {
        return;
      }

      this.scrollbarHeight = this.node.offsetHeight - this.node.clientHeight;
      this.scrollbarWidth = this.node.offsetWidth - this.node.clientWidth;
    }, _temp;
  }

  // Corresponds to 10 frames at 60 Hz.
  componentDidMount() {
    this.setMeasurements();
    this.props.onLoad({
      scrollbarHeight: this.scrollbarHeight,
      scrollbarWidth: this.scrollbarWidth
    });
  }

  componentWillUnmount() {
    this.handleResize.clear();
  }

  render() {
    const {
      onChange
    } = this.props;
    return React.createElement("div", null, onChange ? React.createElement(EventListener, {
      target: "window",
      onResize: this.handleResize
    }) : null, React.createElement("div", {
      style: styles,
      ref: node => {
        this.node = node;
      }
    }));
  }

}

ScrollbarSize.propTypes = process.env.NODE_ENV !== "production" ? {
  onChange: PropTypes.func.isRequired,
  onLoad: PropTypes.func.isRequired
} : {};
export default ScrollbarSize;