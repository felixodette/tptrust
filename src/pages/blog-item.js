import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
// import NewsSingle from "../components/NewsSingle";
import BlogSingle from "../components/BlogSingle";
import { useParams } from "react-router-dom";
import MyJson from "../data/data.json";

const BlogSinglePage = () => {
    const { id } = useParams();
    const blog = MyJson.blog.find((blog) => Number(blog.id) === Number(id));

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
            <PageHeader title="Blog Details" />
            <BlogSingle />
            <BlogSingle title={blog.title} date={blog.date} text={blog.text} />
            <Footer />
        </Layout>
    );
};

export default BlogSinglePage;
