import React, { useEffect } from "react";
import Hero from "../components/Main/Hero";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Project from "../components/Projects/Project";
import Hireme from "../components/HireMe/Hireme";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Aos from "aos";
import "aos/dist/aos.css";
import "../styles/portfolio.css";

const Portfolio = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="background">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Hireme />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio;
