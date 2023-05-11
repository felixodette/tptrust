import React from 'react';

const ServiceArea = () => {
  return (
    <section className="service-area text-center">
      {/*<img src="/assets/images/heart-icon1.png" alt="" className="heart-icon heart-icon-1"/>*/}
      {/*<img src="/assets/images/heart-icon2.png" alt="" className="heart-icon heart-icon-2"/>*/}
      {/*<img src="/assets/images/heart-icon3.png" alt="" className="heart-icon heart-icon-3"/>*/}
      {/*<img src="/assets/images/heart-icon4.png" alt="" className="heart-icon heart-icon-4"/>*/}
      {/*<img src="/assets/images/heart-icon5.png" alt="" className="heart-icon heart-icon-5"/>*/}
      {/*<img src="/assets/images/heart-icon6.png" alt="" className="heart-icon heart-icon-6"/>*/}
      {/*<img src="/assets/images/heart-icon7.png" alt="" className="heart-icon heart-icon-7"/>*/}
      {/*<img src="/assets/images/heart-icon8.png" alt="" className="heart-icon heart-icon-8"/>*/}
      {/*<img src="/assets/images/heart-icon9.png" alt="" className="heart-icon heart-icon-9"/>*/}
      {/*<img src="/assets/images/heart-icon10.png" alt="" className="heart-icon heart-icon-10"/>*/}
      {/*<img src="/assets/images/heart-icon11.png" alt="" className="heart-icon heart-icon-11"/>*/}
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="section-heading service-heading">
              <div className="section-icon">
                <img src="/assets/images/section-icon.png" alt="section-icon"/>
              </div>
              {/*<h2 className="section__title">We Believe that*/}
              {/*  We can Save More Lives with you</h2>*/}
              {/*<p className="section__meta">help us now</p>*/}
            </div>
          </div>
        </div>
        <div className="row service-wrap">
          <div className="col">
            <div className="service-item service-item1">
              <div className="service-item-inner">
                <div className="service-icon">
                  <i className="icon-peace-1"></i>
                </div>
                <div className="service-content">
                  <h4 className="service__title">Holistic</h4>
                  <p className="service__desc">
                    We aim to see the people we serve develop physically, socially and spiritually.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="service-item service-item2">
              <div className="service-item-inner">
                <div className="service-icon">
                  <i className="icon-praying"></i>
                </div>
                <div className="service-content">
                  <h4 className="service__title">Relational</h4>
                  <p className="service__desc">
                    We value relationships because so much positive change can occur through strong, caring relationships.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="service-item service-item3">
              <div className="service-item-inner">
                <div className="service-icon">
                  <i className="icon-peace"></i>
                </div>
                <div className="service-content">
                  <h4 className="service__title">Hopeful</h4>
                  <p className="service__desc">
                    We aim to inspire hope by pointing people to Jesus and to the innate potential He has planted in them.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="service-item service-item4">
              <div className="service-item-inner">
                <div className="service-icon">
                  <i className="icon-heart"></i>
                </div>
                <div className="service-content">
                  <h4 className="service__title">donation</h4>
                  <p className="service__desc">
                    Empower vulnerable children in Kibera with your generous donations of hope.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="button-shared">
              <a href="/donate" className="theme-btn">donate
                now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
