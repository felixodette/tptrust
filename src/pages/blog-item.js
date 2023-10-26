import React, { useState, useEffect } from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import BlogSingle from "../components/BlogSingle";
import { useParams } from "react-router-dom";
import dropinblogConfig from '../configs/dropinblog-config';

const BlogSinglePage = () => {
    const apiKey = dropinblogConfig.apiKey; // Your API key
    const { id } = useParams();
    const [post, setPost] = useState(null);

    
    useEffect(() => {

        const singlePostUrl = `https://api.dropinblog.com/v1/json/post/?b=${apiKey}&post=${id}`
        fetch(singlePostUrl)
      .then((response) => response.json())
      .then((res) => {
        const singleBlog = res.data.post;
        setPost(singleBlog);

      })
      .catch((error) => console.error("Error:", error));
  }, [apiKey]);

    



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
            <BlogSingle title={post.title} date={post.publishedAt} text={post.content} picture_blog={post.featuredImage} />
            <Footer />
        </Layout>
    );
};

export default BlogSinglePage;
