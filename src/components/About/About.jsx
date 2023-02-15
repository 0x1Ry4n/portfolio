import React from "react";
import aboutImg from "../../assets/images/perfil.gif";
const About = () => {
  const info = [
    { text: "Anos de estudo", count: "04" },
    { text: "Projetos mantidos", count: "08" },
    { text: "Experiência profissional", count: "00" },
  ];
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-6">
        <h3 className="text-4xl font-semibold">
          Sobre <span className="text-gold">Mim</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg"></p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify break-all leading-7 w-11/12 mx-auto text-lg">
                Sou um desenvolvedor web em busca da primeira experiência
                profissional. Tenho proeficiência em HTML, CSS, princípios de
                Javascript e alguns de seus frameworks/libs (React.js, Node.js e
                Next.js), conhecimento intermediário da linguagem PHP,
                entendimento de Git, conhecimentos em banco de dados SQL e
                MongoDB e sou aspirante em C/C++. Apaixonado por tecnologia
                desde quando me conheço por gente, tenho muito a aprender e
                estou à disposição para desenvolver minhas habilidades técnicas,
                comunicativas e colaborativas.
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
              <a href="../../src/assets/Curriculum.pdf" target="_blank">
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
