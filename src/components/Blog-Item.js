import React from 'react';
import {Link} from 'react-router-dom';

const BlogItem = ({date, preview, title, picture, id}) => {
    return (
        <div className="col-lg-6 col-sm-6">
            <div className="recent-item">
                <div className="recent__img">
                    <span className="meta__date-date">{date}</span>
                    <img src={picture} alt="service"/>
                </div>
                <div className="news__content">
                    <h3 className="news__content-title"><Link to={`/blog-detail/${id}`}><a href="#/">{title}</a></Link></h3>
                    <ul className="news__content-list">
                        <li className="news__content-active__dot"><a href="#/">mike hardson</a></li>
                        <li><a href="#/">3 comments</a></li>
                    </ul>
                    <p className="news__content-text">
                        {preview}
                    </p>
                    <Link to={`/blog-detail/${id}`}><a href="#/" className="theme-btn">read more</a></Link>
                </div>
            </div>
        </div>
    );
}

export default BlogItem;
