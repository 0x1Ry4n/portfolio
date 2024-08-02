import React from "react";
import { FaHtml5, FaPython, FaCss3Alt, FaDocker, FaAws, FaGitAlt, FaReact, FaReceipt  } from "react-icons/fa";
import { SiTypescript, SiMicropython, SiMongodb  } from "react-icons/si";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";


const Skills = () => {
  const skills = [
    {
      title: "HTML5",
      logo:  <FaHtml5 />,
      level: "Avançado",
      count: 90,
    },
    {
      title: "CSS3",
      logo: <FaCss3Alt />,
      level: "Intermediário",
      count: 70,
    },  
    {
      title: "Javascript",
      logo: <IoLogoJavascript />,
      level: "Intermediário",
      count: 60,
    },
    {
      title: "Git",
      logo: <FaGitAlt />,
      level: "Intermediário",
      count: 60,
    },
    {
      title: "Typescript",
      logo: <SiTypescript/>,
      level: "Intermediário",
      count: 60,
    },
    {
      title: "NodeJS",
      logo: <IoLogoNodejs/>,
      level: "Intermediário",
      count: 50,
    },
    {
      title: "Python",
      logo: <FaPython />,
      level: "Intermediário",
      count: 50,
    },
    {
      title: "Micropython",
      logo: <SiMicropython />,
      level: "Intermediário",
      count: 50,
    },
    {
      title: "PostgreSQL",
      logo: <BiLogoPostgresql />,
      level: "Intermediário",
      count: 40
    },
    {
      title: "MongoDB",
      logo: <SiMongodb />,
      level: "Básico",
      count: 30
    },
    {
      title: "ReactJS",
      logo: <FaReact />,
      level: "Básico",
      count: 30
    },
    {
      title: "Docker",
      logo: <FaDocker />,
      level: "Básico",
      count: 30
    },
    {
      title: "AWS",
      logo: <FaAws />,
      level: "Básico",
      count: 20
    }
  ];
  return (
    <section id="skills" className="py-20 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          Minhas <span className="text-[#B28228]">Habilidades</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">
          Algumas das minhas habilidades
        </p>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap flex-grow-0 animate-floatAnimation">
          {skills?.map((skill, i) => (
            <div  
              key={i}
              className="border-2 group border-[#B28228] relative min-w-[10rem] max-w-[16rem] bg-[#3B3B3B] p-10 rounded-xl shadow-3xl"
            >
              <div
                style={{
                  background: `conic-gradient(rgb(178, 130, 40) ${skill.count}%,#ddd ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-[#B28228]">
                  {skill.logo}
                </div>
              </div>
              <p title={skill.title} className="text-xl mt-3">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
