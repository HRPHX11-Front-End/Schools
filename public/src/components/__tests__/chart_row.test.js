import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ChartRow from '../chart_row.jsx';

import StudentBody from '../student_body.jsx';
import RatingIcon from '../rating_icon.jsx';
import UnderBar from '../underbar.jsx';
import DistanceMeter from '../distance_meter.jsx';
import StarBar from '../five_star.jsx';

configure({ adapter: new Adapter() });

describe('<ChartRow />', () => {
  // it('should render 1 instance of RatingIcon component', () => {
  //   const wrapper = shallow(<ChartRow />)
  //   expect(wrapper.find(RatingIcon)).toHaveLength(1);
  // })
  // it('should render 1 instance of UnderBar component', () => {
  //   const wrapper = shallow(<ChartRow />)
  //   expect(wrapper.find(UnderBar)).toHaveLength(1);
  // })
  // it('should render 1 instance of StudentBody component', () => {
  //   const wrapper = shallow(<ChartRow />)
  //   expect(wrapper.find(StudentBody)).toHaveLength(1);
  // })
  // it('should render 1 instance of StarBar component', () => {
  //   const wrapper = shallow(<ChartRow />)
  //   expect(wrapper.find(StarBar)).toHaveLength(1);
  // })
  // it('should render 1 instance of DistanceMeter component', () => {
  //   const wrapper = shallow(<ChartRow />)
  //   expect(wrapper.find(DistanceMeter)).toHaveLength(1);
  // })

})