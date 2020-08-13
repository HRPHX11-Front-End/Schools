import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../app.jsx';
import Chart from '../chart.jsx';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  let wrapper;

  beforeAll(() => {
    global.fetch = jest.fn();
  });

  beforeEach(() => {
    wrapper = shallow(<App />, { disableLifecycleMethods: true });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should render 1 instance of chart component after a successful api call', () => {
    const spyDidMount = jest.spyOn(App.prototype, "componentDidMount");
    const wrapper = shallow(<App />)
    wrapper.setState({ schoolDataLoaded: true })
    expect(wrapper.find(Chart)).toHaveLength(1);
  })

})