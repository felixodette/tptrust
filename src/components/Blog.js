import React, { useState, useEffect } from 'react';
import BlogItem from './Blog-Item';
// import MyJson from '../data/data.json';
import dropinblogConfig from '../configs/dropinblog-config';

const Blog = () => {

    const [posts, setPosts] = useState([]);

    const apiKey = dropinblogConfig.apiKey;

    useEffect(() => {
        const allPostsUrl = `https://api.dropinblog.com/v1/json/?b=${apiKey}&limit=all&includecontent=0`;

        fetch(allPostsUrl)
            .then((response) => response.json())
            .then((res) => {
                const allPosts = res.data.posts;
                setPosts(allPosts);

            })
            .catch((error) => console.error("Error:", error));
    }, [apiKey]);
    return (
        <section className="blog-area blog-area2">
            <div className="container">
                <div className="row recent-post-wrap">
                    {
                        posts.map((post) => {
                            return <BlogItem key={post.slug} title={post.title} date={post.publishedAt} preview={post.content}
                                             picture={post.featuredImage} id={post.slug}/>
                        })
                    }
                </div>
            </div>
        </section> 
    );
};

export default Blog;
