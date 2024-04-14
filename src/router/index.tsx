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
import { useAppDispatch, useAppSelector } from "../hooks/hooksRedux";
import { getSections } from "../middlewares/sections/crud";
import { getPictures } from "../middlewares/pictures/crud";
import { PicturesSetter, SectionsSetter } from "../redux/elencuentro/actions";

export const AppRouter = () => {
  const dispatch = useAppDispatch();
  const RDXsections = useAppSelector((state) => state.global.sections);
  const RDXpictures = useAppSelector((state) => state.global.pictures);
  const getAllData = async () => {
    const sectionsData = await getSections();
    const picturesData = await getPictures();
    dispatch(SectionsSetter(sectionsData));
    dispatch(PicturesSetter(picturesData));
  };

  useEffect(() => {
    getAllData().then(() =>
      console.log(RDXsections)
    );
  }, []);

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
