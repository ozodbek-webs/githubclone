import React from 'react';

const Stars = () => {
    return (
        <div className='Wrapper border p-5 h-100'>
            <div className="div p-5 h-50">
            <h2>Create your first list</h2>
            <div className="d-flex">
            <p className='d-inline'>Lists make it easier to organize and curate repositories that you have starred. </p>
            <a href="https://github.com/ozodbek-webs?tab=stars" className='d-inline'>Create your first list.</a>
            </div>
            </div>
        </div>
    );
};

export default Stars;