import React from 'react';
import { string, number, func } from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './storybookExample.css';

// ToDo Remove it!
/**
 * Simple story for example
 * @constructor
 */
const StorybookExample = ({ onClickHandler, height, color }) => (
  <svg width="400" height="400" styleName="common">
    <g>
      <rect x="0" y="0" width="24" height={height} fill={color} onClick={() => onClickHandler && onClickHandler()} />
    </g>
  </svg>
);

StorybookExample.propTypes = {
  color: string.isRequired,
  height: number.isRequired,
  onClickHandler: func.isRequired
};

export const StorybookExampleWithStyles = StorybookExample;
export default CSSModules(StorybookExample, styles);
