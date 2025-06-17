import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import IndustriesWeServe from "./components/IndustriesWeServe";
import Features from "./components/Features";
import ExperienceDemo from "./components/ExperienceDemo";
import Testimonials from "./components/Testimonials";
import Reviews from "./components/Reviews";
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
      <Features />
      <ExperienceDemo />
      <Testimonials />
      <Reviews />
      <CallToAction />
      <FAQ />
      <Footer />
    </>
  );
};

export default App;
