import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import AboutArea from "../components/AboutArea";
import MixerAreaTwo from "../components/MixerAreaTwo";
import TeamArea from "../components/TeamArea";
import FaqArea from "../components/FaqArea";
import ServiceArea from "../components/ServiceArea";
// import ClientsLogoTwo from "../components/ClientsLogoTwo";
import Footer from "../components/Footer";
import CustomizedTimeline from "../components/Timeline";
import EntryArea from "../components/EntryArea";
import HistoryArea from "../components/HistoryArea";

const AboutPage = () => {
    return (
        <Layout pageTitle="TP Trust | Who We Are">
            <NavOne />
            <PageHeader title="Who We Are" />
            <HistoryArea />
            {/*<ServiceArea />*/}
            <EntryArea />
            {/*<MixerAreaTwo />*/}
            <CustomizedTimeline />
            {/*<TeamArea />*/}
            {/*<FaqArea />*/}
            {/*<ClientsLogoTwo />*/}
            <Footer />
        </Layout>
    );
};

export default AboutPage;
