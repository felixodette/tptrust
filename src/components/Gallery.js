import React,{useEffect} from 'react';
import GLightbox from 'glightbox';

const galleryItems = [
    {
        id: 1,
        image: "/assets/images/gallery-img-transition.png",
        video:"https://drive.google.com/file/d/1Mk92P_YJQQY5cbFvO5y_lBY-eoNnIgu-/preview",
    },
    {
        id: 2,
        image: "/assets/images/gallery-img-TPFC.png",
        video:"https://drive.google.com/file/d/19Ede8OFuDlLdjohmA4bIJxL8P7cwgswD/preview",
    },
    {
        id: 3,
        image: "/assets/images/gallery-img-TP's-Journey.png",
        video:"https://drive.google.com/file/d/1FbkzodAATn0mN7-3HbUHYc6kNfLo8rHQ/preview",
    },
    {
        id: 4,
        image: "/assets/images/gallery-img-feeding.png",
        video:"https://drive.google.com/file/d/11geootR1nSUsYy9aqAhbFMW_klDNOJwv/preview",
    },
    {
        id: 5,
        image: "/assets/images/gallery-img-desciplenship.png",
        video:"https://drive.google.com/file/d/1-S7ATvVpZc3WQKXvTg8OFrvOn5BqyKXu/preview",
    },
    {
        id: 6,
        image: "/assets/images/gallery-img-anniversary.png",
        video:"https://drive.google.com/file/d/1Gi6kDCaWR0eNbqFVeO2WiFv0awV5AppR/preview"
    },
];

const Gallery = () => {

    useEffect(() => {
        const lightbox = GLightbox({
            touchNavigation: true,
            loop: true,
            autoplayVideos: true,
            beforeSlideLoad: (slide, data) => {
                // Need to execute a script in the slide?
                // You can do that here...
            }
        });

    });
    return (
        <section className="gallery-area2">
            <div className="container">
                <div className="row">

                    {galleryItems.map((item)=>(
                       <div className="col-lg-4 col-sm-6" key={item.id}>
                        <div className="gallery-item">
                        <div className="mfp-iframe video-play-btn" title="Play Video" style={{ position: 'absolute', top: '50%', left: '50%', fontSize: '2em', color: '#ffffff'}}>
                            <i className="fa fa-play"></i>
                                </div>
                            <img src={item.image} alt="" />
                            <a href={item.video} className="glightbox">
                                <span className="gallery-icon"></span>
                            </a>
                        </div>
                    </div> 
                    ))}
                    
                    <div className="col-lg-4 col-sm-6">
                        <div className="gallery-item">
                            <img src="/assets//images/gallery-img10.jpg" alt="" />
                                <a href="/assets/images/gallery-img10.jpg" className="glightbox">
                                    <span className="gallery-icon"></span></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="gallery-item">
                            <img src="/assets/images/gallery-img11.jpg" alt="" />
                                <a href="/assets/images/gallery-img11.jpg" className="glightbox">
                                    <span className="gallery-icon"></span></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="gallery-item">
                            <img src="/assets//images/gallery-img12.jpg" alt="" />
                                <a href="/assets/images/gallery-img12.jpg" className="glightbox">
                                    <span className="gallery-icon"></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
