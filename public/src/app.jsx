import React from 'react';
import ReactDOM from 'react-dom';
import Chart from './chart.jsx'
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      schoolDataLoaded: false,
      schoolData: []
    }
  }

  // api request to get nearby schools
  componentDidMount() {
    axios.get('/schools')
      .then(response => {
        // handle success
        this.setState({
          schoolDataLoaded: true,
          schoolData: response.data,
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    if (this.state.schoolDataLoaded) {
      return (
        <div>
          <h1>Test</h1>
          <Chart schools={this.state.schoolData} />
        </div>
      )
    } else {
      return null;
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));