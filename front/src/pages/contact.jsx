const Contact = () => {
  return (
    <div className="flex">
      <div className="flex flex-col px-10 justify-start mt-36 md:px-24 2xl:mt-64 2xl:flex 2xl:px-64">
        <div className="mb-7">
          <h1 className="font-poppins-bold text-main text-4xl 2xl:text-5xl 2xl:px-40">
            Visite-nos
          </h1>
        </div>
        <div className="flex flex-col gap-5 md:flex-row md:flex-wrap md:gap-14 md:px-16 2xl:gap-28 2xl:px-56">
          <div className="py-3 2xl: ">
            <p className="font-poppins-bold text-[#c0a87e] text-[19px] 2xl:text-2xl">
              Nossa Localização
            </p>
            <div className="px-[5px]">
              <p>Adotepet </p>
              <p>Tel: (83) 1234-5678</p>
              <p>Av. Taina, 98 </p>
              <p>João Pessoa - PB - 12345-678</p>
            </div>
          </div>
          <div className="py-3 2xl: ">
            <p className="font-poppins-bold text-[#c0a87e] text-[19px]">
              Feiras de Adoção
            </p>
            <div className="px-[5px]">
              <p className="w-48">
                Participe das nossas feiras de adoção e conheça os animais
                disponíveis para um novo lar.
              </p>
            </div>
          </div>
          <div className="py-3 2xl: ">
            <p className="font-poppins-bold text-[#c0a87e] text-[19px]">
              Loja Virtual
            </p>
            <div className="px-[5px]">
              <p className="w-48">
                Em breve, estaremos lançando nossa loja virtual com produtos
                para pets e itens exclusivos para apoiar nossa causa.
              </p>
            </div>
          </div>
          <div className="py-3 2xl: ">
            <p className="font-poppins-bold text-[#c0a87e] text-[19px]">
              Horários
            </p>
            <div className="px-[5px]">
              <p className="w-48">
                Seg - Sex: 7:00 - 18:00 Sábado: 9:00 - 18:00 Domingo: Fechado
              </p>
            </div>
          </div>
          <div className="py-3 2xl: ">
            <p className="font-poppins-bold text-[#c0a87e] text-[19px]">
              Eventos Especiais
            </p>
            <div className="px-[5px]">
              <p className="w-48">
                Acompanhe nossos eventos especiais voltados para a
                conscientização sobre a importância da adoção responsável.
              </p>
            </div>
          </div>
          <div className="py-3 2xl:">
            <p className="font-poppins-bold text-[#c0a87e] text-[19px]">
              Dúvidas?
            </p>
            <div className="px-[5px]">
              <p className="w-48">
                Estamos aqui para esclarecer suas dúvidas sobre adoção, cuidados
                com animais e muito mais.
              </p>
            </div>
          </div>
        </div>
        <div class="border-t border-details mt-8 mb-9 max-w-full"></div>
        <div className="flex flex-col gap-16 xl:flex-row xl:gap-96 2xl:flex 2xl:flex-row 2xl:gap-96">
          <div>
            <h1 className="font-poppins-bold text-main text-4xl 2xl:px-40 xl:w-14">
              Entre em contato
            </h1>
          </div>
          <div className="flex flex-col gap-5 xl:flex-row xl:flex-wrap xl:w-[580px] 2xl:w-[580px]">
            <div>
              <label>Nome*</label>
              <div>
                <input
                  type="text"
                  className=" text-black/40 bg-transparent border-black/30 border-[1.7px] w-[320px] xl:w-[280px] px-2 py-2 focus:outline-none rounded-sm mb-2"
                />
              </div>
            </div>
            <div>
              <label>Sobrenome*</label>
              <div>
                <input
                  type="text"
                  className=" text-black/40 bg-transparent border-black/30 border-[1.7px] w-[320px] xl:w-[280px] px-2 py-2 focus:outline-none rounded-sm mb-2"
                />
              </div>
            </div>
            <div>
              <label>Email*</label>
              <div>
                <input
                  type="text"
                  className=" text-black/40 bg-transparent border-black/30 border-[1.7px] w-[320px] xl:w-[280px] px-2 py-2 focus:outline-none rounded-sm mb-2"
                />
              </div>
            </div>
            <div>
              <label>Telefone*</label>
              <div>
                <input
                  type="text"
                  className=" text-black/40 bg-transparent border-black/30 border-[1.7px] w-[320px] xl:w-[280px] px-2 py-2 focus:outline-none rounded-sm mb-2"
                />
              </div>
            </div>
            <div>
              <label>Assunto*</label>
              <div>
                <textarea
                  className="w-[320px] h-[100px] p-2 rounded-sm bg-transparent text-black/30 border-black/30 border-[1.7px] xl:w-[580px] xl:h-[200px]"
                  placeholder="Escreva brevemente o que quer falar conosco que entraremos em contato assim que pudermos"
                ></textarea>
              </div>
            </div>
            <div className="flex xl:ml-auto">
              <button className="bg-[#d3bd88] hover:bg-white text-white hover:text-[#d3bd88] border-[1.7px] border-[#d3bd88] p-2">
                Enviar Menssagem
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
