import React from 'react';
import CSSModules from 'react-css-modules';
import { string, oneOfType, number } from 'prop-types';
import styles from './Badge.css';

/**
 * Badge base component
 * @param label
 * @returns {*}
 * @constructor
 */
const Badge = ({ label }) => <span styleName="badge">{label}</span>;

Badge.propTypes = {
  /**
   * Label of badge
   */
  label: oneOfType([
    string,
    number
  ]).isRequired
};


export default CSSModules(Badge, styles);
