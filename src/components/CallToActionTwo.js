import React from 'react';
import {Link} from "react-router-dom";

const CallToActionTwo = () => {
    return (
        <section className="cta-area text-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-sm-6">
                        <div className="cta-item cta-item1">
                            <h3 className="cta__title">Sponsor an entire trending project</h3>
                            <Link to="/sponsor"><a href="#/" className="theme-btn">become an sponsor</a></Link>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                        <div className="cta-item cta-item2">
                            <h3 className="cta__title">Take a look a the popular causes</h3>
                            <Link to="/causes"><a href="#/" className="theme-btn">view all causes</a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToActionTwo;
