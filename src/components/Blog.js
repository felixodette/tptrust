import React from 'react';
import BlogItem from './Blog-Item';
import MyJson from '../data/data.json';

const Blog = () => {
    return (
        <section className="blog-area blog-area2">
            <div className="container">
                <div className="row recent-post-wrap">
                    {
                        MyJson.blog.map((item, index) => {
                            return <BlogItem key={index} title={item.title} date={item.date} preview={item.preview}
                                             picture={item.picture} id={item.id}/>
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Blog;
