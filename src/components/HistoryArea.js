import React from 'react';
import MyJson from '../data/data.json'

const HistoryArea = () => {
  let history = MyJson.tptrustBackground;

  return (
    <section className="service-area text-center">
      <div className="container" style={{paddingTop: 1, marginTop: 1}}>
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="section-heading service-heading">
              <div className="section-icon">
                <img src="/assets/images/section-icon.png" alt="section-icon"/>
              </div>
              <h2 className="section__title">Brief History</h2>
            </div>
          </div>
        </div>
        <div className="row service-wrap">
          <div className="col">
            <div className="service-item service-item1">
              <div className="service-item-inner">
                <div className="service-content">
                  <p className="service__desc" dangerouslySetInnerHTML={{__html: history}}>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoryArea;
