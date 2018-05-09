import { Component } from 'react';
import ReactDom from 'react-dom';
import { node } from 'prop-types';

const useCreatePortal = typeof ReactDom.createPortal === 'function';

/**
 *  class Portal
 * */
class Portal extends Component {
  static propTypes = {
    children: node
  };

  static defaultProps = {
    children: null
  };

  /** componentWillMount */
  componentWillMount() {
    this.popup = document.createElement('div');
    document.body.appendChild(this.popup);
    this.renderLayer();
  }

  /** componentDidUpdate */
  componentDidUpdate() {
    this.renderLayer();
  }

  /** componentWillUnmount */
  componentWillUnmount() {
    if (!useCreatePortal) {
      ReactDom.unmountComponentAtNode(this.popup);
    }
    document.body.removeChild(this.popup);
  }

  /**
   * renderLayer
   */
  renderLayer() {
    if (!useCreatePortal) {
      ReactDom.unstable_renderSubtreeIntoContainer(this, this.props.children, this.popup);
    }
  }

  /** render */
  render() {
    if (useCreatePortal) {
      return ReactDom.createPortal(this.props.children, this.popup);
    }
    return null;
  }
}

export default Portal;
