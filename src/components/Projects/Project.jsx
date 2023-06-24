import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../../assets/images/project1.png";
import project2 from "../../assets/images/project2.png";
import project3 from "../../assets/images/project3.png";
import project4 from "../../assets/images/project4.png";
import project5 from "../../assets/images/project5.jpg";
import project6 from "../../assets/images/project6.png";
import project7 from "../../assets/images/project7.png";
import project8 from "../../assets/images/project8.jpg";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "APOD Nasa API",
      github_link: "https://github.com/0x1Ry4n/nasa-apod-react",
      live_link: "https://0x1ry4n.github.io/nasa-apod-react/",
    },
    {
      img: project2,
      name: "Landing Page",
      github_link: "https://github.com/0x1Ry4n/landing-page",
      live_link: "https://l4ndingpage.netlify.app/",
    },
    {
      img: project3,
      name: "Notes Application",
      github_link: "https://github.com/0x1Ry4n/evernoted",
      live_link: "https://evernoted-client.vercel.app/",
    },
    {
      img: project4,
      name: "Calculadora em HTML, CSS e JS",
      github_link: "https://github.com/0x1Ry4n/calculator-js",
      live_link: "https://0x1ry4n.github.io/calculator-js/",
    },
    {
      img: project5,
      name: "Projeto de TCC - Orgbooks",
      github_link: "https://github.com/0x1Ry4n/Orgbooks",
      live_link: "",
    },
    {
      img: project6,
      name: "Tic Tac Toe Game",
      github_link: "https://github.com/0x1Ry4n/tictactoe-react",
      live_link: "https://0x1ry4n.github.io/tictactoe-react/",
    },
    {
      img: project7,
      name: "Catch Game em C++",
      github_link: "https://github.com/0x1Ry4n/Catch-game",
      live_link: "",
    },
    {
      img: project8,
      name: "CRUD em Java",
      github_link: "https://github.com/0x1Ry4n/Java-CRUD",
      live_link: "",
    },
  ];
  return (
    <section id="projects" className="min-h-screenpy-16 py-20 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Meus <span className="text-gold">Projetos</span>
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
