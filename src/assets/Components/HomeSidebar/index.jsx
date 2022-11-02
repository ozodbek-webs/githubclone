import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
    const malumot = JSON.parse(localStorage.getItem("malumot"))
    return (
        <div className='w-25 joylashuv ms-5 ps-55'>
            <img src="https://avatars.githubusercontent.com/u/109217362?v=4" className="avatar" alt="avatar" />
            <h3>{malumot.name}</h3>
            <h4 style={{ fontWeight: '200' }}>{malumot.login}</h4>
            <h6 className='mt-4'>{malumot.bio}</h6>
            <button className='editProfile mt-3'>Edit profile</button>
            <div className="d-flex mt-3">
                <NavLink to={"/follower"}>{`${malumot.followers} followers     .`}</NavLink>
                <NavLink to={"/following"}>{`.       ${malumot.following} following`}</NavLink>
            </div>
            <p>{malumot.company}</p>
            <p className='ptop'>{malumot.location}</p>
            <p className='ptop'>{malumot.blog}</p>
            <p className='ptop'>@{malumot.twitter_username}</p>
        </div>
    );
};

export default Home;