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
import FormComponent from "../components/DEV/PictureCreationForm";

export const AppRouter = () => {
  const dispatch = useAppDispatch();
  const RDXsections = useAppSelector((state) => state.global.sections);
  const RDXpictures = useAppSelector((state) => state.global.pictures);
  const getAllData = async () => {
    const sectionsData = await getSections();
    let picturesData = await getPictures();
    const orderedPicturesData = picturesData.sort((a: any, b: any) => a.index - b.index);
    const orderedSectionsData = sectionsData.sort((a: any, b: any) => a.index - b.index);
    dispatch(SectionsSetter(orderedSectionsData));
    dispatch(PicturesSetter(orderedPicturesData));
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
        <Route path={`/devv`} element={<FormComponent />}/>
      </Routes>
      <ContactPage />
      <About />
      <Gallery />
      <Footer />
    </div>
  );
};
