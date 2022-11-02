import React from 'react';
import Followersal from '../Followers/followers';

const Folowing = () => {
    const follow = JSON.parse(localStorage.getItem("following"))
    return (
        <div className='Wrapper'>
            {
                follow.map((elsgfbd,i)=><Followersal d={elsgfbd} key={i}/>
                )
            }
        </div>
    );
};

export default Folowing;