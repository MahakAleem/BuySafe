    import React from 'react';
   
    function Result() {
    return (
        <div className="page-section bg-image" style={{ backgroundImage: 'url(../assets/img/pattern_2.svg)' }} id="analyze">
        <div className="container">
            <div className="row justify-content-center align-items-center">
            <div className="col-lg-5 mb-5 mb-lg-0 wow fadeInUp">
                <h1 className="mb-4">Result</h1>
                <a href="#" className="btn btn-gradient btn-split-icon rounded-pill">
                <span className="icon mai-call-outline"></span> Custom Plan
                </a>
            </div>
            <div className="col-lg-7">
                <div className="pricing-table">
                <div className="pricing-item active wow zoomIn">
                    <div className="pricing-header">
                    <h5>Buy or Not</h5>
                    <h1 className="fw-normal">Safe/Unsafe</h1>
                    </div>
                    <div className="pricing-body">
                    <ul className="theme-list">
                        <li className="list-item">A</li>
                        <li className="list-item">B</li>
                        <li className="list-item">C</li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
    }

    export default Result;
