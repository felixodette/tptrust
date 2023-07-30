import React from 'react';
import myJson from "../data/data.json";

const OurImpact = (props) => {

  const openPDFInFullScreen = (pdfUrl) => {
    const features = 'fullscreen=yes,toolbar=no,menubar=no,scrollbars=yes,resizable=yes';
    const newWindow = window.open(pdfUrl, '_blank', features);

    // Check if the new window was opened successfully
    if (newWindow) {
      newWindow.moveTo(0, 0); // Move the window to the top-left corner
      // eslint-disable-next-line no-restricted-globals
      newWindow.resizeTo(screen.width, screen.height); // Resize the window to fullscreen
    } else {
      // Handle popup blocker or other error
      console.log('Failed to open the PDF in a new window.');
    }
  }

  return (
    <section className="about-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="about-large-img">
              <img src="/assets/images/foundation-of-hope-page-1.jpg" alt=""/>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about-semi-img">
              <img src={myJson.ourImpact[7].image} alt=""/>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about-heading">
              <div className="section-heading">
                <div className="section-icon">
                  <img src="/assets/images/section-icon.png" alt="section-icon"/>
                </div>
                <h2 className="section__title">{myJson.ourImpact[7].name}</h2>
                {/*<p className="section__meta">learn about non profit agency</p>*/}
                <p className="section__desc">{myJson.ourImpact[7].description}</p>
                <a href={myJson.ourImpact[7].pdf} className="theme-btn" onClick={() => openPDFInFullScreen(myJson.ourImpact[7].pdf)} style={{top: 10}}>Download Report</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{marginTop: 100}}>
        <div className="row">
          <div className="col-lg-5">
            <div className="about-semi-img">
              <img src={myJson.ourImpact[0].image} alt=""/>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about-heading">
              <div className="section-heading">
                <div className="section-icon">
                  <img src="/assets/images/section-icon.png" alt="section-icon"/>
                </div>
                <h2 className="section__title">{myJson.ourImpact[0].name}</h2>
                {/*<p className="section__meta">learn about non profit agency</p>*/}
                <p className="section__desc">{myJson.ourImpact[0].description}</p>
                <a href={myJson.ourImpact[0].pdf} className="theme-btn" onClick={() => openPDFInFullScreen(myJson.ourImpact[0].pdf)} style={{top: 5}}>Download Report</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{marginTop: 100}}>
        <div className="row">
          <div className="col-lg-5">
            <div className="about-semi-img">
              <img src={myJson.ourImpact[1].image} alt=""/>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about-heading">
              <div className="section-heading">
                <div className="section-icon">
                  <img src="/assets/images/section-icon.png" alt="section-icon"/>
                </div>
                <h2 className="section__title">{myJson.ourImpact[1].name}</h2>
                {/*<p className="section__meta">learn about non profit agency</p>*/}
                <p className="section__desc">{myJson.ourImpact[1].description}</p>
                <a href={myJson.ourImpact[1].pdf} className="theme-btn" onClick={() => openPDFInFullScreen(myJson.ourImpact[1].pdf)} style={{top: 10}}>Download Report</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{marginTop: 100}}>
        <div className="row">
          <div className="col-lg-5">
            <div className="about-semi-img">
              <img src={myJson.ourImpact[2].image} alt=""/>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about-heading">
              <div className="section-heading">
                <div className="section-icon">
                  <img src="/assets/images/section-icon.png" alt="section-icon"/>
                </div>
                <h2 className="section__title">{myJson.ourImpact[2].name}</h2>
                {/*<p className="section__meta">learn about non profit agency</p>*/}
                <p className="section__desc">{myJson.ourImpact[2].description}</p>
                <a href={myJson.ourImpact[2].pdf} className="theme-btn" onClick={() => openPDFInFullScreen(myJson.ourImpact[2].pdf)} style={{top: 10}}>Download Report</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{marginTop: 100}}>
        <div className="row">
          <div className="col-lg-5">
            <div className="about-semi-img">
              <img src={myJson.ourImpact[3].image} alt=""/>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about-heading">
              <div className="section-heading">
                <div className="section-icon">
                  <img src="/assets/images/section-icon.png" alt="section-icon"/>
                </div>
                <h2 className="section__title">{myJson.ourImpact[3].name}</h2>
                {/*<p className="section__meta">learn about non profit agency</p>*/}
                <p className="section__desc">{myJson.ourImpact[3].description}</p>
                <a href={myJson.ourImpact[3].pdf} className="theme-btn" onClick={() => openPDFInFullScreen(myJson.ourImpact[3].pdf)} style={{top: 10}}>Download Report</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{marginTop: 100}}>
        <div className="row">
          <div className="col-lg-5">
            <div className="about-semi-img">
              <img src={myJson.ourImpact[4].image} alt=""/>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about-heading">
              <div className="section-heading">
                <div className="section-icon">
                  <img src="/assets/images/section-icon.png" alt="section-icon"/>
                </div>
                <h2 className="section__title">{myJson.ourImpact[4].name}</h2>
                {/*<p className="section__meta">learn about non profit agency</p>*/}
                <p className="section__desc">{myJson.ourImpact[4].description}</p>
                <a href={myJson.ourImpact[4].pdf} className="theme-btn" onClick={() => openPDFInFullScreen(myJson.ourImpact[4].pdf)} style={{top: 10}}>Download Report</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{marginTop: 100}}>
        <div className="row">
          <div className="col-lg-5">
            <div className="about-semi-img">
              <img src={myJson.ourImpact[5].image} alt=""/>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about-heading">
              <div className="section-heading">
                <div className="section-icon">
                  <img src="/assets/images/section-icon.png" alt="section-icon"/>
                </div>
                <h2 className="section__title">{myJson.ourImpact[5].name}</h2>
                {/*<p className="section__meta">learn about non profit agency</p>*/}
                <p className="section__desc">{myJson.ourImpact[5].description}</p>
                <a href={myJson.ourImpact[5].pdf} className="theme-btn" onClick={() => openPDFInFullScreen(myJson.ourImpact[5].pdf)} style={{top: 10}}>Download Report</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{marginTop: 100}}>
        <div className="row">
          <div className="col-lg-5">
            <div className="about-semi-img">
              <img src={myJson.ourImpact[6].image} alt=""/>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about-heading">
              <div className="section-heading">
                <div className="section-icon">
                  <img src="/assets/images/section-icon.png" alt="section-icon"/>
                </div>
                <h2 className="section__title">{myJson.ourImpact[6].name}</h2>
                {/*<p className="section__meta">learn about non profit agency</p>*/}
                <p className="section__desc">{myJson.ourImpact[6].description}</p>
                <a href={myJson.ourImpact[6].pdf} className="theme-btn" onClick={() => openPDFInFullScreen(myJson.ourImpact[6].pdf)} style={{top: 5}}>Download Report</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurImpact;
