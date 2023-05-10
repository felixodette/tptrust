import React from 'react';

const PreSchoolAbout = () => {
  return (
    <section className="about-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="about-large-img">
              <img src="/assets/images/pre-school-1.jpg" alt=""/>
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
                <h2 className="section__title">The Challenge</h2>
                {/*<p className="section__meta">learn about non profit agency</p>*/}
                <p className="section__desc">
                  Preschool builds the foundations for life-long learning and yet 16% of children in Kenya do not attend
                  preschool. Like five-year-old Evans whose parents live on less than $2 a day in the sprawling informal
                  settlement of Kibera. Evans’ parents are already paying school fees for three older siblings in
                  primary school and cannot afford the fees to send Evans to preschool as well.
                  When both parents are busy making ends meet, Evans is left with a neighbour. She keeps an eye on him
                  but its easy enough for the inquisitive child to wander off exploring. The risks are numerous to a
                  small child in Kibera. Turning Point’s Preschool provides a safe environment for children like Evans
                  to learn and thrive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreSchoolAbout;
