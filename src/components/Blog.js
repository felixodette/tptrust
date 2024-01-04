import React, { useState, useEffect } from 'react';
import BlogItem from './Blog-Item';
import axios from 'axios';
import { API_ENDPOINTS } from '../configs/blogsConfig';


const extractTextFromHtml = (html) => {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || "";
};

const extractImageUrlFromHtml = (html) => {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  const imgElement = doc.body.querySelector('img');
  return imgElement ? imgElement.src : "";
};

const Blog = () => {

    const [posts, setPosts] = useState([]);

    // const apiKey = dropinblogConfig.apiKey;

    // useEffect(() => {
    //     const allPostsUrl = `https://api.dropinblog.com/v1/json/?b=${apiKey}&limit=all&includecontent=0`;

    //     fetch(allPostsUrl)
    //         .then((response) => response.json())
    //         .then((res) => {
    //             const allPosts = res.data.posts;
    //             setPosts(allPosts);

    //         })
    //         .catch((error) => console.error("Error:", error));
    // }, [apiKey]);

    useEffect(() => {
      const fetchWordPressPosts = async (url) => {
        try {
          const response = await axios.get(url);
          
          // Limit to only 2 posts
        const limitedPosts = response.data.posts.slice(0, 2);
        // setPosts(limitedPosts);

        // Extracting text content and image URL from HTML
        const postsWithExtractedContent = limitedPosts.map(post => ({
          ...post,
          contentText: extractTextFromHtml(post.content),
          imageUrl: extractImageUrlFromHtml(post.content)
        }));

        setPosts(postsWithExtractedContent);

        console.log('Fetched Blog Posts:', limitedPosts);
      } catch (error) {
        console.error('Error fetching WordPress posts:', error);
      }
    };
      fetchWordPressPosts(API_ENDPOINTS.FETCH_ALL_POSTS);
    }, []);


    return (
        <section className="blog-area blog-area2">
            <div className="container">
                <div className="row recent-post-wrap">
                    {
                        posts.map((post) => {
                            return <BlogItem key={post.slug} title={post.title} author={post.author} date={post.publishedAt} preview={post.contentText}
                                             picture={post.featured_image} id={post.slug}/>
                        })
                    }
                </div>
            </div>
        </section> 
    );
};

export default Blog;
