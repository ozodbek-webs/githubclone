import React from 'react';
import Followersal from './followers';

const Followers = () => {
    const follow = JSON.parse(localStorage.getItem("follow"))
    return (
        <div className='text-dark Wrapper '>
            {
                follow.map((elsgfbd,i)=><Followersal d={elsgfbd} key={i}/>
                )
            }
        </div>
    );
};

export default Followers;