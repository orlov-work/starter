import React from 'react';
import { configure, setAddon, addDecorator } from '@storybook/react';
import infoAddon from '@storybook/addon-info';
import backgrounds from "@storybook/addon-backgrounds";
import { setOptions } from '@storybook/addon-options';
import Container from './container';

addDecorator(
  backgrounds([
    { name: "EVIC0 Black theme", value: "#20273a" },
    { name: "EVIC0 White theme", value: "#fff", default: true  },
  ])
);

addDecorator(story => <Container story={story} />);
setAddon(infoAddon);

setOptions({
  name: 'EVICO Storybook',
  url: 'https://git.lohika.com/smuravetskiy/evico-2',
  downPanelInRight: true,
});

function loadStories() {
  // automatically import all files ending in *.story.js
  const req = require.context('../src', true, /\.story\.js$/);
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
