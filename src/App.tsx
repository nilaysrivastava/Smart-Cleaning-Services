import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import TopBar from "./components/TopBar";
import FormPage from "./components/FormPage";
import ServicePartner from "./components/ServicePartner";
import Contact from "./components/Contact";
import About from "./components/About";
import Services from "./components/Services";

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <TopBar />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service-partner" element={<ServicePartner />} />
          <Route path="/booking/:service" element={<FormPage />} />
          <Route path="/formpage" element={<FormPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
