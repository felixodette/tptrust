import React, { useState, useEffect } from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
// import AboutDetails from "../components/AboutDetails";
import MixerAreaTwo from "../components/MixerAreaTwo";
// import TeamArea from "../components/TeamArea";
// import FaqArea from "../components/FaqArea";
// import ServiceArea from "../components/ServiceArea";
// import ClientsLogoTwo from "../components/ClientsLogoTwo";
import Footer from "../components/Footer";
// import PreSchoolAbout from "../components/PreSchoolAbout";
// import OurWorkInfoSection from "../components/OurWorkInfoSection";
import '../data/data.json';
// import OurWorkInfoSection from "../components/OurWorkInfoSection";
// import myJson from "../data/data.json";
import CommunityLibraryInfoSection from "../components/CommunityLibraryInfoSection";
const CommunityLibraryPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('../data/data.json');
      const json = await response.json();
      setData(json);
      console.log(data);
    }
    fetchData();
  }, [data]);

  return (
    <Layout pageTitle="TP Trust | Community Library">
      <NavOne />
      <PageHeader title="Community Library" />
      <CommunityLibraryInfoSection />
      {/*<MixerAreaTwo />*/}
      {/*<TeamArea />*/}
      {/*<FaqArea />*/}
      {/*<ServiceArea />*/}
      {/*<ClientsLogoTwo />*/}
      <Footer />
    </Layout>
  );
};

export default CommunityLibraryPage;
