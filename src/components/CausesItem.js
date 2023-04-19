import React from 'react';
import { Link } from 'react-router-dom';

const CausesItem = ({ itemVal, causeTitle, causePreview, goal, raised, id }) => {
    return (
        <div className="col-lg-4">
            <div className="blog-content">
                <div className={`blog-item blog-item${itemVal}`}>
                    <div className="blog-img">
                        <img src="/assets/images/img1.jpg" alt="" />
                    </div>
                    <div className="blog-inner-content">
                        <h3 className="blog__title"><Link to={`/causes-detail/${id}`}><a href="#/">{causeTitle}</a></Link></h3>
                        <p className="blog__desc">{causePreview}</p>
                        <ul className="blog__list">
                            <li><i className="icon-target"></i> Goal: <span>${goal}</span></li>
                            <li><i className="fa fa-line-chart"></i> Raised: <span>{raised}</span></li>
                        </ul>
                        <Link to="/donate"><a href="#/" className="theme-btn">donate now</a></Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CausesItem;
