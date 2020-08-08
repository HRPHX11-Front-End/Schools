import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super()
    this.persistData = this.persistData.bind(this);
  }

  // api request to get nearby schools
  persistData() {
   axios.get('/schools')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  }

  render() {
    return (
      <div>
        <button onClick={() => {this.persistData()}}>Taco Tuesday</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));