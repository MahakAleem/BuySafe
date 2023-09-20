        import React from 'react';
       import '../maicons.css';
       

        function HowItWorks() {
        return (
            <div className="page-section" id="how">
            <div className="container">
                <div className="row">
                <div className="col-lg-5 py-3">
                    <div className="img-place mobile-preview shadow wow zoomIn">
                    <img src="https://cdn.dribbble.com/users/3050354/screenshots/14646894/media/1f31948afd5401c44d4bae934f07641a.gif" alt="" />
                    </div>
                </div>
                <div className="col-lg-6 py-3 mt-lg-5">
                    <div className="iconic-list">
                    <div className="iconic-item wow fadeInUp">
                        <div className="iconic-md iconic-text bg-warning fg-white rounded-circle">
                        <span className="mai-pencil"></span>
                        </div>
                        <div className="iconic-content">
                        <h5>Enter Allergen Words</h5>
                        <p className="fs-small">Enter the allergen Words comma separated for the detection in ingredients.</p>
                        </div>
                    </div>
                    <div className="iconic-item wow fadeInUp">
                        <div className="iconic-md iconic-text bg-info fg-white rounded-circle">
                        <span className="mai-camera"></span>
                        </div>
                        <div className="iconic-content">
                        <h5>Upload/Capture Image</h5>
                        <p className="fs-small">Upload or Capture the Image with the ingredients for searching the allergen keywords.</p>
                        </div>
                    </div>
                    <div className="iconic-item wow fadeInUp">
                        <div className="iconic-md iconic-text bg-indigo fg-white rounded-circle">
                        <span className="mai-search"></span>
                        </div>
                        <div className="iconic-content">
                        <h5>Find out whether it is safe to buy or not</h5>
                        <p className="fs-small">After doing the processing it will give you the result.</p>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="iconic-item wow fadeInUp">
                        <a href="#start">
                        <div className="iconic-md iconic-text bg-indigo fg-white rounded-circle">
                            <span className="mai-arrow-down"></span>
                        </div>
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        );
        }

        export default HowItWorks;
