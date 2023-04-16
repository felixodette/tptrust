import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      phone,
      message,
    };

    try {
      const response = await fetch('../components/SendEmail.js', {
        method: 'POST',
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Message sent successfully');
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      } else {
        alert('Message failed to send');
      }
    } catch(error) {
      console.error(error);
      alert('Failed to send message');
    }
  };

  return (
    <section className="contact-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-heading">
              <div className="section-icon">
                <img src="/assets/images/section-icon.png" alt="section-icon"/>
              </div>
              <h2 className="section__title">Get in Touch With Us</h2>
              <p className="section__meta">Write a message</p>
              <p className="section__desc">
                We would love to hear from you! If you have any questions or would like to get involved with Turning
                Point Trust, please do not hesitate to get in touch with us. You can fill out the contact form on our
                website or send us an email at <a href="mailto:info@tptrust.org">info@tptrust.org</a>. Let's work together to empower vulnerable
                children and families in Kibera, Kenya.
              </p>
              <ul className="section__list">
                <li><a href="#/"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#/"><i className="fa fa-facebook"></i></a></li>
                <li><a href="#/"><i className="fa fa-pinterest"></i></a></li>
                <li><a href="#/"><i className="fa fa-instagram"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-shared">
              <form onSubmit={handleSubmit} action="mailto:info@tptrust.org" method="post">
                <div className="row">
                  <div className="col-lg-6 col-sm-6 form-group">
                    <input className="form-control" type="text" name="name" placeholder="Full Name"/>
                  </div>

                  <div className="col-lg-6 col-sm-6 form-group">
                    <input className="form-control" type="email" name="email"
                           placeholder="Email Address"/>
                  </div>

                  <div className="col-lg-12 form-group">
                    <input className="form-control" type="number" name="phone"
                           placeholder="Phone Number"/>
                  </div>

                  <div className="col-lg-12 col-sm-12 form-group">
                                        <textarea className="textarea" name="message"
                                                  placeholder="Write a Message"></textarea>
                  </div>

                  <div className="col-lg-12 col-sm-12">
                    <button className="theme-btn submit__btn" type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row contact-detail-action">
          <div className="col-lg-4">
            <div className="contact-item contact-item1">
              <h3 className="contact__title">Kenya</h3>
              <p className="contact__desc">
                The Turning Point Trust
                PO BOX 76392-00508, Yaya Centre
                Nairobi, Kenya.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="contact-item contact-item2">
              <h3 className="contact__title">United Kingdom</h3>
              <p className="contact__desc">
                The Turning Point Trust c/o Christ Church, Surrey <br />
                United Kingdom, GU21 6YG
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="contact-item contact-item3">
              <h3 className="contact__title">Contact</h3>
              <p className="contact__desc">
                <a href="mailto:info@tptrust.org">info@tptrust.org</a> <br/>
                +254 794 402 478
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
