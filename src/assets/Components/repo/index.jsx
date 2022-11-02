import React from 'react';

const Repo = (g) => {
    
    return (
        <a href={g.g.clone_url}>
            <div className="chiziq mt-5"></div>
            <div className="div">
                <a href={g.g.clone_url} className=''>{g.g.name}<button className="config" style={{marginLeft:"30px"}}>Public</button></a>
                <p className='text-dark'>{g.g.description}</p>
                <button className="config">config</button><button className="config">github-config</button>
                <p className='text-dark'>Updated 5 days ago</p>
                <button className='starBtn'>star</button>
                <div className="yashilsifatchiziq">
                </div>
            </div>
        </a>
    );
};

export default Repo;