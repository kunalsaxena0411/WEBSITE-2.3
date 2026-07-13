import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout
import Navbar from "./Components/NavbarSection/Navbar";
import Footer from "./Components/FooterSection/Footer";

// Pages / Background
import ThreeScene from "./Components/Background/ThreeScene";
import Career from "./Components/CareersPage/Career";
import Apply from "./Components/Apply/Apply";
import About from "./Components/AboutPage/About";
import Contact from "./Components/ContactSection/Contact";
import Projects from "./Components/ImageSection/Image";
import Team from "./Components/Team/Team";
import Service from "./Components/ServicePage/Service";

// Specific services
import AIservices from "./Components/SpecificService/Ai";
import AppDevelopment from "./Components/SpecificService/appdev";
import InteractiveDashboards from "./Components/SpecificService/webd";
import CloudServices from "./Components/SpecificService/cloud";

// Contact sub-pages
import AiContact from "./Components/SpecificContactPage/aiservicepage";
import Appcontact from "./Components/SpecificContactPage/appcontact";
import Cloud from "./Components/SpecificContactPage/cloudcontact";
import Webser from "./Components/SpecificContactPage/webcontact";

// Product pages
import AntiZero from "./Components/ProductPages/AntiZero";
import Enterprise from "./Components/ProductPages/Enterprise";
import Antitod from "./Components/ProductPages/Antitod/Antitod";
import AntiGPT from "./Components/ProductPages/AntiGPT/AntiGPT";

// Policy pages
import Privacy from "./Components/Policies/Privacy";
import TnC from "./Components/Policies/T&C";
import AppSupport from "./Components/Policies/AppSupport";


function App() {
  return (
    <Router>
      {/* HEADER ALWAYS */}
      <Navbar />

      <Routes>
        {/* HOME — special layout */}
        <Route
          path="/"
          element={
            <>
              <ThreeScene />
              <Footer />
            </>
          }
        />
        <Route
          path="/home"
          element={
            <>
              <ThreeScene />
              <Footer />
            </>
          }
        />

        {/* ALL OTHER PAGES — normal flow */}
        <Route
          path="*"
          element={
            <main className="app-content">
              <Routes>
                <Route path="/services" element={<Service />} />
                <Route path="/career" element={<Career />} />
                <Route path="/job" element={<Career />} />
                <Route path="/apply/:jobId" element={<Apply />} />
                <Route path="/about" element={<About />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects" element={<Projects />} />

                {/* product pages */}
                <Route path="/products/anti-0" element={<AntiZero />} />
                <Route
                  path="/products/enterprise"
                  element={<Enterprise />}
                />
                <Route
                  path="/products/antitod"
                  element={<Antitod />}
                />
                <Route
                  path="/products/antigpt"
                  element={<AntiGPT />}
                />

                {/* specific services */}
                <Route path="/AIservices" element={<AIservices />} />
                <Route
                  path="/AppDevelopment"
                  element={<AppDevelopment />}
                />
                <Route
                  path="/InteractiveDashboards"
                  element={<InteractiveDashboards />}
                />
                <Route
                  path="/CloudServices"
                  element={<CloudServices />}
                />

                {/* contact sub pages */}
                <Route path="/AiContact" element={<AiContact />} />
                <Route path="/Appcontact" element={<Appcontact />} />
                <Route path="/Cloud" element={<Cloud />} />
                <Route path="/Webser" element={<Webser />} />

                {/* legal pages */}
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<TnC />} />
                <Route path="/support" element={<AppSupport />} />

              </Routes>

              <Footer />
            </main>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
