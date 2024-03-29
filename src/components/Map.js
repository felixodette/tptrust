import React from 'react';

const Map = () => {
  return (
    <div>
      <section className="map-area">
        <div id="map">
          {/*<iframe*/}
          {/*  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd" className="map" allowFullScreen="">*/}

          {/*</iframe>*/}
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7906084611245!2d36.79124861550481!3d-1.3004871990514697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1b97c53c0471%3A0x8a1fc26c450b569b!2sTHE%20TURNING%20POINT%20TRUST-KENYA!5e0!3m2!1sen!2ske!4v1680726269055!5m2!1sen!2ske" className="map"
                allowFullScreen=""></iframe>
        </div>
      </section>

      <style jsx>{`
           .map {
                width: 100%;
                height: 100%
           } 
        `}</style>
    </div>
  );
};

export default Map;
