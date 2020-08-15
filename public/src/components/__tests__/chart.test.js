import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Chart from '../chart.jsx';
import Row from '../chart_row.jsx';

configure({ adapter: new Adapter() });

describe('<Chart />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Chart schools={[
      {
        _id: "5f3638c94466921b836c213d",
        rating: [
          {
            academicProgress: 1,
            lowIncome: 7,
            equity: 0,
            testScores: 6,
            average: 3,
            lastUpdated: "2019-02-19T01:03:33.444Z"
          }
        ],
        name: "Phyllis Leannon Academy",
        district: "Filiberto Camp School District",
        studentBody: 710,
        teacherBody: 443,
        studTeachRatio: 6,
        distance: 0,
        address: [
          {
            street: "2844 Paucek Garden",
            city: "West Jovani",
            state: "GA",
            zip: "86476"
          }
        ],
        details: [
          {
            network: "Private",
            grades: "9 to 12",
            nearByOrServes: "Serves this home"
          }
        ]
      }]} />)
  });

  it('should render an unordered list', () => {
    expect(wrapper.find('ul').exists()).toBeTruthy();
  })
  it('should render atleast one < Row /> component', () => {
    expect(wrapper.find(Row)).toHaveLength(1);
  })
})



