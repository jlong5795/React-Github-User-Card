import React from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import UserList from './components/UserList';

import './App.css';

class App extends React.Component {
  state = {
    user: []
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/jlong5795')
      .then(response => {
        console.log('Initial load', response.data);
        this.setState({
          user: response.data
        });
      })
      .catch(error => {
        console.log('Error', error);
      });
  }

  fetchFollowers = e => {
    e.preventDefault();
    axios
      .get('https://api.github.com/users/jlong5795/followers')
      .then(response => {
        console.log(response.data);
        this.setState({
          user: response.data
        });
      })
      .catch(error => {
        console.log('Error', error);
      });
  }

  render() {
    return (
      <div className="App container">
        
          <UserCard 
            avatar_url={this.state.user.avatar_url}
            name={this.state.user.name}
            login={this.state.user.login}
            location={this.state.user.location}
            html_url={this.state.user.html_url}
            followers={this.state.user.followers}
            following={this.state.user.following}
            bio={this.state.user.bio}
          />
        
        <UserList />
        
      </div>
    );
  }
}

export default App;
