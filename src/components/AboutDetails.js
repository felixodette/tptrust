import React from 'react';

const AboutDetails = (props) => {
  return (
    <section className="about-area">
      <div className="container">
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
                <h2 className="section__title">{props.title}</h2>
                <p className="section__meta">learn about non profit agency</p>
                <p className="section__desc">
                  {props.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDetails;
