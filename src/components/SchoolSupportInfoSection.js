import React from 'react';
import myJson from "../data/data.json";

const SchoolSupportInfoSection = (props) => {
  return (
    <section className="about-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="about-large-img">
              <img src="/assets/images/about-img.jpg" alt=""/>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about-semi-img">
              <img src="/assets/images/about-img2.jpg" alt=""/>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about-heading">
              <div className="section-heading">
                <div className="section-icon">
                  <img src="/assets/images/section-icon.png" alt="section-icon"/>
                </div>
                <h2 className="section__title">{myJson.schoolSupport.theChallenge.title}</h2>
                <p className="section__meta">learn about non profit agency</p>
                <p className="section__desc">{myJson.schoolSupport.theChallenge.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{marginTop: 100}}>
        <div className="row">
          <div className="col-lg-5">
            <div className="about-semi-img">
              <img src="/assets/images/about-img2.jpg" alt=""/>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about-heading">
              <div className="section-heading">
                <div className="section-icon">
                  <img src="/assets/images/section-icon.png" alt="section-icon"/>
                </div>
                <h2 className="section__title">{myJson.schoolSupport.ourApproach.title}</h2>
                <p className="section__meta">learn about non profit agency</p>
                <p className="section__desc">{myJson.schoolSupport.ourApproach.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{marginTop: 100}}>
        <div className="row">
          <div className="col-lg-5">
            <div className="about-semi-img">
              <img src="/assets/images/about-img2.jpg" alt=""/>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about-heading">
              <div className="section-heading">
                <div className="section-icon">
                  <img src="/assets/images/section-icon.png" alt="section-icon"/>
                </div>
                <h2 className="section__title">{myJson.schoolSupport.ourImpact.title}</h2>
                <p className="section__meta">learn about non profit agency</p>
                <p className="section__desc">{myJson.schoolSupport.ourImpact.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolSupportInfoSection;
