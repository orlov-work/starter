import React from 'react';
import {
  string,
  bool,
  func,
  number,
  oneOfType
} from 'prop-types';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';

import Icon from '../../../../../components/icon';
import Badge from '../../../../../components/badge';

import styles from './SideMenuItem.css';


/**
 * @param label
 * @param leftIconType
 * @param isHalfContent
 * @param isSelected
 * @param badge
 * @param isSmallIcon
 * @param iconColor
 * @param onClick
 * @returns {*}
 * @constructor
 */
const SideMenuItem = ({
  label,
  leftIconType,
  isHalfContent,
  isSelected,
  badge,
  isSmallIcon,
  iconColor,
  onClick
}) => {
  const contentStyle = classNames('content', {
    'content--hide': isHalfContent,
    'content--dark-sky-blue': isSelected
  });

  const itemStyles = classNames('item', {
    selected: isSelected
  });

  return (
    <li styleName={itemStyles}>
      <a onClick={onClick} styleName="content-container">

        <div styleName="left-content">
          <Icon
            size={isSmallIcon ? 12 : 24}
            colorName={iconColor}
            type={leftIconType} />
        </div>

        <div styleName={contentStyle}>
          <span styleName="label">
            {label}
          </span>

          <div styleName="right-content">
            { badge && <Badge styles={styles} label={badge} /> }
          </div>
        </div>
      </a>
    </li>
  );
};

SideMenuItem.propTypes = {
  /**
   * label of menu item
   */
  label: string.isRequired,
  /**
   * Badge count. if property absent Budget will be not rendered
   */
  badge: oneOfType([string, number]),
  /**
   * Type of left icon
   */
  leftIconType: string.isRequired,
  /**
   * flag for highlighting selected item
   */
  isSelected: bool,
  /**
   * flag for displaying half content when menu is collapsed
   */
  isHalfContent: bool,
  /**
   * on item click handler
   */
  onClick: func.isRequired,
  /**
   * Param for controlling icon size
   */
  isSmallIcon: bool,
  /**
   * Left icon color
   */
  iconColor: string.isRequired
};

SideMenuItem.defaultProps = {
  isHalfContent: false,
  isSelected: false,
  badge: undefined,
  isSmallIcon: false
};

export default CSSModules(SideMenuItem, styles, { allowMultiple: true });
