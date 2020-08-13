import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Chart from '../chart.jsx';
import Row from '../chart_row.jsx';

configure({ adapter: new Adapter() });

describe('<Chart />', () => {
  it('should render 1 instance of Row component', () => {
    const wrapper = shallow(<Chart />)
    wrapper.setProps({ schools: ['Tyler Johnson Academy'] });
    expect(wrapper.find(Row)).toHaveLength(1);
  })
})