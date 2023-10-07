import React,{useEffect} from 'react';
import GLightbox from 'glightbox';

const galleryImagesNames = [
    "tc-9991.jpg",
"tc-9987.jpg",
"tc-9984.jpg",
"tc-9982.jpg",
"tc-9971.jpg",
"tc-9953.jpg",
"tc-9927.jpg",
"tc-9901.jpg",
"tc-9855.jpg",
"tc-9707.jpg",
"tc-9982.jpg",
"tc-9703.jpg",
"tc-9689.jpg",
"tc-7753.jpg",
"tc-7729.jpg",
"tc-7629.jpg",
"tc-7622.jpg",
"tc-7620.jpg",
"tc-7608.jpg",
"tc-5357.jpg",
"tc-5184.jpg",
"tc-4778.jpg",
"tc-4420.jpg",
"tc-4315.jpg",
"tc-3885.jpg",
"tc-3801.jpg",
"tc-3797.jpg",
"tc-3714.jpg",
"tc-3632.jpg",
"tc-3544.jpg",
"tc-1785.jpg",
"tc-1764.jpg",
"tc-0496.jpg",
"tc-0447.jpg",
"tc-0420.jpg",
"tc-0405.jpg",
"tc-0342.jpg",
"tc-0309.jpg",
"tc-0262.jpg",
"tc-0214.jpg",
"tc-0104.jpg",
"tc-0046.jpg",
]

const galleryImgArray = galleryImagesNames.map((name) => ({image: `/assets/images/mediaGallery/${name}`, id: 15}))
// console.log(galleryImgArray);





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

];


const combinedArray = galleryItems.concat(galleryImgArray);
console.log(combinedArray);



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

                    {combinedArray.map((item)=>(
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
