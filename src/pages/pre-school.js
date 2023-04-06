import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import AboutDetails from "../components/AboutDetails";
import MixerAreaTwo from "../components/MixerAreaTwo";
// import TeamArea from "../components/TeamArea";
// import FaqArea from "../components/FaqArea";
// import ServiceArea from "../components/ServiceArea";
// import ClientsLogoTwo from "../components/ClientsLogoTwo";
import Footer from "../components/Footer";
import AboutArea from "../components/AboutArea";
import '../data/data.json';
const PreSchoolPage = () => {
  return (
    <Layout pageTitle="TP Trust | About Us">
      <NavOne />
      <PageHeader title="About" />
      <AboutArea />
      <AboutDetails />
      <MixerAreaTwo />
      {/*<TeamArea />*/}
      {/*<FaqArea />*/}
      {/*<ServiceArea />*/}
      {/*<ClientsLogoTwo />*/}
      <Footer />
    </Layout>
  );
};

export default PreSchoolPage;
