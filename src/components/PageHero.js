    import React from 'react'
    import bgHeroImage from '../components/bg_hero_1.svg';
    import allergy from '../components/allergy (2).v1.png';
    function PageHero() {
        return (
            <div className="page-hero-section bg-image hero-home-1" style={{ backgroundImage: `url(${bgHeroImage})` }}>
            <div className="hero-caption pt-5">
                <div className="container h-100">
                <div className="row align-items-center h-100">
                    <div className="col-lg-6 wow fadeInUp">
                    <h1 className="mb-4">Allergen Detection for Confident Shopping</h1>
                    <p className="mb-4">Photo-based app for quick <br /> allergen detection in product ingredients. </p>
                    <a href="#how" className="btn btn-primary rounded-pill">How It Works!</a>
                    </div>
                    <div className="col-lg-6 d-none d-lg-block wow zoomIn">
                    <div className="img-place mobile-preview shadow floating-animate">
                        <img src={allergy} alt="" />
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        );
    }

    export default PageHero
