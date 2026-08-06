import React, { useEffect, useState } from "react"; // Adicionado useState
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
import "react-loading-skeleton/dist/skeleton.css";

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="background">
      <Navbar />
      <Hero isLoading={isLoading} />
      <About isLoading={isLoading} />
      <Skills isLoading={isLoading} />
      <Hireme isLoading={isLoading} />
      <Project isLoading={isLoading} />
      <Contact isLoading={isLoading} />
      <Footer />
    </div>
  );
};

export default Portfolio;
