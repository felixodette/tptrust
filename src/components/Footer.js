import React, {Component} from 'react';
import { Outlet, Link } from 'react-router-dom';

class Footer extends Component {
    constructor(){
        super()
        this.state = {
          scrollBtn: false
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {

      if (window.scrollY > 100) {
        this.setState({
            scrollBtn: true
        });
      } else if (window.scrollY < 100) {
        this.setState({
            scrollBtn: false
        });
      }

    }

    scrollTop = () => {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <>
                <div>
                    <section className="footer-area">
                        <div className="newsletter-area">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 mx-auto text-center">
                                        <div className="section-heading footer-heading">
                                            <div className="section-icon">
                                                <img src="/assets/images/section-icon.png" alt="section-icon" />
                                            </div>
                                            <h2 className="section__title text__white">Newsletter</h2>
                                            <p className="section__meta">stay updated</p>
                                        </div>
                                        <div className="newsletter-form">
                                            <div className="form-shared">
                                                <form action="#/">
                                                    <div className="row">
                                                        <div className="col-lg-9">
                                                            <div className="form-group">
                                                                <input type="email" className="form-control"
                                                                       placeholder="Email address" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <button className="theme-btn submit__btn"
                                                                    type="submit">subscribe
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-top">
                            <div className="container">
                                <div className="row footer-widget-wrap">
                                    <div className="col footer-item footer-item1">
                                        <h3 className="widget__title">about</h3>
                                        <ul className="foot__links">
                                            <Link to="/about"><li><a href="#/">about us</a></li></Link>
                                            <Link to="/team"><li><a href="#/">our team</a></li></Link>
                                            <Link to="/volunteer"><li><a href="#/">volunteer</a></li></Link>
                                            <Link to="/gallery"><li><a href="#/">gallery</a></li></Link>
                                            <Link to="/sponsor"><li><a href="#/">partners</a></li></Link>
                                        </ul>
                                    </div>
                                    {/*<div className="col footer-item footer-item2">*/}
                                    {/*    <h3 className="widget__title">explore</h3>*/}
                                    {/*    <ul className="foot__links">*/}
                                    {/*        <li><a href="#/">Press Release</a></li>*/}
                                    {/*        <Link to="/contact"><li><a href="#/">contact</a></li></Link>*/}
                                    {/*        <Link to="/blog"><li><a href="#/">Blog Posts</a></li></Link>*/}
                                    {/*        <li><a href="#/">Social Connect</a></li>*/}
                                    {/*        <li><a href="#/">Help Topics</a></li>*/}
                                    {/*    </ul>*/}
                                    {/*</div>*/}
                                    <div className="col footer-item footer-item3">
                                        <h3 className="widget__title">Downloads</h3>
                                        <ul className="foot__links">
                                            <li><a href="/assets/documents/Gift%20Aid%20Declaration%202021.doc">Gift Aid Declaration</a></li>
                                            <li><a href="/assets/documents/Impact-Report-2022.pdf">Impact Report 2022</a></li>
                                            <li><a href="/assets/documents/Impact-Report-2021.pdf">Impact Report 2021</a></li>
                                            <li><a href="/assets/documents/Impact-Report-2020.pdf">Impact Report 2020</a></li>
                                            <li><a href="/assets/documents/Impact-Report-2019.pdf">Impact Report 2019</a></li>
                                        </ul>
                                    </div>
                                    <div className="col footer-item footer-item3">
                                        <h3 className="widget__title">Our Work</h3>
                                        <ul className="foot__links">
                                            <Link to="/pre-school"><li><a href="#/">ECD Programme</a></li></Link>
                                            <Link to="/school-transition"><li><a href="#/">School transition</a></li></Link>
                                            <Link to="/foundations-of-hope"><li><a href="#/">Fountains of hope</a></li></Link>
                                            <Link to="/community-library"><li><a href="#/">Community library</a></li></Link>
                                        </ul>
                                    </div>
                                    <div className="col footer-item footer-item4">
                                        <h3 className="widget__title">contact</h3>
                                        <ul className="contact__info">
                                            <li>Yaya Center, Nairobi</li>
                                            <li><a href="mailto:info@tptrust.org">info@tptrust.org</a></li>
                                            <li><a href="tel:0794402478"> +254 794 402 478</a></li>
                                        </ul>
                                        <div className="footer__social">
                                            <ul>
                                                <li><a href="https://twitter.com/tptrust" target="_blank"><i className="fa fa-twitter"></i></a></li>
                                                <li><a href="https://www.facebook.com/tptrust" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                                <li><a href="https://www.linkedin.com/company/tptrust/" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                                                <li><a href="https://www.instagram.com/tptrustkenya/" target="_blank"><i className="fa fa-instagram"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row footer-widget-wrap">
                            {/*<div className="col footer-item footer-item1"></div>*/}
                            <div className="col footer-item footer-item2">
                                <img src="/assets/images/siteVisitVerified_large.png" style={{height: 100, width: 100, left: 250, position: "relative", top: -50}} alt="site verified" />
                                <img src="/assets/images/projectoftheMonth_large.png" style={{height: 100, width: 100, left: 390, position: "relative", top: -50}} alt="project of the month" />
                                <img src="/assets/images/vetted_large.png" style={{height: 100, width: 100, left: 530, position: "relative", top: -50}} alt="project of the month" />
                            </div>
                        </div>
                        <div className="footer-copyright">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="copyright-desc">
                                            <p>© Copyright 2023 by <a href="#/">tptrust.org</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div onClick={this.scrollTop} id="back-to-top" className={this.state.scrollBtn ? 'back-btn-shown' : ''}>
                        <i className="fa fa-angle-up" title="Go top"></i>
                    </div>
                </div>
                <Outlet />
            </>

        );
    }
}

export default Footer;
