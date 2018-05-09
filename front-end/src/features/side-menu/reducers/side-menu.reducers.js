import { LOCATION_CHANGE } from 'react-router-redux';

import { TOGGLE_SIDE_MENU, TOGGLE_SECTION } from '.././../../constants/actions';
import initialState from './initial-state';

/**
 * Check if item path equals to passed path
 * @param pathname
 * @returns {function(*): boolean}
 */
const containsPath = pathname => item => item.routePath === pathname;

/**
 * Reducer for handling side menu events and routing changes
 * @param state
 * @param action
 * @returns {{selectedItem, isCollapsed, items}}
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIDE_MENU: {
      return { ...state, isCollapsed: !state.isCollapsed };
    }
    case TOGGLE_SECTION: {
      const { item } = action;
      const { items } = state;

      const toggledItemIndex = items.indexOf(item);
      const newItems = [...items];

      newItems[toggledItemIndex] = {
        ...item,
        isCollapsed: item.isCollapsed ? false : !item.isCollapsed
      };

      return {
        ...state,
        items: newItems
      };
    }
    case LOCATION_CHANGE: {
      const { items } = state;
      const { payload } = action;
      const { pathname } = payload;

      let selectedItem = items.find(containsPath(pathname));

      if (!selectedItem) {
        selectedItem = items
          .filter(item => item.items)
          .reduce((accum, item) => [...accum, ...item.items], [])
          .find(containsPath(pathname));
      }

      return { ...state, selectedItem };
    }
    default:
      return state;
  }
};
