import React, {Component} from 'react';
import { Outlet, Link } from 'react-router-dom';

class NavOne extends Component {
  constructor(){
    super()
    this.state = {
      sticky: false
    };
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('click', this.handleActive);

    //Mobile Menu
    this.mobileMenu();
  }

  handleScroll = () => {

    if (window.scrollY > 100) {
      this.setState({
        sticky: true
      });
    } else if (window.scrollY < 100) {
      this.setState({
        sticky: false
      });
    }

  }

  handleActive = (e) => {
    let navLinks = document.querySelectorAll("Link");
    navLinks.forEach((el) => {
      el.classList.remove("active");
    });
    e.target.classList.add("active");
  }

  mobileMenu = () => {
    //Mobile Menu Toggle
    let mainNavToggler = document.querySelector(".mobile-menu-toggle");
    let mainNav = document.querySelector(".side-nav-container");

    mainNavToggler.addEventListener("click", function () {
      mainNav.classList.add('active');
    });

    //Close Mobile Menu
    let closeMenu = document.querySelector(".side-menu-close");
    closeMenu.addEventListener("click", function () {
      mainNav.classList.remove('active');
    });

  }

  render() {
    return (
      <>
      <div>
        <header className="header-area">
          <div className="header-top-action">
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                  <div className="top-action-content">
                    <div className="info-box info-box-1 d-flex align-items-center">
                      <ul className="d-flex align-items-center">
                        <li><a href="#/"><i className="fa fa-envelope"></i>info@tptrust.org</a></li>
                        <li><a href="#/"><i className="fa fa-phone-square"></i>+254 794 402 478</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="top-action-content info-action-content">
                    <div className="info-box info-box-2 d-flex align-items-center justify-content-end">
                      <ul className="top-action-list d-flex align-items-center">
                        <li className="action__text"><a href="#/">login</a></li>
                        <li className="action__text"><a href="#/">register</a></li>
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
          </div>
          <div className={`header-top header-menu-action ${this.state.sticky ? 'header-fixed' : ''}`}>
            <div className="container">
              <div className="row ostion-top-wrap">
                <div className="col-lg-5 col-sm-5 site-branding">
                  <div className="logo-action d-flex align-items-center">
                    <div className="ostion-logo">
                      <Link to="/">

                          <img src="/assets/images/finale-logo.png" alt="TPTrust" title="TPTrust"></img>

                      </Link>
                    </div>
                    <div className="header-btn ml-auto">
                      <Link to="/donate">
                        <a href="#/" className="theme-btn text-light">donate now</a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-sm-7 ostion-menu">
                  <div className="ostion-menu-innner">
                    <div className="ostion-menu-content">
                      <div className="navigation-top">
                        <nav className="main-navigation">
                          <ul>
                            <li className="active"><Link to="/">Home</Link>
                              {/*<ul className="dropdown-menu-item">*/}
                              {/*  <li><Link to="/">Home 1</Link></li>*/}
                              {/*  <li><Link to="/index2">Home 2</Link></li>*/}
                              {/*</ul>*/}
                            </li>
                            <li><a href="#/">about</a>
                              <ul className="dropdown-menu-item">
                                <li><Link to="/about">about us</Link></li>
                                <li><Link to="/team">our team</Link></li>
                                <li><Link to="/gallery">gallery</Link></li>
                                <li><Link to="/volunteer">become a volunteer</Link></li>
                                <li><Link to="/sponsor">sponsors</Link></li>
                              </ul>
                            </li>
                            <li><a href="#/">our work</a>
                              <ul className="dropdown-menu-item">
                                <li><Link to="/pre-school">Pre School</Link></li>
                                <li><Link to="/school-transition">School Transition</Link></li>
                                <li><Link to="/foundations-of-hope">Foundations of Hope</Link></li>
                                <li><Link to="/community-library">Community Library</Link></li>
                                <li><Link to="/school-support">School Support</Link></li>
                                <li><Link to="/where-we-work">Where We Work</Link></li>
                                <li><Link to="/causes">causes</Link></li>
                                <li><Link to="/causes-detail">causes detail</Link></li>
                                <li><Link to="/donate">donate now</Link></li>
                              </ul>
                            </li>
                            <li><a href="#/">events</a>
                              <ul className="dropdown-menu-item">
                                <li><Link to="/events">events</Link></li>
                                <li><Link to="/events-detail">events detail</Link></li>
                              </ul>
                            </li>
                            <li><a href="#/">Blog</a>
                              <ul className="dropdown-menu-item">
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/blog-detail/:id">Blog detail</Link></li>
                              </ul>
                            </li>
                            <li><Link to="/contact">contact</Link></li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                    <div className="mobile-menu-toggle">
                      <i className="fa fa-bars"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="side-nav-container">
            <div className="humburger-menu">
              <div className="humburger-menu-lines side-menu-close"></div>
            </div>
            <div className="side-menu-wrap">
              <ul className="side-menu-ul">
                <li className="sidenav__item"><a href="/">home</a>
                  <span className="menu-plus-icon"></span>
                  {/*<ul className="side-sub-menu">*/}
                  {/*  <li><Link to="/">Home 1</Link></li>*/}
                  {/*  <li><Link to="/index2">Home 2</Link></li>*/}
                  {/*</ul>*/}
                </li>
                <li className="sidenav__item"><a href="#/">about</a>
                  <span className="menu-plus-icon"></span>
                  <ul className="side-sub-menu">
                    <li><Link to="/about">about</Link></li>
                    <li><Link to="/team">our team</Link></li>
                    <li><Link to="/volunteer">volunteer</Link></li>
                  </ul>
                </li>
                <li className="sidenav__item"><a href="#/">our work</a>
                  <span className="menu-plus-icon"></span>
                  <ul className="side-sub-menu">
                    <li><Link to="/pre-school">pre school</Link></li>
                    <li><Link to="/school-transition">school transition</Link></li>
                    <li><Link to="/foundations-of-hope">foundations of hope</Link></li>
                    <li><Link to="/community-library">community library</Link></li>
                    <li><Link to="/school-support">school support</Link></li>
                    <li><Link to="/where-we-work">where we work</Link></li>
                  </ul>
                </li>
                {/*<li className="sidenav__item"><a href="#/">causes</a>*/}
                {/*  <span className="menu-plus-icon"></span>*/}
                {/*  <ul className="side-sub-menu">*/}
                {/*    <li><Link to="/causes">causes</Link></li>*/}
                {/*    <li><Link to="/causes-detail">causes details</Link></li>*/}
                {/*    <li><Link to="/donate">donate now</Link></li>*/}
                {/*  </ul>*/}
                {/*</li>*/}
                <li className="sidenav__item"><a href="#/">event</a>
                  <span className="menu-plus-icon"></span>
                  <ul className="side-sub-menu">
                    <li><Link to="/events">events</Link></li>
                    <li><Link to="/events-detail">events detail</Link></li>
                  </ul>
                </li>
                <li className="sidenav__item"><a href="#/">blog</a>
                  <span className="menu-plus-icon"></span>
                  <ul className="side-sub-menu">
                    <li><Link to="/blog">blog</Link></li>
                    <li><Link to="/blog-detail">blog detail</Link></li>
                  </ul>
                </li>
                {/*<li className="sidenav__item"><a href="#/">pages</a>*/}
                {/*  <span className="menu-plus-icon"></span>*/}
                {/*  <ul className="side-sub-menu">*/}
                {/*    <li><Link to="/gallery">gallery</Link></li>*/}
                {/*    <li><Link to="/sponsor">sponsors</Link></li>*/}
                {/*  </ul>*/}
                {/*</li>*/}
                <li className="sidenav__item"><Link to="/contact">contact</Link></li>
              </ul>
              <ul className="side-social">
                <li><a href="#/"><i className="fa fa-facebook"></i></a></li>
                <li><a href="#/"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#/"><i className="fa fa-youtube-play"></i></a></li>
                <li><a href="#/"><i className="fa fa-google-plus"></i></a></li>
              </ul>
              <div className="side-btn">
                <Link to="/donate"><a href="#/" className="theme-btn">donate now</a></Link>
              </div>
            </div>
          </div>
        </header>
      </div>

      <Outlet />
    </>
    );
  }
}

export default NavOne;
