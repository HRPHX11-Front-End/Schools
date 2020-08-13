import React from 'react';
import Chart from './chart.jsx';
import css from '../styles.css';

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
    const FlexBox = {
      display: 'flex',
      justifyContent: 'space-between',
      width: '500px',
      postion: 'relative'
    }

    if (this.state.schoolDataLoaded) {
      return (
        <div style={FlexBox}>
          <div>
            <h2 className={css.rowTitle}>Schools</h2>
            <Chart schools={this.state.schoolData} />
          </div>
        </div>
      )
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default App;