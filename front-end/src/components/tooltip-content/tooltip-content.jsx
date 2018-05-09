import React from 'react';
import { node } from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './tooltip-content.css';

/**
 *  Tooltip content
 * */
const TooltipContent = ({ content }) => (
  <div styleName="content">
    {content}
  </div>
);

TooltipContent.propTypes = {
  content: node.isRequired
};

export default CSSModules(TooltipContent, styles);
