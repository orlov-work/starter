import React from 'react';
import {
  string,
  number,
  bool,
  func,
  oneOf
} from 'prop-types';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';
import { values } from 'lodash';

import Icons, { iconsSet } from './Icons';

import styles from './Icon.css';


export const colorName = {
  dark: 'dark',
  darkSkyBlue: 'dark-sky-blue',
  boulderGray: 'boulder-gray',
  trinidadRed: 'trinidad-red',
  dustyGray: 'dusty-gray',
  greyishBrown: 'greyish-brown'
};

/**
 * Icon base component
 * @param type
 * @param size
 * @param pointer
 * @param colorName
 * @param onClick
 * @returns {*}
 * @constructor
 */
const Icon = ({
  type,
  size,
  pointer,
  colorName,
  onClick
}) => {
  const IconComponent = Icons[iconsSet[type]];

  const iStyle = classNames('common', {
    pointer,
    [colorName]: !!colorName
  });

  return (
    <i
      onClick={onClick}
      styleName={iStyle}
      style={{
        fontSize: `${size}px`
      }}>
      <IconComponent />
    </i>
  );
};

Icon.defaultProps = {
  size: 24,
  colorName: 'dark',
  pointer: false,
  onClick: undefined
};

Icon.propTypes = {
  type: string.isRequired,
  /**
   * Icon size
   */
  size: number,
  /**
   * Icon color
   */
  colorName: oneOf(values(colorName)),
  /**
   * should be pointer or not
   */
  pointer: bool,
  /**
   * Icon click handler
   */
  onClick: func
};

export default CSSModules(Icon, styles, { allowMultiple: true });
