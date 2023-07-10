import React from 'react';
// import {circularProgressClasses} from "@mui/material";

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
                {/*<h2 className="section__title">Discover About TP Trust</h2>*/}
                {/*<p className="section__meta">learn about non profit agency</p>*/}
                <p className="section__desc">
                  “Our Mission” – Our mission is to demonstrate God’s heart for the poor through
                  programmes that relieve poverty, transform lives and restore home amongst vulnerable families
                  and children in Kibera informal settlement. These programmes:
                  <ul style={{listStyle: "circle"}}>
                    <li>Provide access to quality holistic education at preschool and primary level</li>
                    <li>Support Support students to attend secondary school</li>
                    <li>Offer learning resources and opportunities to children</li>
                    <li>Offer spiritual teaching, psychosocial and mentorship support to children and their families</li>
                    <li>Develop friendships with all the families we work with and demonstrate God’s love through
                      practical support</li>
                  </ul>
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
