import nanoId from 'nanoid';

import { iconsSet, colorName } from '../../../components/icon';

/**
 *
 * @param label
 * @param leftIconType
 * @param routePath
 * @param badge
 * @param items
 * @param iconColor
 * @returns {{id: id, label: *, leftIconType: *, badge: *, routePath: *, items: *, iconColor: *}}
 */
const createSideMenuItem = ({
  label,
  leftIconType,
  routePath,
  badge,
  items,
  iconColor
}) => {
  const item = {
    id: nanoId(),
    label,
    leftIconType,
    badge,
    routePath,
    items,
    iconColor
  };

  if (items) {
    item.isCollapsed = false;
  }

  return item;
};

const items = [
  createSideMenuItem({
    label: 'Home',
    routePath: '/users',
    leftIconType: iconsSet.HOME
  }),
  createSideMenuItem({
    label: 'Data Assets',
    leftIconType: iconsSet.DATAASSETS,
    badge: 200
  }),
  createSideMenuItem({
    label: 'Project',
    leftIconType: iconsSet.PROJECTS
  }),
  createSideMenuItem({
    label: 'Measures',
    leftIconType: iconsSet.MEASURES
  }),
  createSideMenuItem({
    label: 'Software Codes',
    leftIconType: iconsSet.SOFTWARECODES
  }),
  createSideMenuItem({
    label: 'Dictionary',
    leftIconType: iconsSet.DICTIONARY
  }),
  createSideMenuItem({
    label: 'Apps',
    leftIconType: iconsSet.APPS
  }),
  createSideMenuItem({
    label: 'Knowledgebase',
    leftIconType: iconsSet.KNOWLEDGEBASE
  }),
  createSideMenuItem({
    label: 'Admin Tools',
    leftIconType: iconsSet.WRENCH,
    items: [
      createSideMenuItem({
        label: 'User Management',
        leftIconType: iconsSet.OVAL,
        iconColor: colorName.darkSkyBlue
      }),
      createSideMenuItem({
        label: 'Catalog Management',
        leftIconType: iconsSet.OVAL,
        iconColor: colorName.trinidadRed
      }),
      createSideMenuItem({
        label: 'Roles',
        leftIconType: iconsSet.OVAL,
        iconColor: colorName.dustyGray
      }),
      createSideMenuItem({
        label: 'Tenant Management',
        leftIconType: iconsSet.OVAL,
        iconColor: colorName.dark
      })
    ]
  })
];

export default {
  selectedItem: undefined,
  isCollapsed: false,
  items
};
