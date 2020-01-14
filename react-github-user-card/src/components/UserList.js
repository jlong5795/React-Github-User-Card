import React from 'react';
import axios from 'axios';
import UserCard from './UserCard';

class UserList extends React.Component {
    state = {
        followers: [],
        followerProfiles: []
    }

    componentDidMount() {
        axios
            .get('https://api.github.com/users/jlong5795/followers')
            .then(response => {
                console.log('Followers load', response.data);
                this.setState({
                followers: response.data
                });

                this.state.followers.map(item => {
                axios
                    .get(`https://api.github.com/users/${item.login}`)
                    .then(response => {
                        console.log('What Should be follower profiles', response)
                        this.setState({
                            followerProfiles: [...this.state.followerProfiles, response]
                        })
                    })
                })
            })
            .catch(error => {
                console.log('Error', error);
            });
    }

    render() {
        return(
            <div className='follower-list'>
               {
                   console.log(this.state.followerProfiles),
                   this.state.followerProfiles.map(each => (
                      <UserCard 
                        avatar_url={each.data.avatar_url}
                        name={each.data.name}
                        login={each.data.login}
                        location={each.data.location}
                        html_url={each.data.html_url}
                        followers={each.data.followers}
                        following={each.data.following}
                        bio={each.data.bio}
                    /> 
                   ))
               }
            </div>
        )
    }

}

export default UserList;