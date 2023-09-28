import React,{useEffect} from 'react';
import GLightbox from 'glightbox';

const galleryItems = [
    {
        id: 1,
        image: "/assets/images/gallery-img-transition.png",
        video:"https://youtu.be/FmjBktNEKL8?si=ltiWVYiW16LzQDFi",
    },
    {
        id: 2,
        image: "/assets/images/gallery-img-TPFC.png",
        video:"https://youtu.be/f9D8RshMq4Y?si=QgoUuiJh9UPtihQ8",
    },
    {
        id: 3,
        image: "/assets/images/gallery-img-TP's-Journey.png",
        video:"https://youtu.be/MyEHJKGYY5g?si=Va_FA5QmFcfbUKuM",
    },
    {
        id: 4,
        image: "/assets/images/gallery-img-feeding.png",
        video:"https://youtu.be/j9unrj2VtRY?si=cDs6wkdJanouuhor",
    },
    {
        id: 5,
        image: "/assets/images/gallery-img-desciplenship.png",
        video:"https://youtu.be/IZXsZpv4558?si=Ss67pkU2rjGDSdZ_",
    },
    {
        id: 6,
        image: "/assets/images/gallery-img-anniversary.png",
        video:"https://www.youtube.com/watch?v=WVr17--kixo"
    },

    {
        id: 7,
        image: "/assets//images/gallery-img10.jpg",
        video:"/assets/images/gallery-img10.jpg"
    },
    {
        id: 8,
        image: "/assets//images/gallery-img10.jpg",
        video:"/assets/images/gallery-img10.jpg"
    },
    {
        id: 9,
        image: "/assets//images/gallery-img10.jpg",
        video:"/assets/images/gallery-img10.jpg"
    }

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
                </div>
            </div>
        </section>
    );
};

export default Gallery;
