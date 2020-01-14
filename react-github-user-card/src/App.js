import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component {
  state = {
    user: []
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/jlong5795')
      .then(response => {
        console.log(response);
        this.setState({
          user: response
        });
      })
      .catch(error => {
        console.log('Error', error);
      });
  }

  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
