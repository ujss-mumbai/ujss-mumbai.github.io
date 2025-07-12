import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import AboutOdisha from './pages/AboutOdisha';
import ContactUs from './pages/ContactUs';
import Events from './pages/Events';
import Education from './pages/Education';
import Videos from './pages/Videos';
import Header from './components/Header';
import Donate from './pages/Donate';
import Footer from './components/Footer';
import './App.css';
import GramVikash from './pages/GramVikash';
import BloodDonation from './pages/BloodDonation';
import CancerSeva from './pages/CancerSeva';
import OtherOrganizations from './pages/OtherOrganizationList';

function App() {
  return (
    <Router>
      <Header />
      <div className="App" style={{ minHeight: '80vh' }}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/aboutodisha" element={<AboutOdisha />} />
          <Route path="/otherorganizations" element={<OtherOrganizations />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/event" element={<Events />} />
          <Route path="/education" element={<Education />} />
          <Route path="/gramviakash" element={<GramVikash />} />
          <Route path="/blooddonation" element={<BloodDonation />} />
          <Route path="/cancerseva" element={<CancerSeva />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
