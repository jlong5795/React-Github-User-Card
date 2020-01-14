import React from 'react';

const UserCard = () => {
    return (
        <div class="card">
            <img src={props.avatar_url} />
            <div class="card-info">
                <h3 class="name">{props.name}</h3>
                <p class="username">{props.login}</p>
                <p>Location: {props.location}</p>
                <p>Profile:  
                <a href={`${props.html_url}`}>{props.html_url}</a>
                </p>
                <p>Followers: {props.follwers}</p>
                <p>Following: {props.following}</p>
                <p>Bio: {props.bio}</p>
            </div>
        </div>
    )
}

export default UserCard;