import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./../pages/Home";
import Tours from "./../pages/Tours";
import TourDetails from "./../pages/TourDetails";
import Login from "./../pages/Login";
import Register from "./../pages/Register";
import SearchResultList from "./../pages/SearchResultList";
import ThankYou from "../pages/Thankyou";
import Booking from "../components/Booking/Booking.jsx";
import AboutPage from "../pages/About.jsx";
import MasonryImagesGallery from "../components/Image gallery/MasonryImagesGallery.jsx";


const Routers = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/tours/:id" element={<TourDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/tours/search" element={<SearchResultList />} />
      <Route path="/thankyou" element={<ThankYou />} />
      <Route path="/book" element={<Booking />} />
      <Route path="/gallery" element={<MasonryImagesGallery />} />
    </Routes>
  );
};

export default Routers;
