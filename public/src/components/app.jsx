import React from 'react';
import Chart from './chart.jsx';
import Modal from '../modal/modal.jsx';
import css from '../styles.css';

import axios from 'axios';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      page: 'main',
      schoolDataLoaded: false,
      schoolData: [],
    }
    this.setPage = this.setPage.bind(this);
  }

  // api request to get nearby schools
  componentDidMount() {
    axios.get('/schools')
      .then(response => {
        console.log(response)
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

  setPage(option) {
    this.setState({
      page: option
    })
  }

  renderPage(data) {
    if (!this.state.schoolDataLoaded) {
      return (<div>Loading...</div>)
    } else if (this.state.page === 'main') {
      return (
        <div>
          <h2 className={css.rowTitle}>Schools</h2>
          <Chart setPage={this.setPage} schools={this.state.schoolData} />
        </div>
      )
    } else {
      return (<div>
        <h2 className={css.rowTitle}>Schools</h2>
        <Chart setPage={this.setPage} schools={this.state.schoolData} />
        <Modal setPage={this.setPage} school={this.state.page} />
      </div>)
    }
  }

  render() {
    const FlexBox = {
      display: 'flex',
      justifyContent: 'space-between',
      width: '500px',
      postion: 'relative'
    }

    return (
      <div style={FlexBox}>
        {this.renderPage()}
      </div>
    )
  }
}

export default App;