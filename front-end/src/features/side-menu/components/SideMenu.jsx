import React from 'react';
import {
  array,
  object,
  bool,
  func
} from 'prop-types';
import className from 'classnames';
import CSSModules from 'react-css-modules';

import SideMenuHeader from './SideMenuHeader';

import styles from './SideMenu.css';
import Section from './SideMenuSection';

/**
 *
 * @param items
 * @param isCollapsed
 * @param toggleSideMenu
 * @param selectedItem
 * @param onItemClick
 * @param toggleSection
 * @returns {*}
 * @constructor
 */
const SideMenu = ({
  items,
  isCollapsed,
  toggleSideMenu,
  selectedItem,
  onItemClick,
  toggleSection
}) => {
  const modifiers = className({ collapsed: isCollapsed });

  return (
    <div styleName={modifiers || 'common'}>
      <SideMenuHeader
        isCollapsed={isCollapsed}
        onClick={toggleSideMenu} />

      <Section
        onSectionHeaderClick={toggleSection}
        items={items}
        isCollapsed={isCollapsed}
        selectedItem={selectedItem}
        onItemClick={onItemClick} />
    </div>
  );
};


SideMenu.propTypes = {
  items: array.isRequired,
  /**
   * flag that represent collapsed/expanded menu
   */
  isCollapsed: bool.isRequired,
  /**
   * on header icon click handler
   */
  toggleSideMenu: func.isRequired,
  /**
   * Chosen menu item
   */
  selectedItem: object,
  /**
   * On menu item click handler
   */
  onItemClick: func.isRequired,
  /**
   * Fn for close/open section
   */
  toggleSection: func.isRequired
};

SideMenu.defaultProps = {
  selectedItem: undefined
};

export default CSSModules(SideMenu, styles);
