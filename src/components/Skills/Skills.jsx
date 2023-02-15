import React from "react";

const Skills = () => {
  const skills = [
    {
      logo: "logo-html5",
      level: "Avançado",
      count: 80,
    },
    {
      logo: "logo-css3",
      level: "Intermediário",
      count: 60,
    },
    {
      logo: "logo-javascript",
      level: "Intermediário",
      count: "60",
    },
    {
      logo: "logo-nodejs",
      level: "Iniciante",
      count: 40,
    },
    {
      logo: "logo-react",
      level: "Iniciante",
      count: 40,
    },
    {
      logo: "add-circle-outline",
      level: "learning...",
    },
  ];
  return (
    <section id="skills" className="py-10 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          Minhas <span className="text-[#B28228]">Habilidades</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">
          Algumas das minhas habilidades
        </p>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap animate-floatAnimation">
          {skills?.map((skill, i) => (
            <div
              key={i}
              className="border-2 group border-[#B28228] relative min-w-[10rem] max-w-[16rem] bg-[#3B3B3B] p-10 rounded-xl  shadow-3xl"
            >
              <div
                style={{
                  background: `conic-gradient(rgb(178, 130, 40) ${skill.count}%,#ddd ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-[#B28228]">
                  <ion-icon name={skill.logo}></ion-icon>
                </div>
              </div>
              <p className="text-xl mt-3">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
