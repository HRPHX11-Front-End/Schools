import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import Modal from '../../modal/modal.jsx';
import Reviews from '../../modal/reviews.jsx';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Modal />', () => {
  let wrapper;

  beforeEach(() => {
    const school = {
      data: {
        _id: '5f3638c94466921b836c213d',
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
        name: 'Phyllis Leannon Academy',
        district: 'Filiberto Camp School District',
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
            network: 'Private',
            grades: '9 to 12',
            nearByOrServes: 'Serves this home'
          }
        ]
      },
    }
    wrapper = mount(<Modal school={school} />)
  })

  test('should have a Reviews component', () => {
    expect(wrapper.find(Reviews)).toHaveLength(1);
  })
})

