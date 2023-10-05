import React,{useEffect} from 'react';
import GLightbox from 'glightbox';

const galleryItems = [
    {
        id: 1,
        image: "/assets/images/gallery-img-feeding-programme.png",
        video: "https://youtu.be/0jvTSi5e36k?si=MMC3ceOeGTOxAlKv",
    },
    {
        id: 2,
        image: "/assets/images/gallery-img-transiotion.png",
        video:"https://youtu.be/ml9GgBMnGyM?si=e5dLeNzn0kG5AzVd",
    },
    {
        id: 3,
        image: "/assets/images/gallery-img-discipleship.png",
        video:"https://youtu.be/6SBcQYqeVM0?si=VDMGSG8C1L1cEeXx",
    },
    {
        id: 4,
        image: "/assets/images/gallery-img-TPFC.png",
        video:"https://youtu.be/QlFuBldgoGU?si=WnlQWoStL05uo2_Z",
    },
    {
        id: 5,
        image: "/assets/images/gallery-img-anniversary.png",
        video:"https://youtu.be/eeTuwPYrJ48?si=YvtMFj_c10Z-ExdE",
    },
    {
        id: 6,
        image: "/assets/images/gallery-img-20thanniversary.png",
        video:"https://youtu.be/G3r1XUgMrdE?si=vPrxTKgvKx9jgsgZ"
    },
    {
        id: 7,
        image: "/assets/images/gallery-img-tpjourney.ong.png",
        video:"https://youtu.be/C1g0XEWThII?si=LbU5Iihb1bsWZMlS"
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
