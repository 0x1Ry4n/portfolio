import { FaHtml5, FaPython, FaCss3Alt, FaDocker, FaAws, FaGitAlt, FaReact } from "react-icons/fa";
import { SiTypescript, SiMicropython, SiMongodb, SiMicrosoftsqlserver, SiDelphi } from "react-icons/si";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";

const Skills = ({ isLoading }) => {
  const skills = [
    { title: "HTML5", logo: <FaHtml5 />, level: "Avançado", count: 90 },
    { title: "CSS3", logo: <FaCss3Alt />, level: "Avançado", count: 80 },
    { title: "Javascript", logo: <IoLogoJavascript />, level: "Avançado", count: 80 },
    { title: "Typescript", logo: <SiTypescript />, level: "Avançado", count: 80 },
    { title: "Python", logo: <FaPython />, level: "Avançado", count: 75 },
    { title: "NodeJS", logo: <IoLogoNodejs />, level: "Avançado", count: 70 },
    { title: "Micropython", logo: <SiMicropython />, level: "Intermediário", count: 60 },
    { title: "PostgreSQL", logo: <BiLogoPostgresql />, level: "Intermediário", count: 60 },
    { title: "SQL Server", logo: <SiMicrosoftsqlserver />, level: "Intermediário", count: 60 },
    { title: "MongoDB", logo: <SiMongodb />, level: "Intermediário", count: 50 },
    { title: "ReactJS", logo: <FaReact />, level: "Intermediário", count: 50 },
    { title: "Delphi", logo: <SiDelphi />, level: "Intermediário", count: 50 },
    { title: "Git", logo: <FaGitAlt />, level: "Intermediário", count: 50 },
    { title: "Docker", logo: <FaDocker />, level: "Básico", count: 30 },
    { title: "AWS", logo: <FaAws />, level: "Básico", count: 20 }
  ];

  if (isLoading) {
    return (
      <section id="skills" className="py-20 relative animate-pulse">
        <div className="mt-8 text-gray-100 text-center">
          <div className="h-10 bg-gray-700 rounded w-64 mx-auto mb-3" />
          <div className="h-5 bg-gray-700 rounded w-48 mx-auto mb-12" />
          <div className="flex items-center justify-center mt-12 gap-10 flex-wrap flex-grow-0">
            {skills.map((_, i) => (
              <div
                key={i}
                className="border-2 border-gray-700 relative min-w-[10rem] max-w-[16rem] bg-[#3B3B3B] p-10 rounded-xl evaluation-card"
              >
                <div className="w-32 h-32 bg-gray-700 rounded-full mx-auto flex items-center justify-center">
                  <div className="w-28 h-28 bg-gray-900 rounded-full" />
                </div>
                <div className="h-6 bg-gray-700 rounded w-20 mx-auto mt-4" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="skills" className="py-20 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          Minhas <span className="text-[#B28228]">Habilidades</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">
          Lista de habilidades técnicas
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
