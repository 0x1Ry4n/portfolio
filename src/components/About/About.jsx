import aboutImg from "../../assets/images/perfil.gif";

const About = ({ isLoading }) => {
  const info = [
    { text: "📘 Tempo de estudo (anos)", count: "05" },
    { text: "💻 Projetos em produção", count: "06" },
    { text: "👔 Experiência no mercado (anos)", count: "03" },
  ];

  if (isLoading) {
    return (
      <section id="about" className="py-5 text-white animate-pulse">
        <div className="text-center mt-6">
          <div className="h-10 bg-gray-700 rounded w-48 mx-auto mb-12" />
          <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
            <div className="p-2 flex-1 w-full">
              <div className="space-y-3 w-11/12 mx-auto">
                <div className="h-5 bg-gray-700 rounded w-full" />
                <div className="h-5 bg-gray-700 rounded w-full" />
                <div className="h-5 bg-gray-700 rounded w-full" />
                <div className="h-5 bg-gray-700 rounded w-full" />
                <div className="h-5 bg-gray-700 rounded w-5/6" />
              </div>
              <div className="flex mt-10 items-center gap-7 justify-start w-11/12 mx-auto">
                {info.map((content) => (
                  <div key={content.text} className="flex flex-col gap-2">
                    <div className="h-10 bg-gray-700 rounded w-12" />
                    <div className="h-4 bg-gray-700 rounded w-24" />
                  </div>
                ))}
              </div>
              <div className="w-11/12 mx-auto mt-10">
                <div className="h-12 bg-gray-700 rounded-lg w-40" />
              </div>
            </div>
            <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center w-full">
              <div className="lg:w-96 h-64 sm:w-10/12 w-11/12 max-w-sm bg-gray-700 rounded-xl" />
            </div>
          </div>
        </div>
      </section>
    );
  }

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
                Sou desenvolvedor Full Stack com foco em sistemas ERP, aplicações web e integrações via APIs REST, combinando conhecimento técnico com visão de processos de negócio.
Formado em Desenvolvimento de Sistemas pela ETEC e em Informática para Negócios pela FATEC Rio Preto, atuo atualmente na evolução do ERP Micasoft na Cozimax, utilizando Delphi, SQL Server e Horse, além do desenvolvimento de interfaces com React.js.
Possuo experiência com Python, Node.js, Java (JSP, Jakarta), Docker, SQL Server e Oracle. No ramo das automações, já trabalhei com Raspberry Pi, ESP32, desenvolvendo soluções com MicroPython e OpenCV. Também desenvolvi APIs (REST, XML, etc), realizando integrações entre sistemas.
              </p>
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
