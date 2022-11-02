import React from 'react';
import './style.css'

const Error = () => {
    function randomNum() {
        "use strict";
        return Math.floor(Math.random() * 9) + 1;
    }
    var loop1, loop2, loop3, time = 30, i = 0, number, selector3 = document.querySelector('.thirdDigit'), selector2 = document.querySelector('.secondDigit'),
        selector1 = document.querySelector('.firstDigit');
    loop3 = setInterval(function () {
        "use strict";
        if (i > 40) {
            clearInterval(loop3);
            selector3.textContent = 4;
        } else {
            selector3.textContent = randomNum();
            i++;
        }
    }, time);
    loop2 = setInterval(function () {
        "use strict";
        if (i > 80) {
            clearInterval(loop2);
            selector2.textContent = 0;
        } else {
            selector2.textContent = randomNum();
            i++;
        }
    }, time);
    loop1 = setInterval(function () {
        "use strict";
        if (i > 100) {
            clearInterval(loop1);
            selector1.textContent = 4;
        } else {
            selector1.textContent = randomNum();
            i++;
        }
    }, time);
    return (
        <div classNameName='Wrapper'>

            <body>

                {/* <!-- Error Page --> */}
                <div className="error">
                    <div className="container-floud">
                        <div className="col-xs-12 ground-color text-center">
                            <div className="container-error-404">
                                <div className="clip"><div className="shadow"><span className="digit thirdDigit">4</span></div></div>
                                <div className="clip"><div className="shadow"><span className="digit secondDigit">0</span></div></div>
                                <div className="clip"><div className="shadow"><span className="digit firstDigit">4</span></div></div>
                                <div className="msg">OH!<span className="triangle"></span></div>
                            </div>
                            <h2 className="h1">Sorry! Page not found</h2>
                        </div>
                    </div>
                </div>
                {/* <!-- Error Page --> */}
            </body>
        </div >
    );
};

export default Error;