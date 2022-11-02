import React from 'react';

const HomeMain = () => {
    return (
        <div>
            <div className="containerl mt-4">
                <div className="d-flex justify-content-between">
                    <h6 className='fw'>Popular repositories</h6>
                    <h6 className='fw'>Customize your pins</h6>
                </div>
                <div className="d-grid">
                    <div className="card w-100 h25">
                        <div className="m-3">
                            <a href="#">ozodbek-webs</a>
                            <p className='fw'>Config files for my GitHub profile.</p>
                    <button className='publicBtn'>Public</button>
                        </div>
                    </div>
                    <div className="card w-100 h25">
                        <div className="m-3">
                            <a href="#">first-repo</a>
                            <p className='fw'>html,css</p>
                    <button className='publicBtn'>Public</button>
                            <div className="d-flex">
                                <div className="bg-danger qizil_D"></div>
                                <p className="fw Hhtml">HTML</p>
                            </div>
                        </div>
                    </div>
                    <div className="card w-100 h25">
                        <div className="m-3">
                            <a href="#">ozodbek</a>
                            <p className="fw">html,css</p>
                    <button className='publicBtn'>Public</button>

                        </div>
                    </div>
                    <div className="card w-100 h25">
                        <div className="m-3">
                            <a href="#">assalomu-aleykum</a>
                            <p className="fw">html</p>
                    <button className='publicBtn'>Public</button>
                            <div className="d-flex">
                                <div className="bg-danger qizil_D"></div>
                                <p className="fw Hhtml">HTML</p>
                            </div>
                        </div>
                    </div>
                    <div className="card w-100 h25">
                        <div className="m-3">
                            <a href="#">index</a>
                            <p className="fw">html</p>
                    <button className='publicBtn'>Public</button>
                            <div className="d-flex">
                                <div className="bg-danger qizil_D"></div>
                                <p className="fw Hhtml">HTML</p>
                            </div>
                        </div>
                    </div>
                    <div className="card w-100 h25">
                        <div className="m-3">
                            <a href="#">homework1</a>
                            <p className="fw">html</p>
                    <button className='publicBtn'>Public</button>
                            <div className="d-flex">
                                <div className="bg-danger qizil_D"></div>
                                <p className="fw Hhtml">HTML</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeMain;