import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import hero from "../../assets/images/hero.png";

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Ryan", "", "Ryan Lucas."],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const social_media = [
    {
      icon: "logo-github",
      link: "https://github.com/0x1Ry4n",
    },
    {
      icon: "logo-linkedin",
      link: "https://www.linkedin.com/in/ryan-lucas-a1747a214/",
    },
    {
      icon: "logo-instagram",
      link: "https://www.instagram.com/ryan_luckz",
    },
  ];
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img
          src={hero}
          alt=""
          className="md:w-11/8 w-[275px] h-full object-cover rounded-full animate-floatAnimation"
        />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white">
            <span className="text-gold md:text-7xl text-6xl">
              Olá!
              <br />
            </span>
            Meu nome é <span ref={el}></span>
          </h1>
          <br />
          <h4 className="md:text-2xl inline text-lg md:leading-normal leading-5 mt-4 p-3 font-bold text-gold bg-gray-800">
            Fullstack Developer <span className="text-white">#opentowork</span>
          </h4>
          <button className="btn-primary mt-8 shadow-3xl transition duration-500 ease-in-out hover:shadow-3xlh">
            <a href="#contact">Contate-me</a>
          </button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((social) => (
              <div
                key={social.icon}
                className="text-mediumGray hover:text-white cursor-pointer "
              >
                <a href={social.link} target="_blank">
                  <ion-icon name={social.icon}></ion-icon>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=""></div>
    </section>
  );
};

export default Hero;
