import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';

import SideMenu from './SideMenu';
import initialState from '../reducers/initial-state';

storiesOf('Side menu', module)
  .addDecorator(withKnobs)
  .add('Side menu',
    withInfo(`
      Side menu with fake data
      
      ~~~js
        <SideMenu
            {...initialState}
            isCollapsed={boolean('Menu toogle', true)}
            toggleSideMenu={action('toggleSideMenu')}
            onItemClick={action('onItemClick')}
        />
      ~~~

    `)(() =>
      <SideMenu
        {...initialState}
        isCollapsed={boolean('Menu toogle', true)}
        toggleSideMenu={action('toggleSideMenu')}
        onItemClick={action('onItemClick')}
      />
    ));