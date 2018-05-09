import React from 'react';
import { mount } from 'enzyme';
import test from 'ava';
import Tooltip from '../tooltip';
import TooltipContent from '../tooltip-content';

test('Tooltip should render', () => {
  const wrapper = mount(<Tooltip
    content={<TooltipContent content="Test message" />}
    direction="left"
    useDefaultStyles />);
  document.documentElement.innerHTML.should.to.match(/Test message/);
  wrapper.unmount();
});

test('Tooltip should update props', () => {
  const wrapper = mount(<Tooltip
    content={<TooltipContent content="Test message" />}
    direction="left"
    useDefaultStyles />);
  document.documentElement.innerHTML.should.to.match(/Test message/);
  wrapper.setProps({ content: 'Hi' });
  document.documentElement.innerHTML.should.to.match(/Hi/);
  wrapper.unmount();
});

test('Tooltip should unmount', () => {
  const wrapper = mount(<Tooltip
    content={<TooltipContent content="Test message" />}
    direction="left"
    useDefaultStyles />);
  document.documentElement.innerHTML.should.to.match(/Test message/);
  wrapper.unmount();
  document.documentElement.innerHTML.should.not.to.match(/Test message/);
});

