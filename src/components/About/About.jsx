import React from "react";
import aboutImg from "../../assets/images/perfil.gif";
const About = () => {
  const info = [
    { text: "📘 Anos de estudo", count: "03" },
    { text: "💻 Projetos mantidos", count: "05" },
    { text: "👔 Anos de experiência profissional", count: "02" },
  ];
  return (
    <section id="about" className="py-5 text-white">
      <div className="text-center mt-6">
        <h3 className="text-4xl font-semibold">
          Sobre <span className="text-gold">Mim</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg"></p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto text-lg">
              Sou um desenvolvedor dedicado, sempre em busca de aprendizado e aprimoramento de habilidades. Atualmente, trabalho com o ERP Sankhya e com tecnologias como Java, JPA e JSP. Embora não seja especialista, já tive experiências relevantes com Python, JavaScript, TypeScript e Node.js. Com Python, desenvolvi APIs REST seguindo o padrão MVC e explorei a linguagem MicroPython para programar dispositivos embarcados, especialmente placas ESP32 como WT32-ETH01 e WROOM-32D. Também apliquei visão computacional utilizando a biblioteca OpenCV para detecção e reconhecimento de imagens. Além disso, trabalhei com Node.js na manutenção de APIs REST para webapps e integrei Docker ao meu fluxo de trabalho, otimizando o desenvolvimento, teste e implantação de soluções. Minha abordagem combina o foco no desenvolvimento de soluções robustas com a capacidade de adaptação a novas tecnologias, sempre buscando agregar valor às necessidades do negócio.              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a
                href="https://docs.google.com/document/d/1K0Gb9GRznwJJExupqsT774r3bY7oGI8l/edit?usp=sharing&ouid=104532613235643098497&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn-primary shadow-3xl transition duration-500 ease-in-out hover:shadow-3xlh">
                  Visualizar CV
                </button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg">
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
