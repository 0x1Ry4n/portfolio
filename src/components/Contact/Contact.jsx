import { useRef, useState } from "react";
import SimpleAlert from "../Alert/SimpleAlert";
import emailjs from "@emailjs/browser";

const Contact = ({ isLoading }) => {
  const form = useRef();
  const [email, setEmail] = useState(null);

  const contact_info = [
    { logo: "mail", text: "ryanlucas2018gz@gmail.com" },
    { logo: "logo-whatsapp", text: "(17) 99649-2678" },
    { logo: "location", text: "Mirassol, São Paulo." },
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_EMAIL_KEY
      )
      .then(
        () => setEmail(true),
        () => setEmail(false)
      );
  };

  if (isLoading) {
    return (
      <section className="py-10 px-3 text-white animate-pulse">
        <div className="text-center mt-8">
          <div className="h-10 bg-gray-700 rounded w-40 mx-auto mb-8" />
          <div className="flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-900 md:p-6 p-2 rounded-lg mx-auto shadow-3xl">
            <div className="flex flex-col flex-1 gap-5 p-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-12 bg-gray-800 rounded w-full" />
              ))}
              <div className="h-12 bg-gray-700 rounded-lg w-40" />
            </div>
            <div className="flex flex-col gap-7 p-2 justify-center">
              {contact_info.map((_, i) => (
                <div key={i} className="flex flex-row gap-4 items-center">
                  <div className="w-14 h-14 bg-gray-700 rounded-full" />
                  <div className="h-5 bg-gray-700 rounded w-48" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">Contato</h3>
        <div className="mt-8 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-900 md:p-6 p-2 rounded-lg mx-auto shadow-3xl">
          <form className="flex flex-col flex-1 gap-5 p-2" ref={form} onSubmit={sendEmail}>
            <input name="user_name" type="text" placeholder="Nome..." required />
            <input name="user_email" type="email" placeholder="Email..." required />
            <textarea name="user_message" placeholder="Mensagem..." rows={10} required></textarea>
            <button className="btn-primary w-fit">Enviar Mensagem</button>
          </form>
          <div className="flex flex-col gap-7 p-2">
            {contact_info.map((contact, i) => (
              <div key={i} className="flex flex-row text-left gap-4 items-center">
                <div className="min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-[#B28228] rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm">{contact.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {email !== null && <SimpleAlert open={true} variant="filled" severity={email ? "success" : "error"} />}
    </section>
  );
};

export default Contact;
