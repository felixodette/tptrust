// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/index";
// import Layout from "./components/Layout";
// import NavOne from "./components/NavOne";
// import SliderOne from "./components/SliderOne";
// import Map from "./components/Map";
// import EntryArea from "./components/EntryArea";
// import HiwArea from "./components/HiwArea";
// import ServiceArea from "./components/ServiceArea";
// import MixerArea from "./components/MixerArea";
// import Causes from "./components/Causes";
// import HelpingArea from "./components/HelpingArea";
// import TeamArea from "./components/TeamArea";
// import CallToAction from "./components/CallToAction";
// import Footer from "./components/Footer";
import CausesPage from "./pages/causes";
import CausesPageDetail from "./pages/causes-detail";
import ContactsPage from "./pages/contact";
// import NavOne from "./components/NavOne";
import DonatePage from "./pages/donate";
import Events from "./pages/events";
import EventsDetailPage from "./pages/events-detail";
import News from './pages/news';
import NewsSinglePage from "./pages/single-news";
import AboutPage from "./pages/about";
import GalleryPage from "./pages/gallery";
import VolunteerPage from "./pages/volunteer";
import TeamPage from "./pages/team";
import SponsorPage from "./pages/sponsor";
import ContactPage from "./pages/contact";
import PreSchoolPage from "./pages/pre-school";
import SchoolTransitionPage from "./pages/school-transition";
import FoundationsOfHopePage from "./pages/foundations-of-hope";
import CommunityLibraryPage from "./pages/community-library";
import SchoolSupportPage from "./pages/school-support";
import WhereWeWorkPage from "./pages/where-we-work";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/causes" element={<CausesPage />} />
        <Route path="/causes-detail" element={<CausesPageDetail />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/events" element ={<Events />} />
        <Route path="/events-detail" element={<EventsDetailPage />} />
        <Route path="/news" element={<News />} />
        <Route path="/single-news" element={<NewsSinglePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/volunteer" element={<VolunteerPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/sponsor" element={<SponsorPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/pre-school" element={<PreSchoolPage />} />
        <Route path="/school-transition" element={<SchoolTransitionPage />} />
        <Route path="/foundations-of-hope" element={<FoundationsOfHopePage />} />
        <Route path="/community-library" element={<CommunityLibraryPage />} />
        <Route path="/school-support" element={<SchoolSupportPage />} />
        <Route path="/where-we-work" element={<WhereWeWorkPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
