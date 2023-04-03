// import './App.css';
import Layout from "./components/Layout";
import NavOne from "./components/NavOne";
import SliderOne from "./components/SliderOne";
import Map from "./components/Map";
import EntryArea from "./components/EntryArea";
import HiwArea from "./components/HiwArea";
import ServiceArea from "./components/ServiceArea";
import MixerArea from "./components/MixerArea";
import Causes from "./components/Causes";
import HelpingArea from "./components/HelpingArea";
import TeamArea from "./components/TeamArea";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";


function App() {
  return (
    <Layout pageTitle="TP Trust">
      <NavOne />
      <SliderOne />
      <EntryArea />
      <HiwArea />
      <ServiceArea />
      <MixerArea />
      <Causes />
      <HelpingArea />
      <TeamArea />
      <CallToAction />
      <Map />
      <Footer />
    </Layout>
  );
}

export default App;
