import React from 'react';
import myJson from "../data/data.json";

const CommunityLibraryInfoSection = (props) => {
  return (
    <section className="about-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="about-large-img">
              <img src="/assets/images/community-library-page-1.png" alt=""/>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about-semi-img">
              <img src="/assets/images/community-library-page-2.jpg" alt=""/>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about-heading">
              <div className="section-heading">
                <div className="section-icon">
                  <img src="/assets/images/section-icon.png" alt="section-icon"/>
                </div>
                <h2 className="section__title">{myJson.communityLibrary.theChallenge.title}</h2>
                {/*<p className="section__meta">learn about non profit agency</p>*/}
                <p className="section__desc">{myJson.communityLibrary.theChallenge.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{marginTop: 100}}>
        <div className="row">
          <div className="col-lg-5">
            <div className="about-semi-img">
              <img src="/assets/images/community-library-page-3.jpg" alt=""/>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about-heading">
              <div className="section-heading">
                <div className="section-icon">
                  <img src="/assets/images/section-icon.png" alt="section-icon"/>
                </div>
                <h2 className="section__title">{myJson.communityLibrary.ourApproach.title}</h2>
                {/*<p className="section__meta">learn about non profit agency</p>*/}
                <p className="section__desc">{myJson.communityLibrary.ourApproach.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{marginTop: 100}}>
        <div className="row">
          <div className="col-lg-5">
            <div className="about-semi-img">
              <img src="/assets/images/community-library-page-4.jpg" alt=""/>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about-heading">
              <div className="section-heading">
                <div className="section-icon">
                  <img src="/assets/images/section-icon.png" alt="section-icon"/>
                </div>
                <h2 className="section__title">{myJson.communityLibrary.ourImpact.title}</h2>
                {/*<p className="section__meta">learn about non profit agency</p>*/}
                <p className="section__desc">{myJson.communityLibrary.ourImpact.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityLibraryInfoSection;
