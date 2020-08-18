import React from 'react';
import StarBar from '../starBar.jsx';
import { FaStar } from 'react-icons/fa';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<StarBar />', () => {
  test('should have 5 FaStar components', () => {
    const wrapper = shallow(<StarBar />);
    expect(wrapper.find(FaStar)).toHaveLength(5);
  })
})