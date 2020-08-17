import React from 'react';
import Header from './header.jsx';
import DropDown from './flyout.jsx';
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
          <div className={css.MainFlex}>
            <Header />
            <DropDown />
            <Chart setPage={this.setPage} schools={this.state.schoolData} />
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div className={css.MainFlex}>
            <Header className={css.header} />
            <DropDown />
            <Chart setPage={this.setPage} schools={this.state.schoolData} />
          </div>
          <Modal setPage={this.setPage} school={this.state.page} />
        </div>)
    }
  }

  render() {
    return (
      <div>
        {this.renderPage()}
      </div>
    )
  }
}

export default App;