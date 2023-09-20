    import React from 'react';
   
    
    function FindSection() {
      return (
        <div className="page-section bg-dark fg-white" id="find">
          <div className="container">
            <h1 className="text-center">Upload/Capture Image</h1>
            <div className="row">
              <div className="col-md-6 col-lg-3 py-3">
                <div className="card card-body border-0 bg-transparent text-center wow zoomIn" data-wow-delay="800ms">
                  <div className="mb-3">
                    <img src="../assets/img/icons/support.svg" alt="" />
                  </div>
                  <p className="fs-large">24/7 Support</p>
                  <p className="fs-small fg-grey">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 py-3">
                <div className="card card-body border-0 bg-transparent text-center wow zoomIn" data-wow-delay="1000ms">
                  <div className="mb-3">
                    <img src="../assets/img/icons/laptop.svg" alt="" />
                  </div>
                  <p className="fs-large">Full Features</p>
                  <p className="fs-small fg-grey">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</p>
                </div>
                <a href="#analyze" className="btn btn-gradient btn-split-icon rounded-pill">
                  <span className="icon mai-call-outline"></span> Analyze
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }

    export default FindSection;
