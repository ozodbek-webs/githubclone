import React from 'react';

const Followersal = ({d}) => {
    return (
        <>
            <a href={d.html_url}>
            <div className="d-flex w-75 justify-content-between">
                <div className="d-flex w-100">
                <img src={d.avatar_url} style={{width:"60px",height:"65px"}} alt="" className='rounded-circle border' />
                <div className="div ms-5">
                    <div className="d-flex">
                    <h4 className='d-inline'>{d.login}</h4>
                    </div>
                    <p className='d-block'>location : uzb</p>
                </div>
                </div>
                <button className='h-50 rounded msdf'>Unfollow</button>
            </div>
            <div className="chiziq mt-5 w-80"></div>
            </a>
        </>
    );
};

export default Followersal;