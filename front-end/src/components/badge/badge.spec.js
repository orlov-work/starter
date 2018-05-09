import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import Badge from './Badge';


test('Badge should render with label', async () => {
  const label = 'name';
  const wrapper = shallow(<Badge label={label} />);

  wrapper.text().should.to.be.equal(label);
});
