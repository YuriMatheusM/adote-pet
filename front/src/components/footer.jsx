import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-transparent xl:px-16">
      <div className="bg-[#d3bd88] text-white pt-10 pb-16 w-full mb-8 2xl:mb-8 xl:pb-">
        <div className="flex container mx-auto px-4 xl:justify xl:mt-14">
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-28">
            <div>
              <h1 className="font-poppins-bold text-[20px] mb-2">Loja</h1>
              <p>Av.Taina, 98 João Pessoa, PB 12345-678 </p>
              <p> Tel: (83) 3456-7890</p>
            </div>
            <div>
              <h1 className="font-poppins-bold text-[20px]">Adoção e loja</h1>
              <div className="flex flex-col gap-1">
                <Link>Cães</Link>
                <Link>Gatos</Link>
                <Link>Pequeninos</Link>
              </div>
            </div>
            <div>
              <h1 className="font-poppins-bold text-[20px]">Detalhes</h1>
              <div className="flex flex-col gap-1">
                <Link>Contato</Link>
                <Link>Envios</Link>
                <Link>Política da Loja</Link>
                <Link>FAQ</Link>
              </div>
            </div>
            <div>
              <h1 className="font-poppins-bold text-[20px]">
                Receba dicas e ofertas
              </h1>
              <p className="mb-2">Insira o seu email aqui</p>
              <div className="flex flex-col">
                <input
                  type="text"
                  placeholder="Email"
                  className=" text-black/40 bg-transparent border px-4 py-2 focus:outline-none rounded-sm mb-2"
                />
                <button className="bg-white text-[#d3bd88] py-2 hover:bg-transparent hover:text-white border-[1.7px] transition duration-300">
                  enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
