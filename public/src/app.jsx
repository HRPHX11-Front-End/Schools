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
    if (this.state.schoolDataLoaded) {
      return (
        <div className={css.container}>
          <Chart schools={this.state.schoolData} />
        </div>
      )
    } else {
      return <div>loading...</div>;
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

/* <Modal /> */