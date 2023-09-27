import React, { useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
// import Swiper from 'react-id-swiper';
// import 'swiper/css/swiper.css';
import 'swiper/swiper-bundle.css';
import {Link} from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
// import 'swiper/swiper-bundle.css';
// import 'swiper/components/navigation/navigation.min.css';
// import 'swiper/components/pagination/pagination.min.css';
// import SwiperCore, { Navigation, Pagination } from 'swiper/core';

// import Swiper bundle with all modules installed
// import Swiper from 'swiper/bundle';

// import styles bundle
// import 'swiper/css/bundle';

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';


const SliderOne = () => {
  const [swiper, setSwiper] = useState(null);

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  return (
    <section className="slider-area">
      <div className="homepage-slide1">

        <Swiper onSwiper={setSwiper}
                modules={[Navigation, Pagination, A11y, Autoplay]}
                // spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}>
          <SwiperSlide>
            <div className="single-slide-item slide-bg1">
              <div className="slide-item-table">
                <div className="slide-item-tablecell">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-7">
                        <div className="slider-heading">
                          {/*<p className="slider__meta">welcome to the turning point trust</p>*/}
                          <h2 className="slider__title">End poverty</h2>
                          <Link to="/about"><a href="#/" className="theme-btn">discover more</a></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="single-slide-item slide-bg2">
              <div className="slide-item-table">
                <div className="slide-item-tablecell">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-7">
                        <div className="slider-heading">
                          {/*<p className="slider__meta">welcome to the turning point trust</p>*/}
                          <h2 className="slider__title">Transform Lives</h2>
                          <Link to="/about"><a href="#/" className="theme-btn">discover more</a></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="single-slide-item slide-bg3">
              <div className="slide-item-table">
                <div className="slide-item-tablecell">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-7">
                        <div className="slider-heading">
                          {/*<p className="slider__meta">welcome to the turning point trust</p>*/}
                          <h2 className="slider__title">Restore Hope</h2>
                          <Link to="/about"><a href="#/" className="theme-btn">discover more</a></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/*<SwiperSlide>*/}
          {/*  <div className="single-slide-item slide-bg4">*/}
          {/*    <div className="slide-item-table">*/}
          {/*      <div className="slide-item-tablecell">*/}
          {/*        <div className="container">*/}
          {/*          <div className="row">*/}
          {/*            <div className="col-md-7">*/}
          {/*              <div className="slider-heading">*/}
          {/*                <p className="slider__meta">welcome to the turning point trust</p>*/}
          {/*                <h2 className="slider__title">Support a child in school</h2>*/}
          {/*                <Link to="/about"><a href="#/" className="theme-btn">discover more</a></Link>*/}
          {/*              </div>*/}
          {/*            </div>*/}
          {/*          </div>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</SwiperSlide>*/}
          {/*<SwiperSlide>*/}
          {/*  <div className="single-slide-item slide-bg5">*/}
          {/*    <div className="slide-item-table">*/}
          {/*      <div className="slide-item-tablecell">*/}
          {/*        <div className="container">*/}
          {/*          <div className="row">*/}
          {/*            <div className="col-md-7">*/}
          {/*              <div className="slider-heading">*/}
          {/*                <p className="slider__meta">welcome to the turning point trust</p>*/}
          {/*                <h2 className="slider__title">Education is a right, no a privilege</h2>*/}
          {/*                <Link to="/about"><a href="#/" className="theme-btn">discover more</a></Link>*/}
          {/*              </div>*/}
          {/*            </div>*/}
          {/*          </div>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</SwiperSlide>*/}
        </Swiper>
        {/*<div className="owl-dots">*/}
        {/*  <div onClick={goPrev} className="owl-dot"><span></span></div>*/}
        {/*  <div onClick={goNext} className="owl-dot"><span></span></div>*/}
        {/*</div>*/}
      </div>
    </section>
  );
};

export default SliderOne;
