import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project2 from "../../assets/images/project2.png";
import project4 from "../../assets/images/project4.png";
import project5 from "../../assets/images/project5.jpg";
import project7 from "../../assets/images/project7.png";
import project9 from "../../assets/images/project9.png";
import project10 from "../../assets/images/project10.png";
import project11 from "../../assets/images/project11.png";
import project12 from "../../assets/images/project12.jpg";
import project13 from "../../assets/images/project13.jpg";
import project14 from "../../assets/images/project14.jpg";
import project15 from "../../assets/images/project15.png";
import "swiper/css";
import "swiper/css/pagination";
import { IoPerson } from "react-icons/io5";
import { GrUserWorker } from "react-icons/gr";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projectType = {
    work: 'Profissional',
    personal: 'Pessoal'
  };

  const projects = [
    {
      img: project13,
      name: "Watchdog - Wi-Fi e Ethernet (Micropython)",
      github_link: "https://www.linkedin.com/in/0xryan-lucas/details/projects/?profileId=ACoAADYssDMB_jNk-hTxKGZuDctZFJBtpHEv7pE",
      live_link: "https://www.linkedin.com/in/0xryan-lucas/details/projects/?profileId=ACoAADYssDMB_jNk-hTxKGZuDctZFJBtpHEv7pE",
      project_type: projectType.work,
    },
    {
      img: project14,
      name: "Bot de Whatsapp - WppConnect.js (Javascript)",
      github_link: "https://www.linkedin.com/in/0xryan-lucas/details/projects/?profileId=ACoAADYssDMB_jNk-hTxKGZuDctZFJBtpHEv7pE",
      live_link: "https://www.linkedin.com/in/0xryan-lucas/details/projects/?profileId=ACoAADYssDMB_jNk-hTxKGZuDctZFJBtpHEv7pE",
      project_type: projectType.work,
    },
    {
      img: project15,
      name: "Serviço gRPC de detecção e registro de aruco tags (Python)",
      github_link: "https://www.linkedin.com/posts/0xryan-lucas_python-opencv-arucotags-activity-7137991808076222465-haWd?utm_source=share&utm_medium=member_desktop",
      live_link: "https://www.linkedin.com/posts/0xryan-lucas_python-opencv-arucotags-activity-7137991808076222465-haWd?utm_source=share&utm_medium=member_desktop",
      project_type: projectType.work,
    },
    {
      img: project5,
      name: "Orgbooks TCC - Livros Didáticos  (Javascript, PHP e MySQL)",
      github_link: "https://github.com/0x1Ry4n/Orgbooks",
      live_link: "",
      project_type: projectType.personal,
    },
    {
      img: project12,
      name: "Orgbooks API - em dev - (Typescript, NodeJS, PostgreSQL)",
      github_link: "https://github.com/0x1Ry4n/orgbooks-typescript.git",
      live_link: "",
      project_type: projectType.personal,
    },
    {
      img: project11,
      name: "Assistente de voz e pose estimation (Python)", 
      github_link: "https://github.com/0x1Ry4n/john-voice-assistant.git",
      live_link: "",
      project_type: projectType.personal,
    },
    {
      img: project9,
      name: "Monitor de Diretórios (Python)", 
      github_link: "https://github.com/0x1Ry4n/directory-monitor.git",
      live_link: "",
      project_type: projectType.personal,
    },
    {
      img: project10,
      name: "Gerador de Crachás (Python)", 
      github_link: "https://github.com/0x1Ry4n/BadgeMaker.git",
      live_link: "",
      project_type: projectType.personal,
    },
    {
      img: project2,
      name: "Landing Page - ReactJS",
      github_link: "https://github.com/0x1Ry4n/landing-page",
      live_link: "https://l4ndingpage.netlify.app/",
      project_type: projectType.personal,
    },
    {
      img: project4,
      name: "Calculadora - HTML, CSS e JS",
      github_link: "https://github.com/0x1Ry4n/calculator-js",
      live_link: "https://0x1ry4n.github.io/calculator-js/",
      project_type: projectType.personal,
    },
    {
      img: project7,
      name: "Catch Game - C++",
      github_link: "https://github.com/0x1Ry4n/Catch-game",
      live_link: "",
      project_type: projectType.personal,
    },
  ];

  const getProjectTypeClass = (type) => {
    switch (type) {
      case "Prossional":
        return "bg-blue-500";
      case "Pessoal":
        return "bg-green-500";
      default:
        return "bg-gray-800";
    }
  };

  const getProjectIcon = (type) => {
    switch (type) {
      case "Prossional":
        return <GrUserWorker className="inline-block mr-1" />;
      case "Pessoal":
        return <IoPerson className="inline-block mr-1" />;
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="min-h-screenpy-16 py-20 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Projetos <span className="text-gold">Desenvolvidos</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">
          Projetos profissionais e pessoais  
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
                    <p className={`text-white rounded-md px-2 py-1 inline-block ${getProjectTypeClass(project_info.project_type)}`}>
                      {getProjectIcon(project_info.project_type)}
                      {project_info.project_type}
                    </p>
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
