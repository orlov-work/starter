import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withKnobs, number, select } from '@storybook/addon-knobs/react';

import StorybookExample from './storybookExample';

storiesOf('Name of story: Test component which illustrated storybook features', module)
  .addDecorator(withKnobs)
  .add('Story description',
    withInfo(`
      Some info about this story
      
      ~~~js
        <StorybookExample />
      ~~~

    `)(() =>
      <StorybookExample
        color={
          select('Select type of colors', {
            red: 'red',
            yellow: 'yellow',
            green: 'green',
            blue: 'blue',
          }, 'red', 'red')
        }
        height={number('Check height', 400)}
        onClickHandler={action('onClickHandler')} />
    ));