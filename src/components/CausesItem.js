import React from 'react';
import { Link } from 'react-router-dom';

const CausesItem = ({ itemVal, causeTitle, causePreview, donatePound,donateKsh, mpesaDetails, id, img }) => {
    return (
        <div className="col-lg-6">
            <div className="blog-content d-flex h-100">
                <div className={`blog-item blog-item${itemVal} card flex-fill`}>
                    <div className="blog-img">
                        <img src={img} alt="" />
                    </div>
                    <div className="blog-inner-content card-body">
                        <h3 className="blog__title"><Link to={`/causes-detail/${id}`}><a href="#/">{causeTitle}</a></Link></h3>
                        <p className="blog__desc">{causePreview}</p>
                        <ul className="blog__list">
                            <li><i className="icon-target"></i> Donate: <span>Ksh {donateKsh} /</span> <span>£{donatePound}</span></li>
                            <li><i className="fa fa-line-chart"></i> MPESA: <span>Paybill: {mpesaDetails.paybill}; {mpesaDetails.account}</span>
                            </li>
                        </ul>
                        <a href="https://www.globalgiving.org/donate/4620/the-turning-point-trust/" target="_blank" className="theme-btn">donate now</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CausesItem;
