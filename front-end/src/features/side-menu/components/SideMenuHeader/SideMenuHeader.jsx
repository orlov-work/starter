import React from 'react';
import { bool, func } from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './SideMenuHeader.css';
import Icon, { iconsSet } from '../../../../components/icon/index';


/**
 * @param onClick
 * @param isCollapsed
 * @returns {*}
 * @constructor
 */
const SideMenuHeader = ({ onClick, isCollapsed }) => (
  <div styleName="common">
    <Icon
      onClick={onClick}
      size={18}
      type={isCollapsed ? iconsSet.MENUCLOSED : iconsSet.MENUOPENED}
      pointer />
  </div>
);

SideMenuHeader.propTypes = {
  /**
   * On click handler
   */
  onClick: func.isRequired,
  /**
   * flag for collapsed/expanded menu
   */
  isCollapsed: bool.isRequired
};

export default CSSModules(SideMenuHeader, styles);
