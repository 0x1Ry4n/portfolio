import React, { useRef, useState } from "react";
import SimpleAlert from "../Alert/SimpleAlert";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [email, setEmail] = useState(false);

  const contact_info = [
    { logo: "mail", text: "ryanlucas2018gz@gmail.com" },
    { logo: "logo-whatsapp", text: "(17) 99649-2678" },
    {
      logo: "location",
      text: "Mirassol, São Paulo.",
    },
  ];

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${import.meta.env.VITE_EMAIL_SERVICE_ID}`,
        `${import.meta.env.VITE_EMAIL_TEMPLATE_ID}`,
        form.current,
        `${import.meta.env.VITE_PUBLIC_EMAIL_KEY}`
      )
      .then(
        (result) => {
          console.log(result.text);
          setEmail(true);
        },
        (error) => {
          console.log(error.text);
          setEmail(false);
        }
      );
  };

  return (
    <section id="contact" className="py-10 px-3 text-white ">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contato<span className="text-cyan-600"></span>
        </h3>
        <div
          className="mt-8 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-900 md:p-6 p-2 rounded-lg mx-auto  shadow-3xl"
        >
          <form
            className="flex flex-col flex-1 gap-5 p-2"
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              name="user_name"
              type="text"
              placeholder="Digite seu nome..."
            />
            <input
              name="user_email"
              type="Email"
              placeholder="Digite seu endereço de email..."
            />
            <textarea
              name="user_message"
              placeholder="Digite sua mensagem..."
              rows={10}
            ></textarea>
            <button className="btn-primary w-fit shadow-3xl transition duration-500 ease-in-out hover:shadow-3xlh">
              Enviar Mensagem
            </button>
          </form>
          <div className="flex flex-col  gap-7 p-2">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-[#B28228] rounded-full shadow-3xl transition duration-500 ease-in-out hover:shadow-3xlh">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <br />
      {email ? (
        <SimpleAlert variant="filled" severity="success" />
      ) : (
        <SimpleAlert variant="filled" severity="error" />
      )}
    </section>
  );
};

export default Contact;
