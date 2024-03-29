import React, { useState, useEffect } from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
// import AboutDetails from "../components/AboutDetails";
// import MixerAreaTwo from "../components/MixerAreaTwo";
// import TeamArea from "../components/TeamArea";
// import FaqArea from "../components/FaqArea";
// import ServiceArea from "../components/ServiceArea";
// import ClientsLogoTwo from "../components/ClientsLogoTwo";
import Footer from "../components/Footer";
// import OurWorkInfoSection from "../components/OurWorkInfoSection";
import '../data/data.json';
import FoundationsOfHopeDetails from "../components/FoundationsOfHopeDetails";
import myJson from "../data/data.json";
const FoundationsOfHopePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('../data/data.json');
      const json = await response.json();
      setData(json);
      console.log(data);
    }
    fetchData();
  }, []);

  return (
    <Layout pageTitle="TP Trust | Fountains of Hope School">
      <NavOne />
      <PageHeader title="Fountains of Hope School" />
      <FoundationsOfHopeDetails />
      {/*<MixerAreaTwo />*/}
      {/*<TeamArea />*/}
      {/*<FaqArea />*/}
      {/*<ServiceArea />*/}
      {/*<ClientsLogoTwo />*/}
      <Footer />
    </Layout>
  );
};

export default FoundationsOfHopePage;
