import React from "react";
import aboutImg from "../../assets/images/perfil.gif";
const About = () => {
  const info = [
    { text: "Anos de estudo", count: "02" },
    { text: "Projetos mantidos", count: "03" },
    { text: "Experiência profissional", count: "11 meses" },
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
              <p className="text-justify break-all leading-7 w-11/12 mx-auto text-lg">
              Sou um desenvolvedor dedicado em constante busca por aprendizado. Possuo proficiência em Python, JavaScript e NodeJS, além de compreensão em bancos de dados relacionais e não relacionais. Como desenvolvedor Python crio API's REST MVC, e utilizando o Python como base, já explorei a linguagem Micropython para programação de dispositivos embarcados, especialmente em placas ESP32 (WT32-ETH01 e WROOM-32D). Trabalhei também com visão computacional, aplicando conceitos da biblioteca OpenCV para detecção e reconhecimento de imagens. Além disso, utilizei NodeJS na manutenção de API's REST consumidas por webapps. Ao longo desse percurso, integrei a tecnologia Docker em meu workflow, aprimorando a eficiência no desenvolvimento, teste e implantação de software.
              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-gold ">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a
                href="https://drive.google.com/file/d/1fwlq1U7bPQtFmEeb5KtX_ba-dypK8QK_/view?usp=drive_link"
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
