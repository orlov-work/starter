import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import Portal from './portal';
import positions from '../../utils/position';

import styles from './tooltip.css';

const arrowSize = 6;

/**
 * class Tooltip
 */
class Tooltip extends Component {
  static propTypes = {
    direction: PropTypes.string,
    children: PropTypes.node,
    content: PropTypes.node.isRequired,
    eventOff: PropTypes.string,
    eventOn: PropTypes.string,
    eventToggle: PropTypes.string,
    useHover: PropTypes.bool,
    isOpen: PropTypes.bool
  };

  static defaultProps = {
    direction: 'up',
    children: null,
    eventOff: undefined,
    eventOn: undefined,
    eventToggle: undefined,
    useHover: true,
    isOpen: undefined
  };

  /**
   * constructor
   */
  constructor() {
    super();

    this.state = { showTip: false, ignoreShow: false };

    this.showTip = this.showTip.bind(this);
    this.hideTip = this.hideTip.bind(this);
    this.cancelTip = this.cancelTip.bind(this);
    this.toggleTip = this.toggleTip.bind(this);
    this.startHover = this.startHover.bind(this);
  }

  /**
   * toggleTip
   */
  toggleTip() {
    this.setState({ showTip: !this.state.showTip });
  }

  /**
   * showTip
   */
  showTip() {
    this.setState({ showTip: true });
  }

  /**
   * hideTip
   */
  hideTip() {
    this.setState({ showTip: false });
  }

  /**
   * startHover
   */
  startHover() {
    if (!this.state.ignoreShow) {
      this.setState({ showTip: true });
    }
  }

  /**
   * cancelTip
   */
  cancelTip() {
    this.setState({ ignoreShow: false });
  }

  /**
   * render
   * @returns {*}
   */
  render() {
    const {
      direction,
      children,
      content,
      eventOn,
      eventOff,
      eventToggle,
      useHover,
      isOpen
    } = this.props;

    const showTip = (typeof isOpen === 'undefined') ? this.state.showTip : isOpen;
    const currentPositions = positions(
      direction,
      this.tip,
      this.target,
      { ...this.state, showTip },
      arrowSize
    );

    const tipStyles = {
      ...currentPositions.tip
    };

    const arrowStyles = {
      ...currentPositions.arrow
    };

    const props = {};

    // event handling
    if (eventOff) {
      props[eventOff] = this.hideTip;
    }

    if (eventOn) {
      props[eventOn] = this.showTip;
    }

    if (eventToggle) {
      props[eventToggle] = this.toggleTip;
    } else if (useHover) {
      props.onMouseOver = this.startHover;
      props.onMouseOut = this.hideTip;
      props.onTouchStart = this.cancelTip;
    }

    return (
      <div
        ref={target => { this.target = target; }}
        styleName="tooltip-wrapper"
        {...props}>
        {children}
        <Portal>
          <div>
            <span styleName="tooltip" style={tipStyles} ref={tip => { this.tip = tip; }}>
              {content}
            </span>
            <span styleName="tooltip-arrow" style={arrowStyles} />
          </div>
        </Portal>
      </div>
    );
  }
}

export default CSSModules(Tooltip, styles);
