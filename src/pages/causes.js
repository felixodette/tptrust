import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Causes from "../components/Causes";
import Footer from "../components/Footer";

const CausesPage = () => {
    return (
        <Layout pageTitle="TP Trust | Christmas Gifts">
            <NavOne />
            <PageHeader title="Christmas Gifts" />
            <Causes />
            <Footer />
        </Layout>
    );
};

export default CausesPage;
