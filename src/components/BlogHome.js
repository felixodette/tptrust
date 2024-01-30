import React, { useState, useEffect } from 'react';
import data from '../data/data.json';
import {Link} from "react-router-dom";

const BlogHome = () => {
    const [posts, setPosts] = useState([]);
    const [specialPost, setSpecialPost] = useState(null);

    useEffect(() => {
        const sortedPosts = data.blog.sort((a,b) => new Date(b.date) - new Date(a.date));
        const filteredPosts = sortedPosts.filter(post => post.id !== 1);

        const specialPost = sortedPosts.find(post => post.id === 1);
        setSpecialPost(specialPost);

        setPosts(filteredPosts.slice(0, 3));
    }, []);

    return (
        <section className="blog-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center">
                        <div className="section-heading blog-heading">
                            <div className="section-icon">
                                <img src="/assets/images/section-icon.png" alt="section-icon" />
                            </div>
                            <h2 className="section__title">Recent Blog Posts</h2>
                            <p className="section__meta">news and updates</p>
                        </div>
                    </div>
                </div>
                <div className="row recent-post-wrap">
                    <div className="col-lg-6">
                        {
                            specialPost && (
                                <div className="recent-item">
                                    <div className="recent__img">
                                        <span className="meta__date-date">{specialPost.date}</span>
                                        <img src={specialPost.picture} alt="service" />
                                    </div>
                                    <div className="news__content">
                                        <Link to={`/blog-detail/${specialPost.id}`}><h3 className="news__content-title"><a href="#/">{specialPost.title}</a></h3></Link>
                                        <ul className="news__content-list">
                                            <li className="news__content-active__dot"><a href="#/">mike hardson</a></li>
                                            <li><a href="#/">3 comments </a></li>
                                        </ul>
                                        <p className="news__content-text">
                                            {specialPost.preview}
                                        </p>
                                        <Link to={`/blog-detail/${specialPost.id}`}><a href="#/" className="theme-btn">read more</a></Link>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className="col-lg-6">
                        <div className="third-recent-box">
                            <ul className="third-recent-item">
                                {
                                    posts.map(post => (
                                        <li key={post.id}>
                                            <div className="recent__img">
                                                <a href="/blog-item.js"><img style={{width: 170, height: 137}} src={post.picture} alt="" /></a>
                                            </div>
                                            <div className="recent__content">
                                                <span>{post.date}</span>
                                                <Link to={`/blog-detail/${post.id}`}><h4><a href="#/">{post.title}</a></h4></Link>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogHome;
