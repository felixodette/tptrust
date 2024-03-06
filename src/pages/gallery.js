import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
// import CallToActionTwo from "../components/CallToActionTwo";

const GalleryPage = () => {
    return (
        <Layout pageTitle="TP Trust | Media Center">
            <NavOne />
            <PageHeader title="Media Center" />
            <Gallery />
            {/*<CallToActionTwo />*/}
            <Footer />
        </Layout>
    );
};

export default GalleryPage;
