const Policy = () => {
  return (
    <div className="flex">
      <div className="flex flex-col px-5 justify-start mt-36 gap-8 md:px-24 2xl:mt-64 2xl:flex 2xl:px-64">
        <div>
          <h1 className="font-poppins-bold text-main text-4xl 2xl:px-40">
            Política de Adoção
          </h1>
        </div>
        <div className="flex flex-col gap-8 2xl:flex 2xl:flex-col 2xl:px-52 2xl:gap-8">
          <div className="w-[380px] 2xl:w-[660px]">
            <h1 className="font-poppins-bold text-[#c0a87e] text-[19px] 2xl:text-2xl">
              Atendimento ao Adotante
            </h1>
            <p className="text-primary">
              No AdotePet, estamos dedicados a mostrar animais para adoção e a
              falar sobre a importância de adotar e dar uma vida digna ao seu
              novo amigo. Fornecemos informações sobre os cuidados com o animal,
              sua alimentação e meios de entretenimento.
            </p>
          </div>

          <div className="w-[380px] 2xl:w-[660px]">
            <h1 className="font-poppins-bold text-[#c0a87e] text-[19px] 2xl:text-2xl">
              Privacidade e Segurança do Adotante
            </h1>
            <p className="text-primary">
              Na AdotePet, a privacidade e segurança do adotante são prioridade.
              Garantimos a proteção das informações pessoais fornecidas durante
              o processo de adoção. Utilizamos linguagem clara e simples para
              transmitir confiança e segurança aos adotantes.
            </p>
          </div>

          <div className="w-[380px] 2xl:w-[660px]">
            <h1 className="font-poppins-bold text-[#c0a87e] text-[19px] 2xl:text-2xl">
              Processo de Adoção Responsável
            </h1>
            <p className="text-primary">
              No AdotePet, promovemos um processo de adoção responsável,
              fornecendo orientação e suporte aos adotantes. Estamos
              comprometidos em fornecer todas as informações necessárias para
              garantir que a adoção seja realizada de forma consciente e
              amorosa.
            </p>
          </div>

          <div>
            <h1 className="font-poppins-bold text-[#c0a87e] text-[19px] 2xl:text-2xl">
              Formas de Contribuição
            </h1>
            <p className="text-primary">
              <li>Doações Online</li>
              <li>Transferência Bancária</li>
              <li>Contribuições Offline</li>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Policy;
