import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';

import Row from '../chart_row.jsx';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Modal />', () => {
  it('should render 1 < Modal /> when instance of Row is clicked', () => {
    const wrapper = shallow(<Row />)
    wrapper.simulate('click')
    expect(wrapper.find('li')).toHaveLength(1);
  })
})
