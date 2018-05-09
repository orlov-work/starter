import React from 'react';
import { shallow, mount } from 'enzyme';
import test from 'ava';
import { JSDOM } from 'jsdom';
import Portal from './portal';

const dom = new JSDOM('<!DOCTYPE html><html><head></head><body></body></html>');

global.window = dom.window;
global.document = dom.window.document;

const element = <p>Hello</p>;

test('Portal should not be in current react tree', () => {
  const wrapper = shallow(<Portal>{element}</Portal>);
  wrapper.find(element).length.should.to.be.equal(0);
  wrapper.unmount();
});

test('Portal should be rendered in a new react tree', () => {
  const wrapper = mount(<Portal>{element}</Portal>);
  document.documentElement.innerHTML.should.to.match(/Hello/);
  wrapper.unmount();
});

test('Portal should update props', () => {
  const wrapper = mount(<Portal>{element}</Portal>);
  document.documentElement.innerHTML.should.to.match(/Hello/);
  const prop = <p>Hi</p>;
  wrapper.setProps({ children: prop });
  document.documentElement.innerHTML.should.to.match(/Hi/);
  wrapper.unmount();
});

test('Portal should unmount', () => {
  const wrapper = mount(<Portal>{element}</Portal>);
  document.documentElement.innerHTML.should.to.match(/Hello/);
  wrapper.unmount();
  document.documentElement.innerHTML.should.to.not.match(/Hello/);
});

