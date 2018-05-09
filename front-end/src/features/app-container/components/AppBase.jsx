import React from 'react';
import { arrayOf, element } from 'prop-types';

/**
 * @param children
 * @returns {*}
 * @constructor
 */
const AppBase = ({ children }) => <div stylename="app-container">{children}</div>;

AppBase.propTypes = {
  children: arrayOf(element).isRequired
};

export default AppBase;
