import React, {useState} from 'react';
import './style.css'
import { NavLink } from 'react-router-dom';

const EnterUserName = () => {
    return (
        <div className='Wrapper'>
            <h1>
                Assalom aleykum iltimos Kirish uchun Tugmani bosing
            </h1>
            <NavLink to={"/"}>
            <button className="btn btn-danger mt-5" onClick={() => {
                req.getIn("ozodbek-webs"), req.getRepo("ozodbek-webs"), req.getFol("ozodbek-webs"), req.getFolow("ozodbek-webs")
            }}>Bosing</button>
            </NavLink>
        </div>
    );
};

export default EnterUserName;