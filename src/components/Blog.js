import React, { useState, useEffect } from "react";
import BlogItem from "./Blog-Item";
import { API_ENDPOINTS } from "../configs/blogsConfig";
import { generateLocalDate } from "../utils/common-functions";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const allPostsUrl = API_ENDPOINTS.FETCH_ALL_POSTS;

    fetch(allPostsUrl)
      .then((response) => response.json())
      .then((res) => {
        const allPosts = res.posts;
        setPosts(allPosts);
      })
      .catch((error) => console.error("Error:", error));
  }, []);
  return (
    <section className="blog-area blog-area2">
      <div className="container">
        <div className="row recent-post-wrap">
          {posts.map((post) => {
            return (
              <BlogItem
                key={post.slug}
                title={post.title}
                date={generateLocalDate(post.date)}
                preview={post.excerpt}
                picture={post.featured_image}
                id={post.ID}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
