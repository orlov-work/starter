import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, number } from '@storybook/addon-knobs/react';

import Badge from './Badge';

storiesOf('Badge', module)
  .addDecorator(withKnobs)
  .add('badge component',
    withInfo(`
      
      ~~~js
        <Badge label={number('Badge number', 400)} />
      ~~~

    `)(() =>
      <Badge label={number('Badge number', 400)} />
    ));