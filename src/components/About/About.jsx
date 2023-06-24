import React from "react";
import aboutImg from "../../assets/images/perfil.gif";
const About = () => {
  const info = [
    { text: "Anos de estudo", count: "03" },
    { text: "Projetos mantidos", count: "08" },
    { text: "Experiência profissional", count: "3 meses" },
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
              Sou um desenvolvedor em constante processo de aprendizado. Tenho proficiência sólida em HTML, CSS e JavaScript, e conhecimentos em frameworks/libs populares, como React.js, Node.js e Next.js.
              Além disso, possuo habilidades básicas na linguagem PHP, conceitos de banco de dados relacionais e não relacionais. Atualmente estou estagiando como desenvolvedor low-level, aprendendo micropython e adentrando nesse novo mundo.  
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
                href="https://drive.google.com/file/d/1eZWGHvQAmJGA_LTqzP9EpXCaH3kFeo-3/view?usp=sharing"
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
