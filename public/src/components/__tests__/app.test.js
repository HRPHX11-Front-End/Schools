import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../app.jsx';
import Chart from '../chart.jsx';
import Header from '../header.jsx';
import moxios from 'moxios';

configure({ adapter: new Adapter() });

describe('<App />', () => {

  let wrapper;
  let spyDidMount;

  beforeEach(() => {
    wrapper = shallow(<App />, { disableLifecycleMethods: true });
    // spyDidMount = jest.spyOn(App.prototype, "componentDidMount");
    moxios.install()
    moxios.stubRequest('/schools', {
      status: 200,
      response: {
        name: "Phyllis Leannon Academy",
        district: "Filiberto Camp School District"
      }
    })
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should display "loading..." if server response has not yet been received', () => {
    expect(wrapper.text()).toEqual('Loading...')
  })

  it('should have a header component', () => {
    wrapper.setState({ schoolDataLoaded: true })
    expect(wrapper.find(Header)).toHaveLength(1);
  })

  it('should render 1 instance of chart component', () => {
    wrapper.setState({ schoolDataLoaded: true })
    expect(wrapper.find(Chart)).toHaveLength(1);
  })

})





