import React from 'react';
import githubIcon from '../../../../public/Images/githubIcon.png';
import Repositories from '../../../../public/Images/Repositories.png';
import { Outlet, Link, NavLink } from "react-router-dom";
import req from '../../../API/API';

const Navbar = () => {
    const l = JSON.parse(localStorage.getItem("malumot"))
    return (
        <header>

            <div>


                <nav className='nav height' style={{ backgroundColor: "#0e1116", color: 'white' }}>
                    <div className="containers d-flex">

                        <img src={githubIcon} className='githubIcon' alt="" />

                        <ul className='d-flex nav_list'>
                            <li><input type="text" className='inputdxcvgb' /></li>
                            <li>Pul requests</li>
                            <li>Issues</li>
                            <li>Marketplace</li>
                            <li>Explore</li>
                        </ul>
                        <ul className='d-flex nav_list right_el'>
                            <li><i class="bi bi-bell"></i></li>
                            <li>+</li>
                            <li><img src={l.avatar_url} alt="" style={{width:"25px",height:"25px"}} className="rounded-circle"/></li>
                        </ul>
                    </div>

                </nav>

                <div className=" jhxhbvclhbgdv border">

                    <ul className='d-flex nav_list centr_el sticky-top '>

                        <Link to={"/"}>
                            <li className='activee'>

                                <i className="bi bi-book"></i>Overview
                            </li>
                        </Link>
                        <Link to={"/Repositories"}>
                            <li>
                                <img src={Repositories} alt="Repositories" style={{ width: "20px", height: "20px" }} />
                                Repositories


                            </li>
                        </Link>
                        <Link to={"/Projects"}>
                            <li>

                                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-table UnderlineNav-octicon hide-sm">
                                    <path fillRule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0114.25 16H1.75A1.75 1.75 0 010 14.25V1.75zM1.5 6.5v7.75c0 .138.112.25.25.25H5v-8H1.5zM5 5H1.5V1.75a.25.25 0 01.25-.25H5V5zm1.5 1.5v8h7.75a.25.25 0 00.25-.25V6.5h-8zm8-1.5h-8V1.5h7.75a.25.25 0 01.25.25V5z"></path>
                                </svg>Projects

                            </li>
                        </Link>
                        <Link to={"/Packeges"}>
                            <li>

                                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-package UnderlineNav-octicon hide-sm">
                                    <path fillRule="evenodd" d="M8.878.392a1.75 1.75 0 00-1.756 0l-5.25 3.045A1.75 1.75 0 001 4.951v6.098c0 .624.332 1.2.872 1.514l5.25 3.045a1.75 1.75 0 001.756 0l5.25-3.045c.54-.313.872-.89.872-1.514V4.951c0-.624-.332-1.2-.872-1.514L8.878.392zM7.875 1.69a.25.25 0 01.25 0l4.63 2.685L8 7.133 3.245 4.375l4.63-2.685zM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432L2.5 5.677zm6.25 8.271l4.625-2.683a.25.25 0 00.125-.216V5.677L8.75 8.432v5.516z"></path>
                                </svg>Packeges
                            </li>
                        </Link>
                        <Link to={"/Stars"}>
                            <li>

                                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-star UnderlineNav-octicon hide-sm">
                                    <path fillRule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
                                </svg>Stars

                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
            <Outlet />
        </header>
    );
};

export default Navbar;