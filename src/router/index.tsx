import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "../components/Nav/Navbar";

import About from "../components/About/About";
import ContactPage from "../components/Contact/ContactPage";
import Gallery from "../components/Gallery/Gallery";
import LandingPage from "../components/Landing/Title";
import Footer from "../components/Footer/Footer";
import InfoPage from "../components/Contact/InfoPage";
import InteractiveGallery from "../components/Gallery/GalleryReact";

export const AppRouter = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path={`/`} element={<LandingPage />} />
      </Routes>
      <About />
      <Gallery />
      <ContactPage />
      <Footer />
    </div>
  );
};
