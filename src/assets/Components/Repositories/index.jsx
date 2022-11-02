import React from 'react';
import Repo from '../repo';
import './style.css'

const Repositories = () => {
    
    const repo = JSON.parse(localStorage.getItem("repo"));
    return (
        <div className='Wrapper'>

            <div className="sort d-flex">
                <input type="text" className='form-control w-7' />
                <select className='form-control w-5 ms-2'>
                    <option value="1">Type</option>
                </select>
                <select className='form-control w-5 ms-2'>
                    <option value="1">Language</option>
                </select>
                <select className='form-control w-5 ms-2'>
                    <option value="1">Sort</option>
                </select>
                <a href="https://github.com/new"><button className="btn btn-success ms-5">New</button></a>
            </div>
            
            {
                repo.map((a,i)=><Repo g={a} key={i}/>)
            }

        </div >
    );
};

export default Repositories;