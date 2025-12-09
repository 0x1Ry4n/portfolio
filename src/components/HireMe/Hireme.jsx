import hireMe from "../../assets/images/contract.png";
const Hireme = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-white ">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Negócios?<span className="text-gold"></span>
        </h3>
      </div>
      <div className="bg-gray-900 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[28rem] text-justify mt-12 flex gap-6 lg:flex-row flex-col-reverse items-center shadow-3xl">
        <div>
          <h2 className="text-2xl text-center font-semibold">Você tem alguma proposta de projeto?</h2>
          <p className="lg:text-left text-justify break-all max-w-lg text-lg mt-4 text-gray-200 leading-6">
          Estou disponível para conversar e agendar uma reunião para explorarmos juntos o potencial dessa proposta. Para facilitar o contato, você pode encontrar meus dados de contato clicando no botão abaixo. 👇
          </p>
          <button className="btn-primary mt-10 shadow-3xl transition duration-500 ease-in-out hover:shadow-3xlh">
            <a href="#contact">Me mande uma mensagem!</a>
          </button>
        </div>
        <img
          src={hireMe}
          alt=""
          className="lg:h-[20rem] lg:relative bottom-0 -right-3 object-cover"
        />
      </div>
    </section>
  );
};

export default Hireme;
