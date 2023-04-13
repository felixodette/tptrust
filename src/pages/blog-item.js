import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
// import NewsSingle from "../components/NewsSingle";
import BlogSingle from "../components/BlogSingle";

const BlogSinglePage = () => {
    return (
        <Layout pageTitle="TP Trust | Blog Details">
            <NavOne />
            <PageHeader title="Blog Details" />
            <BlogSingle />
            <Footer />
        </Layout>
    );
};

export default BlogSinglePage;
