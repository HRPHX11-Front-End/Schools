import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import Modal from '../../modal/modal.jsx';
import Reviews from '../../modal/reviews.jsx';
import StarBar from '../five_star.jsx';
import UnderBar from '../underbar.jsx';
import RatingIcon from '../rating_icon.jsx';
import GreatSchoolRating from '../../modal/GreatSchoolRating.jsx';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('<Modal />', () => {
  let wrapper;

  beforeEach(() => {
    const school = {
      _id: '5f3638c94466921b836c213d',
      reviews: [[], []],
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
      data: {
        address: [
          {
            street: "2844 Paucek Garden",
            city: "West Jovani",
            state: "GA",
            zip: "86476"
          }
        ],
        rating: [[], []],
      },
      details: [
        {
          network: 'Private',
          grades: '9 to 12',
          nearByOrServes: 'Serves this home'
        }
      ]
    };

    // shallow remder modal
    wrapper = shallow(<Modal school={school} />)
  })

  test('should have a Reviews component', () => {
    // see if the Modal has a reviews component inside
    expect(wrapper.find(Reviews)).toHaveLength(1);
  })

  test('should have a StarBar component', () => {
    // see if the Modal has a reviews component inside
    expect(wrapper.find(StarBar)).toHaveLength(1);
  })
  test('should have a UnderBar component', () => {
    // see if the Modal has a reviews component inside
    expect(wrapper.find(UnderBar)).toHaveLength(1);
  })
  test('should have a RatingIcon component', () => {
    // see if the Modal has a reviews component inside
    expect(wrapper.find(RatingIcon)).toHaveLength(1);
  })
  test('should have a GreatSchoolRating component', () => {
    // see if the Modal has a reviews component inside
    expect(wrapper.find(GreatSchoolRating)).toHaveLength(1);
  })
})

