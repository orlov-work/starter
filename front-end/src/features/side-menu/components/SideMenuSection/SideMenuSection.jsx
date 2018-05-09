import React from 'react';
import {
  bool,
  func,
  array,
  object,
  oneOf
} from 'prop-types';
import CSSModules from 'react-css-modules';
import { values } from 'lodash';

import { SideMenuItem, SideMenuSectionItem } from '../SideMenuItem';
import { colorName } from '../../../../components/icon';

import styles from './SideMenuSection.css';

/**
 * get specific icon color
 * @param sectionType
 * @param isSelected
 * @param item
 * @returns {string}
 */
const getIconColor = (sectionType, isSelected, item) => {
  if (sectionType === 'sub') {
    return item.iconColor;
  } else if (isSelected) {
    return colorName.darkSkyBlue;
  }

  return colorName.boulderGray;
};

/**
 * Flags that represent section types
 * for not if we pass SUB type icons at SideMenuItem will be small
 *
 * @type {{SUB: string, TOP: string}}
 */
export const SECTION_TYPES = {
  SUB: 'sub',
  TOP: 'top'
};

/**
 * Element that represent SideMenuSection
 * @param items
 * @param isCollapsed
 * @param selectedItem
 * @param onItemClick
 * @param sectionType
 * @param onSectionHeaderClick
 * @returns {*}
 * @constructor
 */
const SideMenuSection = ({
  items,
  isCollapsed,
  selectedItem,
  onItemClick,
  sectionType,
  onSectionHeaderClick
}) => (
  <ul styleName="items">
    { items.map(item => (!item.items
      ? <SideMenuItem
        key={item.id}
        label={item.label}
        leftIconType={item.leftIconType}
        badge={item.badge}
        isSmallIcon={sectionType === SECTION_TYPES.SUB}
        iconColor={getIconColor(sectionType, item === selectedItem, item)}
        isSelected={item === selectedItem}
        onClick={() => onItemClick(item)}
        isHalfContent={isCollapsed} />
      : <SideMenuSectionItem
        key={item.id}
        label={item.label}
        leftIconType={item.leftIconType}
        items={item.items}
        isSectionCollapsed={item.isCollapsed}
        isCollapsed={isCollapsed}
        selectedItem={selectedItem}
        onSectionHeaderClick={() => onSectionHeaderClick && onSectionHeaderClick(item)}
        onClick={onItemClick} />))}
  </ul>
);

SideMenuSection.propTypes = {
  /**
   * Section items
   */
  items: array.isRequired,
  /**
   * Flag for collapsed/expanded menu
   */
  isCollapsed: bool.isRequired,
  /**
   * Chosen menu item
   */
  selectedItem: object.isRequired,
  /**
   * On menu item click handler
   */
  onItemClick: func.isRequired,
  /**
   * type of section
   */
  sectionType: oneOf(values(SECTION_TYPES)),
  /**
   * Fn for collapse/expand section
   */
  onSectionHeaderClick: func
};

SideMenuSection.defaultProps = {
  sectionType: 'top',
  onSectionHeaderClick: undefined
};

export default CSSModules(SideMenuSection, styles);
