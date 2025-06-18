import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogosSections from "./components/LogosSections";
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
      <section id="home">
        <Hero />
      </section>
      <LogosSections />
      <section id="services">
        <IndustriesWeServe />
      </section>
      <section id="about-us">
        <HowItWorks />
      </section>
      <section id="about">
        <AboutTheProject />
      </section>
      <PointsSection />
      <TestimonialsSection />
      <CallToAction />
      <FAQ />
      <section id="contact">
        <Footer />
      </section>
    </>
  );
};

export default App;
