import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, select } from '@storybook/addon-knobs/react';

import Icon, { iconsSet, colorName } from '../icon';

storiesOf('Icons list', module)
  .addDecorator(withKnobs)
  .add('Icons',
    withInfo(`
      
      ~~~js
        <Icon type={iconsSet.ANALYTICTOOLS} colorName={colorName.darkSkyBlue} />
      ~~~

    `)(() =>
      <div>
        <div><Icon type={iconsSet.ANALYTICTOOLS} /></div>
        <div><Icon type={iconsSet.APPS} /></div>
        <div><Icon type={iconsSet.DATAASSETS} /></div>
        <div><Icon type={iconsSet.DICTIONARY} /></div>
        <div><Icon type={iconsSet.HOME} /></div>
        <div><Icon type={iconsSet.KNOWLEDGEBASE} /></div>
        <div><Icon type={iconsSet.MEASURES} /></div>
        <div><Icon type={iconsSet.MENUCLOSED} /></div>
        <div><Icon type={iconsSet.MENUOPENED} /></div>
        <div><Icon type={iconsSet.NOTIFICATION} /></div>
        <div><Icon type={iconsSet.OVAL} /></div>
        <div><Icon type={iconsSet.PROJECTS} /></div>
        <div><Icon type={iconsSet.SOFTWARECODES} /></div>
        <div><Icon type={iconsSet.WRENCH} /></div>
      </div>
    ))
  .add('Icon',
    withInfo(`
      
      ~~~js
        <Icon type={iconsSet.ANALYTICTOOLS} colorName={colorName.darkSkyBlue} />
      ~~~

    `)(() =>
      <Icon
        type={iconsSet.ANALYTICTOOLS}
        colorName={
          select('Select icon colors', {
            [colorName.dark]: colorName.dark,
            [colorName.darkSkyBlue]: colorName.darkSkyBlue,
            [colorName.dustyGray]: colorName.dustyGray,
            [colorName.greyishBrown]: colorName.greyishBrown,
            [colorName.trinidadRed]: colorName.trinidadRed,
          }, colorName.darkSkyBlue, colorName.darkSkyBlue)
        } />
    ));