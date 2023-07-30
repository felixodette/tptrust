import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/swiper.css';

const ClientsLogo = () => {

    const params = {
        slidesPerView : 5,
        loop: true,
        speed: 1000,
        spaceBetween : 30,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        // Responsive breakpoints
        breakpoints: {
            1499:{
                slidesPerView : 5
            },

            991:{
                slidesPerView : 3
            },

            767:{
                slidesPerView : 3

            },

            575:{
                slidesPerView : 2
            }
        }
    }

    return (
        <section className="clientlogo-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="client-logo">
                            <Swiper {...params}>
                                <div className="client-logo-item">
                                    <img src="/assets/images/partners/AAR%20logo.jpg" alt="brand image" />
                                </div>
                                <div className="client-logo-item">
                                    <img src="/assets/images/partners/AF%20Academy.png" alt="brand image" />
                                </div>
                                <div className="client-logo-item">
                                    <img src="/assets/images/partners/Cheza%20sports.png" alt="brand image" />
                                </div>
                                <div className="client-logo-item">
                                    <img src="/assets/images/partners/Daraja-logo.png" alt="brand image" />
                                </div>
                                <div className="client-logo-item">
                                    <img src="/assets/images/partners/Garden%20of%20Hope.png" alt="brand image" />
                                </div>
                                <div className="client-logo-item">
                                    <img src="/assets/images/partners/KGSA%20logo.jpg" alt="brand image" />
                                </div>
                                <div className="client-logo-item">
                                    <img src="/assets/images/partners/Kraft%20Therapy.png" alt="brand image" />
                                </div>
                                <div className="client-logo-item">
                                    <img src="/assets/images/partners/SGGC%20Logo.png" alt="brand image" />
                                </div>
                                <div className="client-logo-item">
                                    <img src="/assets/images/partners/shofco-logo.png" alt="brand image" />
                                </div>
                                <div className="client-logo-item">
                                    <img src="/assets/images/partners/Uweza%20Foundation.jpg" alt="brand image" />
                                </div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientsLogo;
