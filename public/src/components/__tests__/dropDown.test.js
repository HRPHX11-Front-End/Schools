import React from 'react';
import DropDown from '../dropDown.jsx';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<DropDown />', () => {
  test('should have a toggle with the caption "Great Schools Rating"', () => {
    const wrapper = shallow(<DropDown />);
    expect(wrapper.find('p').text()).toEqual('Great Schools Rating');
  })
})
