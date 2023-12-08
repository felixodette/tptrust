import React, { useState, useEffect } from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import BlogSingle from "../components/BlogSingle";
import { useParams } from "react-router-dom";
import MyJson from "../data/data.json";

const BlogSinglePage = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const blogData = MyJson.blog.find(item => item.id === parseInt(id));
        setBlog(blogData);
    }, [id]);

    if (!blog) {
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
        <Layout pageTitle={`TP Trust | ${blog.title}`}>
            <NavOne />
            <PageHeader title={`${blog.title}`} />
            <BlogSingle title={blog.title} date={blog.date} text={blog.text} picture_blog={blog.picture_blog} />
            <Footer />
        </Layout>
    );
};

export default BlogSinglePage;
