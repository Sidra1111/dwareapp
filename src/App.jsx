import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import IndustriesWeServe from "./components/IndustriesWeServe";
import HowItWorks from "./components/HowItWorks";
import AboutTheProject from "./components/AboutTheProject";
import PointsSection from "./components/PointsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CallToAction from "./components/CallToAction";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import "./index.css";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <IndustriesWeServe />
      <HowItWorks />
      <AboutTheProject />
      <PointsSection />
      <TestimonialsSection />
      <CallToAction />
      <FAQ />
      <Footer />
    </>
  );
};

export default App;
