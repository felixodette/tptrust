import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
// import News from "../components/News";
import Blog from "../components/Blog";

const BlogPage = () => {
    return (
        <Layout pageTitle="TP Trust | Blog">
            <NavOne />
            <PageHeader title="Blog" />
            {/*<News />*/}
            <Blog />
            <Footer />
        </Layout>
    );
};

export default BlogPage;
