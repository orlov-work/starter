import { TOGGLE_SIDE_MENU, TOGGLE_SECTION } from '../constants/actions';

/**
 * Action for toggling side menu
 * @returns {{type: string}}
 */
export const toggleSideMenu = () => ({
  type: TOGGLE_SIDE_MENU
});

/**
 * Action for toggling section is side menu
 * @returns {{}}
 */
export const toggleSection = item => ({
  type: TOGGLE_SECTION,
  item
});
