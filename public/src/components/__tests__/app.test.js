import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../app.jsx';
import Chart from '../chart.jsx';
import moxios from 'moxios';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  let wrapper;

  // beforeAll(() => {
  //   global.fetch = jest.fn();
  // });

  beforeEach(() => {
    wrapper = shallow(<App />, { disableLifecycleMethods: true });
    moxios.install()
    moxios.stubRequest('/schools', {
      status: 200,
      response: [{
        schoolName1: "Eloise Okuneva Elementary School",
        schoolName2: "Rebecca Jakubowski Elementary School",
        schoolName3: "Willow Eichmann High School",
        schoolName4: "Madelyn Kuhn High School",
        schoolName5: "Candice Orn Academy"
      }]
    })
  });

  afterEach(() => {
    wrapper.unmount();
    moxios.uninstall();
  });
  it('should fetch a list of schools and display them', () {
    const wrapper = mount(<App />)
  })

  it('should render 1 instance of chart component after a successful api call', () => {
    const spyDidMount = jest.spyOn(App.prototype, "componentDidMount");
    const wrapper = shallow(<App />)
    wrapper.setState({ schoolDataLoaded: true })
    expect(wrapper.find(Chart)).toHaveLength(1);
  })

})