import React from 'react';

const AboutArea = () => {
  return (
    <section className="about-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="about-large-img">
              <img src="/assets/images/about-page-1.jpg" alt=""/>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about-semi-img">
              <img src="/assets/images/about-page-2.jpg" alt=""/>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about-heading">
              <div className="section-heading">
                <div className="section-icon">
                  <img src="/assets/images/section-icon.png" alt="section-icon"/>
                </div>
                <h2 className="section__title">Discover About TP Trust</h2>
                <p className="section__meta">learn about non profit agency</p>
                <p className="section__desc">
                  At Turning Point Trust, our mission is to empower vulnerable families and children in Kibera by
                  providing quality education, learning resources, and practical support. We take a holistic approach to
                  development, focusing on physical, social, and spiritual wellbeing. We value relationships and point
                  people to Jesus for hope and guidance. Join us in making a difference in Kibera, Kenya.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutArea;
