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
    },
    {
        id:8,
        image: "/assets/images/mediaGallery/tc-9991.jpg"
    },
    {
        id:9,
        image: "/assets/images/mediaGallery/tc-9987.jpg"
    },
    {
        id:10,
        image: "/assets/images/mediaGallery/tc-9984.jpg"
    },
    {
        id:11,
        image: "/assets/images/mediaGallery/tc-9982.jpg"
    },
    {
        id:12,
        image: "/assets/images/mediaGallery/tc-9971.jpg"
    },
    {
        id:13,
        image: "/assets/images/mediaGallery/tc-9953.jpg"
    },
    {
        id:14,
        image: "/assets/images/mediaGallery/tc-9927.jpg"
    },
    {
        id:15,
        image: "/assets/images/mediaGallery/tc-9901.jpg"
    },
    {
        id:16,
        image: "/assets/images/mediaGallery/tc-9855.jpg"
    },
    {
        id:17,
        image: "/assets/images/mediaGallery/tc-9707.jpg"
    },
    {
        id:18,
        image: "/assets/images/mediaGallery/tc-9982.jpg"
    },

    {
        id:19,
        image: "/assets/images/mediaGallery/tc-9703.jpg"
    },
    {
        id:20,
        image: "/assets/images/mediaGallery/tc-9689.jpg"
    },
    {
        id:21,
        image: "/assets/images/mediaGallery/tc-7753.jpg"
    },
    {
        id:22,
        image: "/assets/images/mediaGallery/tc-7729.jpg"
    },
    {
        id:23,
        image: "/assets/images/mediaGallery/tc-7629.jpg"
    },
    {
        id:24,
        image: "/assets/images/mediaGallery/tc-7622.jpg"
    },
    {
        id:25,
        image: "/assets/images/mediaGallery/tc-7620.jpg"
    },
    {
        id:26,
        image: "/assets/images/mediaGallery/tc-7608.jpg"
    },
    {
        id:27,
        image: "/assets/images/mediaGallery/tc-5357.jpg"
    },
    {
        id:28,
        image: "/assets/images/mediaGallery/tc-5184.jpg"
    },
    {
        id:29,
        image: "/assets/images/mediaGallery/tc-4778.jpg"
    },
    {
        id:30,
        image: "/assets/images/mediaGallery/tc-4420.jpg"
    },
    {
        id:31,
        image: "/assets/images/mediaGallery/tc-4315.jpg"
    },
    {
        id:32,
        image: "/assets/images/mediaGallery/tc-3885.jpg"
    },
    {
        id:33,
        image: "/assets/images/mediaGallery/tc-3801.jpg"
    },
    {
        id:34,
        image: "/assets/images/mediaGallery/tc-3797.jpg"
    },
    {
        id:35,
        image: "/assets/images/mediaGallery/tc-3714.jpg"
    },
    {
        id:36,
        image: "/assets/images/mediaGallery/tc-3632.jpg"
    },
    {
        id:37,
        image: "/assets/images/mediaGallery/tc-3544.jpg"
    },
    {
        id:38,
        image: "/assets/images/mediaGallery/tc-1785.jpg"
    },
    {
        id:39,
        image: "/assets/images/mediaGallery/tc-1764.jpg"
    },
    {
        id:40,
        image: "/assets/images/mediaGallery/tc-0496.jpg"
    },
    {
        id:41,
        image: "/assets/images/mediaGallery/tc-0447.jpg"
    },
    {
        id:42,
        image: "/assets/images/mediaGallery/tc-0420.jpg"
    },
    {
        id:43,
        image: "/assets/images/mediaGallery/tc-0405.jpg"
    },
    {
        id:44,
        image: "/assets/images/mediaGallery/tc-0342.jpg"
    },
    {
        id:45,
        image: "/assets/images/mediaGallery/tc-0309.jpg"
    },
    {
        id:46,
        image: "/assets/images/mediaGallery/tc-0262.jpg"
    },
    {
        id:47,
        image: "/assets/images/mediaGallery/tc-0214.jpg"
    },
    {
        id:48,
        image: "/assets/images/mediaGallery/tc-0104.jpg"
    },
    {
        id:49,
        image: "/assets/images/mediaGallery/tc-0046.jpg"
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
                            {item.video && (
                        <div className="mfp-iframe video-play-btn" title="Play Video" style={{ position: 'absolute', top: '50%', left: '50%', fontSize: '2em', color: '#ffffff'}}>
                            <i className="fa fa-play"></i>
                                </div>
                            )}
                            <img src={item.image} alt="" />
                            <a href={item.video || item.image} className="glightbox">
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
