import React from 'react';
import {Link} from "react-router-dom";

const HiwArea = () => {
  return (
    <section className="hiw-area">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="hiw-item">
              <div className="hiw-item-img-box hiw-bg1">
                <figure>
                  <img src="/assets/images/kids-window.jpg" alt="" />
                  <h3 className="hiw-title">More charity better lives</h3>
                  <div className="hiw-btn-box">
                    <Link to="/about"><a href="#/" className="theme-btn">read more</a></Link>
                  </div>
                </figure>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="hiw-item">
              <div className="hiw-item-img-box hiw-bg2">
                <figure>
                  <img src="/assets/images/kids-window.jpg" alt="" />
                  <h3 className="hiw-title">How to become volunteer</h3>
                  <div className="hiw-btn-box">
                    <Link to="/volunteer"><a href="#/" className="theme-btn">read more</a></Link>
                  </div>
                </figure>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="hiw-item">
              <div className="hiw-item-img-box hiw-bg3">
                <figure>
                  <img src="/assets/images/kids-window.jpg" alt="" />
                  <h3 className="hiw-title">Poor children education</h3>
                  <div className="hiw-btn-box">
                    <Link to="/causes"><a href="#/" className="theme-btn">read more</a></Link>
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiwArea;
