import React from 'react';
import classNames from 'classnames';
import { arrayOf, element, bool } from 'prop-types';
import CSSModules from 'react-css-modules';

import styles from './AppContent.css';

/**
 * Application base content
 * @param children
 * @param fullContent
 * @returns {*}
 * @constructor
 */
const AppContent = ({ children, fullContent }) => {
  const modifiers = classNames({
    'app-content-full': fullContent
  });

  return <div styleName={modifiers || 'app-content'}>{children}</div>;
};

AppContent.propTypes = {
  /**
   * Set right padding from left.
   * Should depend from menu collapsed/expanded
   */
  fullContent: bool.isRequired,
  children: arrayOf(element).isRequired
};

export default CSSModules(AppContent, styles);
