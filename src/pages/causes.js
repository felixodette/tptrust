import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Causes from "../components/Causes";
import Footer from "../components/Footer";

const CausesPage = () => {
    return (
        <Layout pageTitle="TP Trust | Support a Child">
            <NavOne />
            <PageHeader title="Support a Child" />
            <Causes />
            <Footer />
        </Layout>
    );
};

export default CausesPage;
