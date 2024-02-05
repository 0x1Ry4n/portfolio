import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../../assets/images/project1.png";
import project2 from "../../assets/images/project2.png";
import project4 from "../../assets/images/project4.png";
import project5 from "../../assets/images/project5.jpg";
import project6 from "../../assets/images/project6.png";
import project7 from "../../assets/images/project7.png";
import project8 from "../../assets/images/project8.jpg";
import project9 from "../../assets/images/project9.png";
import project10 from "../../assets/images/project10.png";
import project11 from "../../assets/images/project11.png";
import project12 from "../../assets/images/project12.jpg";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project5,
      name: "TCC - Bootstrap, JS, PHP e MySQL",
      github_link: "https://github.com/0x1Ry4n/Orgbooks",
      live_link: "",
    },
    {
      img: project11,
      name: "Assistente de voz - Python", 
      github_link: "https://github.com/0x1Ry4n/directory-monitor.git",
      live_link: "",
    },
    {
      img: project9,
      name: "Monitor de Diretórios - Python", 
      github_link: "https://github.com/0x1Ry4n/directory-monitor.git",
      live_link: "",
    },
    {
      img: project10,
      name: "Gerador de Crachás - Python", 
      github_link: "https://github.com/0x1Ry4n/BadgeMaker.git",
      live_link: "",
    },
    {
      img: project12,
      name: "Orgbooks API (em dev) - NodeJS ",
      github_link: "https://github.com/0x1Ry4n/orgbooks-typescript.git",
      live_link: "",
    },
    {
      img: project1,
      name: "APOD Nasa API - NodeJS",
      github_link: "https://github.com/0x1Ry4n/nasa-apod-react",
      live_link: "https://0x1ry4n.github.io/nasa-apod-react/",
    },
    {
      img: project6,
      name: "Tic Tac Toe Game - ReactJS",
      github_link: "https://github.com/0x1Ry4n/tictactoe-react",
      live_link: "https://0x1ry4n.github.io/tictactoe-react/",
    },
    {
      img: project2,
      name: "Landing Page - ReactJS",
      github_link: "https://github.com/0x1Ry4n/landing-page",
      live_link: "https://l4ndingpage.netlify.app/",
    },
    {
      img: project7,
      name: "Catch Game - C++",
      github_link: "https://github.com/0x1Ry4n/Catch-game",
      live_link: "",
    },
    {
      img: project8,
      name: "CRUD Básico - Java",
      github_link: "https://github.com/0x1Ry4n/Java-CRUD",
      live_link: "",
    },
    {
      img: project4,
      name: "Calculadora - HTML, CSS e JS",
      github_link: "https://github.com/0x1Ry4n/calculator-js",
      live_link: "https://0x1ry4n.github.io/calculator-js/",
    },
  ];
  return (
    <section id="projects" className="min-h-screenpy-16 py-20 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Projetos <span className="text-gold">Pessoais</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">
          Projetos desenvolvidos aplicando conceitos estudados
        </p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative select-none">
        <div className="lg:w-2/3 w-full mx-auto">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-[#966f28] rounded-xl">
                  <img
                    src={project_info.img}
                    alt=""
                    className="rounded-lg w-full h-[200px] object-cover"
                  />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-white bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;
