import React, { useState, useEffect } from 'react';
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
import PreSchoolAbout from "../components/PreSchoolAbout";
// import InfoSection from "../components/InfoSection";
import '../data/data.json';
const PreSchoolPage = () => {
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
    <Layout pageTitle="TP Trust | Pre-School">
      <NavOne />
      <PageHeader title="Pre-School" />
      <PreSchoolAbout />
      <AboutDetails title={"Our Approach"} description={"We run a free preschool for children like Evans in Kibera who don’t have the opportunity to attend a preschool.\n" +
        "Our preschool provides a safe environment for children to play, explore and grow. Each day involves a fun-packed programme of play-based learning, circle games and sports. The kids receive a healthy breakfast and lunch each day and our social workers work closely with families to promote positive parenting at home."}/>
      <AboutDetails title={"Our Impact"} description={"Evans is now in our preschool learning to count and read. He loves doing puzzles and building houses and cars out of playdough. He makes lots of noise with his friends as they play football on the playground. Evans is gaining the foundational knowledge that will help him to do his best in primary school."}/>
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
