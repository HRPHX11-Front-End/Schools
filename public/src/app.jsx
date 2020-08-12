import React from 'react';
import ReactDOM from 'react-dom';
import Chart from './components/chart.jsx';
import Modal from './modal/modal.jsx';
import css from './styles.css'

import axios from 'axios';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      schoolDataLoaded: false,
      schoolData: []
    }
    this.openModal = this.openModal.bind(this);
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

openModal() {

}

  render() {
    const FlexBox = {
      display:'flex',
      justifyContent: 'space-between',
      width: '500px',
      postion: 'relative'
    }

    // className={css.container}
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
      return <div>loading...</div>;
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

/* <Modal /> */