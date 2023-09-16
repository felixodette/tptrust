import React from 'react';
// import {circularProgressClasses} from "@mui/material";

const AboutAreaHome = () => {
  return (
    <section className="about-area">
      <div className="container">
        <div className="row">
          {/*<div className="col-lg-12">*/}
          {/*  <div className="about-large-img">*/}
          {/*    <img src="/assets/images/about-page-1.jpg" alt=""/>*/}
          {/*  </div>*/}
          {/*</div>*/}
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
                <h3 className="section__title">Our Mission</h3>
                {/*<p className="section__meta">learn about non profit agency</p>*/}
                <p className="section__desc">
                  Our <b>mission</b> is to demonstrate God’s heart for the poor through holistic education programmes that help relieve poverty, transform lives, and restore hope amongst vulnerable children and families in Kibera informal settlement.
                  {/*<ul style={{listStyle: "circle"}}>*/}
                  {/*  <li>Provide access to quality holistic education at preschool and primary level</li>*/}
                  {/*  <li>Support Support students to attend secondary school</li>*/}
                  {/*  <li>Offer learning resources and opportunities to children</li>*/}
                  {/*  <li>Offer spiritual teaching, psychosocial and mentorship support to children and their families</li>*/}
                  {/*  <li>Develop friendships with all the families we work with and demonstrate God’s love through*/}
                  {/*    practical support</li>*/}
                  {/*</ul>*/}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="about-large-img">
              {/*<img src="/assets/images/about-page-1.jpg" alt=""/>*/}
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about-heading">
              <div className="section-heading">
                <div className="section-icon">
                  <img src="/assets/images/section-icon.png" alt="section-icon"/>
                </div>
                <h3 className="section__title">Our Vision</h3>
                {/*<p className="section__meta">learn about non profit agency</p>*/}
                <p className="section__desc">
                  Our <b>vision</b> is to see vulnerable children and families from Kibera informal settlement empowered to reach their full God-given potential.
                  {/*<ul style={{listStyle: "circle"}}>*/}
                  {/*  <li>Provide access to quality holistic education at preschool and primary level</li>*/}
                  {/*  <li>Support Support students to attend secondary school</li>*/}
                  {/*  <li>Offer learning resources and opportunities to children</li>*/}
                  {/*  <li>Offer spiritual teaching, psychosocial and mentorship support to children and their families</li>*/}
                  {/*  <li>Develop friendships with all the families we work with and demonstrate God’s love through*/}
                  {/*    practical support</li>*/}
                  {/*</ul>*/}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about-semi-img">
              <img src="/assets/images/about-page-3.jpg" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAreaHome;
