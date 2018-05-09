import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { SideMenu } from '../components/index';
import { toggleSideMenu, toggleSection } from '../../../actions/side-menu';

/**
 * @param state
 * @returns {{items, isCollapsed: *|boolean}}
 */
const mapStateToProps = state => ({
  items: state.sideMenu.items,
  isCollapsed: state.sideMenu.isCollapsed,
  selectedItem: state.sideMenu.selectedItem
});

const mapDispatchToProps = {
  toggleSideMenu,
  onItemClick: item => push(item.routePath),
  toggleSection
};

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
