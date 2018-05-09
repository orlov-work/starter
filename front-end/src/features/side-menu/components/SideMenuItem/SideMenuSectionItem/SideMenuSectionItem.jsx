import React from 'react';
import {
  string,
  func,
  array, bool, object
} from 'prop-types';
import CSSModules from 'react-css-modules';

import Icon, { iconsSet, colorName } from '../../../../../components/icon';
import Section, { SECTION_TYPES } from '../../SideMenuSection';

import styles from './SideMenuSectionItem.css';

/**
 * check if section contains selected item or not
 * @param items
 * @param selectedItem
 * @returns {boolean}
 */
const isContainsSelectedItem = (items, selectedItem) => !!items.find(item => item === selectedItem);

/**
 *
 * @param label
 * @param leftIconType
 * @param onClick
 * @param isCollapsed
 * @param selectedItem
 * @param items
 * @param onSectionHeaderClick
 * @param isSectionCollapsed
 * @returns {*}
 * @constructor
 */
const SideMenuSectionItem = ({
  label,
  leftIconType,
  onClick,
  isCollapsed,
  selectedItem,
  items,
  onSectionHeaderClick,
  isSectionCollapsed
}) => (
  <li styleName="item">
    <a
      onClick={onSectionHeaderClick}
      styleName="content-container">

      <div styleName="left-content">
        <Icon colorName={colorName.boulderGray} type={leftIconType} />
      </div>

      <div styleName={isCollapsed ? 'content--hide' : 'content'}>
        <span styleName={isContainsSelectedItem(items, selectedItem) ? 'label--bold' : 'label'}>
          {label}
        </span>

        <div styleName={!isSectionCollapsed ? 'right-arrow--down' : 'right-content'}>
          <Icon type={iconsSet.ARROWRIGHT} />
        </div>
      </div>
    </a>

    {!isSectionCollapsed && <Section
      sectionType={SECTION_TYPES.SUB}
      items={items}
      isCollapsed={isCollapsed}
      selectedItem={selectedItem}
      onItemClick={onClick} />}
  </li>
);


SideMenuSectionItem.propTypes = {
  items: array.isRequired,
  /**
   * label of menu item
   */
  label: string.isRequired,
  /**
   * Type of left icon
   */
  leftIconType: string.isRequired,
  /**
   * on item click handler
   */
  onClick: func.isRequired,
  /**
   * flag that represent collapsed/expanded menu
   */
  isCollapsed: bool.isRequired,
  /**
   * flag that represent collapsed/expanded section
   */
  isSectionCollapsed: bool.isRequired,
  /**
   * Fn for handling collapse/expand section
   */
  onSectionHeaderClick: func.isRequired,
  /**
   * Chosen menu item
   */
  selectedItem: object
};

SideMenuSectionItem.defaultProps = {
  selectedItem: undefined
};

export default CSSModules(SideMenuSectionItem, styles);
