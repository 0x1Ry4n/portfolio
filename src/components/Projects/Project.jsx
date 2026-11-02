import { Swiper, SwiperSlide } from "swiper/react";
import project5 from "../../assets/images/project5.jpg";
import project11 from "../../assets/images/project11.png";
import project13 from "../../assets/images/project13.jpg";
import project14 from "../../assets/images/project14.jpg";
import project15 from "../../assets/images/project15.png";
import project16 from "../../assets/images/project16.jpg";
import project17 from "../../assets/images/project17.jpg";
import project18 from "../../assets/images/project18.png";
import project19 from "../../assets/images/project19.png";
import project20 from "../../assets/images/project20.png";
import project21 from "../../assets/images/project21.png";

import "swiper/css";
import "swiper/css/pagination";
import { IoPerson } from "react-icons/io5";
import { GrUserWorker } from "react-icons/gr";
import { Pagination, Autoplay } from "swiper";

const Project = ({ isLoading }) => {
  const projectType = {
    work: "Profissional",
    personal: "Pessoal",
  };

  const projects = [
    {
      img: project18,
      name: "Portfólio MBE Digital (React.js e TailwindCSS)",
      github_link: "",
      live_link: "https://mbedigital.vercel.app/",
      project_type: projectType.work,
    },
    {
      img: project21,
      name: "Ninho - Enxoval de Casamento (React.js e Node.js)",
      github_link: "",
      live_link: "https://ninho-zy81.onrender.com/",
      project_type: projectType.work,
    },
    {
      img: project16,
      name: "Apontamento de Produção com Raspberry pi (Python)",
      github_link: "",
      live_link: "",
      project_type: projectType.work,
    },
    {
      img: project19,
      name: "Portal do Fornecedor - Cozimax (React.js e Horse Delphi)",
      github_link: "",
      live_link: "https://www.fornecedor.cozimax.com.br",
      project_type: projectType.work,
    },
    {
      img: project20,
      name: "Portal do Cliente - Metaperfil (React.js e .Net Core)",
      github_link: "",
      live_link: "https://portalmetaperfil.com.br/Conta/Entrar",
      project_type: projectType.work,
    },
    {
      img: project15,
      name: "Serviço gRPC de detecção de aruco tags (NodeJS e Python)",
      github_link:
        "https://www.linkedin.com/posts/0xryan-lucas_python-opencv-arucotags-activity-7137991808076222465-haWd?utm_source=share&utm_medium=member_desktop",
      live_link:
        "https://www.linkedin.com/posts/0xryan-lucas_python-opencv-arucotags-activity-7137991808076222465-haWd?utm_source=share&utm_medium=member_desktop",
      project_type: projectType.work,
    },
    {
      img: project13,
      name: "Watchdog - Wi-Fi e Ethernet (Micropython)",
      github_link:
        "https://www.linkedin.com/in/0xryan-lucas/details/projects/?profileId=ACoAADYssDMB_jNk-hTxKGZuDctZFJBtpHEv7pE",
      live_link:
        "https://www.linkedin.com/in/0xryan-lucas/details/projects/?profileId=ACoAADYssDMB_jNk-hTxKGZuDctZFJBtpHEv7pE",
      project_type: projectType.work,
    },
    {
      img: project14,
      name: "Bot de Whatsapp - WppConnect.js (Node.js)",
      github_link:
        "https://www.linkedin.com/in/0xryan-lucas/details/projects/?profileId=ACoAADYssDMB_jNk-hTxKGZuDctZFJBtpHEv7pE",
      live_link:
        "https://www.linkedin.com/in/0xryan-lucas/details/projects/?profileId=ACoAADYssDMB_jNk-hTxKGZuDctZFJBtpHEv7pE",
      project_type: projectType.work,
    },
    {
      img: project17,
      name: "Sistema de Gestão de Estoque - (Spring Boot e React.js)",
      github_link: "https://github.com/0x1Ry4n/api-estoque",
      live_link:
        "https://www.linkedin.com/in/0xryan-lucas/details/projects/?profileId=ACoAADYssDMB_jNk-hTxKGZuDctZFJBtpHEv7pE",
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
      img: project5,
      name: "Orgbooks TCC - Livros Didáticos  (Javascript, PHP e MySQL)",
      github_link: "https://github.com/0x1Ry4n/Orgbooks",
      live_link: "",
      project_type: projectType.personal,
    },
  ];

  const getProjectTypeClass = (type) => {
    switch (type) {
      case "Profissional":
        return "bg-blue-600 border border-blue-400/20";
      case "Pessoal":
        return "bg-emerald-600 border border-emerald-400/20";
      default:
        return "bg-gray-800";
    }
  };

  const getProjectIcon = (type) => {
    switch (type) {
      case "Profissional":
        return <GrUserWorker className="inline mr-1.5" />;
      case "Pessoal":
        return <IoPerson className="inline mr-1.5" />;
      default:
        return null;
    }
  };

  if (isLoading) {
    return (
      <section id="projects" className="py-20 text-white animate-pulse">
        <div className="text-center">
          <div className="h-10 bg-gray-700 rounded w-64 mx-auto mb-3" />
          <div className="h-5 bg-gray-700 rounded w-56 mx-auto mb-12" />
        </div>
        <div className="max-w-6xl px-5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-4 bg-gray-800 rounded-xl">
              <div className="rounded-lg w-full h-[200px] bg-gray-700" />
              <div className="h-6 bg-gray-700 rounded w-5/6 my-4" />
              <div className="flex gap-3">
                <div className="h-8 bg-gray-700 rounded w-16" />
                <div className="h-8 bg-gray-700 rounded w-20" />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 text-white">
      <div className="text-center mb-12">
        <h3 className="text-4xl font-semibold tracking-tight">
          Projetos <span className="text-gold">Desenvolvidos</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">
          Projetos profissionais e pessoais
        </p>
      </div>

      <div className="max-w-6xl px-5 mx-auto relative select-none">
        <Swiper
          slidesPerView={1}
          spaceBetween={24}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="pb-12"
        >
          {projects.map((project_info, i) => (
            <SwiperSlide key={i} className="h-auto">
              <div className="h-full flex flex-col justify-between p-4 bg-[#966f28] rounded-xl border border-white/5 shadow-md">
                {/* Bloco de Mídia e Conteúdo */}
                <div className="w-full">
                  <div className="overflow-hidden rounded-lg bg-black/10">
                    <img
                      src={project_info.img}
                      alt={project_info.name}
                      className="w-full h-[180px] object-cover"
                    />
                  </div>
                  <h4 className="text-lg font-medium mt-4 mb-5 text-zinc-100 line-clamp-2 min-h-[56px] leading-snug">
                    {project_info.name}
                  </h4>
                </div>

                {/* Rodapé do Card com Ações Alinhadas */}
                <div className="flex items-center justify-between gap-2 mt-auto pt-3 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    {project_info.github_link && (
                      <a
                        href={project_info.github_link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-zinc-200 bg-gray-800 hover:bg-gray-700/90 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors border border-gray-700/30"
                      >
                        Github
                      </a>
                    )}

                    {project_info.live_link && (
                      <a
                        href={project_info.live_link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-white bg-gray-800 hover:bg-gray-700/90 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors border border-gray-700/30"
                      >
                        Link
                      </a>
                    )}
                  </div>

                  <p
                    className={`text-white rounded-lg px-2.5 py-1.5 text-xs font-semibold tracking-wide flex items-center shadow-sm ${getProjectTypeClass(project_info.project_type)}`}
                  >
                    {getProjectIcon(project_info.project_type)}
                    {project_info.project_type}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Project;
