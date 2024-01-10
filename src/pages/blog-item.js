import React, { useState, useEffect } from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import BlogSingle from "../components/BlogSingle";
import { useParams } from "react-router-dom";
import { API_ENDPOINTS } from '../configs/blogsConfig';

const BlogSinglePage = () => {
    const { id } = useParams();
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
  }, [id]);

  const post = posts.find((post) => post.slug === id);

    if (!post) {
        return (
            <Layout>
                <NavOne />
                <PageHeader title="Blog Details" />
                <p>Blog not found</p>
                <Footer />
            </Layout>
        )
    }

    return (
        <Layout pageTitle={`TP Trust | ${post.title}`}>
            <NavOne />
            <PageHeader title={`${post.title}`} />
            <BlogSingle title={post.title} date={post.date} text={post.content} picture_blog={post.featured_image} />
            <Footer />
        </Layout>
    );
};

export default BlogSinglePage;





