import React from 'react';
import MyJson from "../data/data.json";
import { Link } from "react-router-dom";
const Sponsor = () => {
    return (
        <section className="sponsor-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        {
                            MyJson.sponsors.map((item, index) => {
                                return (
                                    <div key={index} className="sponsor-wrap">
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <div className={`logo-item logo-item${item.id}`} style={{display: "flex", height: 35, alignItems: "center", justifyContent: "center"}}>
                                                    <img src={`${item.logo}`} style={{width: 130, height: "auto"}} alt="" />
                                                </div>
                                            </div>
                                            <div className="col-lg-9">
                                                <div className="sponsor-item">
                                                    <Link to={`${item.website}`} target="_blank" rel="noopener noreferrer"><h3 className="sponsor__title">{item.name}</h3></Link>
                                                    <span className="sponsor__meta">{item.location}</span>
                                                    <p className="sponsor__text">{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        {/*<div className="sponsor-wrap">*/}
                        {/*    <div className="row">*/}
                        {/*        <div className="col-lg-3">*/}
                        {/*            <div className="logo-item logo-item2">*/}
                        {/*                <img src="/assets/images/client-logo2.png" alt="" />*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div className="col-lg-9">*/}
                        {/*            <div className="sponsor-item">*/}
                        {/*                <h3 className="sponsor__title">Company name here 01</h3>*/}
                        {/*                <span className="sponsor__meta">brisbane, australia</span>*/}
                        {/*                <p className="sponsor__text">*/}
                        {/*                    Phasellus vehicul justo eget diam dosuere sollicitudin eu tincidun.*/}
                        {/*                    Lorem Ipsum is simply dummy text of the printing and typesetting*/}
                        {/*                    industry been the industry's standard dummy text ever since.*/}
                        {/*                </p>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="sponsor-wrap">*/}
                        {/*    <div className="row">*/}
                        {/*        <div className="col-lg-3">*/}
                        {/*            <div className="logo-item logo-item3">*/}
                        {/*                <img src="/assets/images/client-logo2.png" alt="" />*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div className="col-lg-9">*/}
                        {/*            <div className="sponsor-item">*/}
                        {/*                <h3 className="sponsor__title">Company name here 01</h3>*/}
                        {/*                <span className="sponsor__meta">brisbane, australia</span>*/}
                        {/*                <p className="sponsor__text">*/}
                        {/*                    Phasellus vehicul justo eget diam dosuere sollicitudin eu tincidun.*/}
                        {/*                    Lorem Ipsum is simply dummy text of the printing and typesetting*/}
                        {/*                    industry been the industry's standard dummy text ever since.*/}
                        {/*                </p>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="sponsor-wrap">*/}
                        {/*    <div className="row">*/}
                        {/*        <div className="col-lg-3">*/}
                        {/*            <div className="logo-item logo-item4">*/}
                        {/*                <img src="/assets/images/client-logo2.png" alt="" />*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div className="col-lg-9">*/}
                        {/*            <div className="sponsor-item">*/}
                        {/*                <h3 className="sponsor__title">Company name here 01</h3>*/}
                        {/*                <span className="sponsor__meta">brisbane, australia</span>*/}
                        {/*                <p className="sponsor__text">*/}
                        {/*                    Phasellus vehicul justo eget diam dosuere sollicitudin eu tincidun.*/}
                        {/*                    Lorem Ipsum is simply dummy text of the printing and typesetting*/}
                        {/*                    industry been the industry's standard dummy text ever since.*/}
                        {/*                </p>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="sponsor-wrap">*/}
                        {/*    <div className="row">*/}
                        {/*        <div className="col-lg-3">*/}
                        {/*            <div className="logo-item logo-item5">*/}
                        {/*                <img src="/assets/images/client-logo2.png" alt="" />*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div className="col-lg-9">*/}
                        {/*            <div className="sponsor-item">*/}
                        {/*                <h3 className="sponsor__title">Company name here 01</h3>*/}
                        {/*                <span className="sponsor__meta">brisbane, australia</span>*/}
                        {/*                <p className="sponsor__text">*/}
                        {/*                    Phasellus vehicul justo eget diam dosuere sollicitudin eu tincidun.*/}
                        {/*                    Lorem Ipsum is simply dummy text of the printing and typesetting*/}
                        {/*                    industry been the industry's standard dummy text ever since.*/}
                        {/*                </p>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sponsor;
