import React from 'react';
import Swiper from 'swiper';
import 'swiper/swiper.css';
// import 'swiper/swiper-bundle.css';
import './parallax.css';

const Parallax = () => {
    var swiper = new Swiper('.swiper', {
        speed: 600,
        parallax: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    return (
        <>
            <div className="swiper">
                <div className="parallax-bg" data-swiper-parallax="-23%"></div>
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="title" data-swiper-parallax="-300">Slide 1</div>
                        <div className="subtitle" data-swiper-parallax="-200">Subtitle</div>
                        <div className="text" data-swiper-parallax="-100">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit
                                amet faucibus
                                felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem
                                justo. Integer laoreet
                                magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit
                                facilisis rutrum. Ut at
                                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero.
                                Aenean feugiat non eros
                                quis feugiat.</p>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="title" data-swiper-parallax="-300" data-swiper-parallax-opacity="0">Slide 2
                        </div>
                        <div className="subtitle" data-swiper-parallax="-200">Subtitle</div>
                        <div className="text" data-swiper-parallax="-100">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit
                                amet faucibus
                                felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem
                                justo. Integer laoreet
                                magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit
                                facilisis rutrum. Ut at
                                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero.
                                Aenean feugiat non eros
                                quis feugiat.</p>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="title" data-swiper-parallax="-300">Slide 3</div>
                        <div className="subtitle" data-swiper-parallax="-200">Subtitle</div>
                        <div className="text" data-swiper-parallax="-100">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit
                                amet faucibus
                                felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem
                                justo. Integer laoreet
                                magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit
                                facilisis rutrum. Ut at
                                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero.
                                Aenean feugiat non eros
                                quis feugiat.</p>
                        </div>
                    </div>
                </div>
                <div className="swiper-pagination swiper-pagination-white"></div>
                <div className="swiper-button-prev swiper-button-white"></div>
                <div className="swiper-button-next swiper-button-white"></div>
            </div>
        </>
    );
};

export default Parallax;
