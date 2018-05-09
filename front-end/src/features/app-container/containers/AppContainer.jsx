import React, { Component } from 'react';
import { Switch, withRouter } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getIdentity } from '../../../actions/identity';

import { SideMenuContainer } from '../../side-menu';
import AppBase from '../components/AppBase';
import AppContent from '../components/AppContent';

import { mainRoutes, generateRoutes } from '../../../routes';

/**
 * Application base container
 * @param fullContent
 * @returns {*}
 * @constructor
 */
class AppContainer extends Component {
  /**
   * Lifecircle method.
   */
  componentWillMount() {
    this.props.getIdentity();
  }

  /**
   * Lifecircle method.
   */
  render() {
    const { identity, fullContent } = this.props;

    return (
      <AppBase>
        <SideMenuContainer />
        <AppContent fullContent={fullContent}>
          {identity && (
            <div>Hello, {`${identity.firstName} ${identity.lastName}`}</div>
          )}
          <Switch >
            {generateRoutes(mainRoutes)}
          </Switch>
        </AppContent>
      </AppBase>
    );
  }
}

AppContainer.defaultProps = {
  identity: null
};


AppContainer.propTypes = {
  /**
   * padding from left. Depend from menu collapsed/expanded
   */
  fullContent: PropTypes.bool.isRequired,

  getIdentity: PropTypes.func.isRequired,

  identity: PropTypes.object
};

/**
 * @param state
 * @returns {{fullContent: boolean}}
 */
state = {
  users: {

  },
  fullContent: {

  },
  identity: {

  }
}
const mapStateToProps = state => ({
  fullContent: !state.sideMenu.isCollapsed,
  identity: state.identity,
  isIdentityFetching: state.identity.isFetching
});

const mapDispatchToProps = {
  getIdentity
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppContainer));
