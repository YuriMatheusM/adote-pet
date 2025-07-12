import { FacebookIcon, InstagramIcon, YoutubeIcon } from "lucide-react";
import { Link } from "react-router-dom";
import MethodsPagaments from "../assets/pag.png";
import SecFooter from "../assets/sec_footer";

const Footer = () => {
  return (
    <footer className="bg-transparent xl:px-16">
      <div className="bg-[#d3bd88] text-white pt-10 pb-16 w-full xl:pb-32">
        <div className="flex container mx-auto px-4 xl:justify xl:mt-14">
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-28">
            <div>
              <h1 className="font-poppins-bold text-[20px] mb-2">Loja</h1>
              <p>Av.Taina, 98 João Pessoa, PB 12345-678 </p>
              <p> Tel: (83) 3456-7890</p>
            </div>
            <div>
              <h1 className="font-poppins-bold text-[20px]">Adoção e loja</h1>
              <div className="flex flex-col flex-wrap gap-1">
                <Link className="inline-flex w-fit">Cães</Link>
                <Link className="inline-flex w-fit">Gatos</Link>
                <Link className="inline-flex w-fit">Pequeninos</Link>
              </div>
            </div>
            <div>
              <h1 className="font-poppins-bold text-[20px]">Detalhes</h1>
              <div className="flex flex-col gap-1">
                <Link className="inline-flex w-fit">Contato</Link>
                <Link className="inline-flex w-fit">Envios</Link>
                <Link className="inline-flex w-fit">Política da Loja</Link>
                <Link className="inline-flex w-fit">FAQ</Link>
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
      <div className="px-4 mt-11 container grid grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-4 xl:mx-auto mb-16">
        <div className="text-[13px]">
          <p className="font-poppins-bold text-[#8a836c] text-[15px]">
            Junte-se a nós!
          </p>
          <div className="flex gap-3 mt-2">
            <a href="#">
              <FacebookIcon className="w-[22px] h-[19px] text-black/70" />
            </a>
            <a href="https://youtu.be/-fmQowOCSkc?si=ULQQhfz_yYe2zivM">
              <YoutubeIcon className="w-[22px] h-[19px] text-black/70" />
            </a>
            <a href="https://www.instagram.com/yuri__matheus__?igsh=MnZ5OTk3NTI4a3lw">
              <InstagramIcon className="w-[22px] h-[19px] text-black/70" />
            </a>
          </div>
        </div>
        <div className="w-50 text-[13px]">
          <p className="text-[#8a836c]">
            <p>Mimus Ltda. - CPF/CNPJ: 12.345.678/0000-01 -</p>
            <p>Av. Taina, 98 - João Pessoa PB 12345-678</p>
            <p>iadotepet@gmail.com</p> <p>Telefone: (83) 3456-7890</p>
            <p>Estimativa de entrega 2 - 5 dias úteis.</p>
          </p>
        </div>
        <div className="text-[13px]">
          <div className="flex gap-1">
            <div>
              <SecFooter className="w-[20px] h-[18px]" />
            </div>
            <div>
              <p className="font-poppins-bold text-[#8a836c] text-[15px]">
                Segurança
              </p>
            </div>
          </div>
          <p className="text-[#8a836c]">
            <p>Ambiente 100% Seguro.</p> <p>Sua Informação é Protegida </p>
            <p>Pela Criptografia SSL 256-Bit</p>
          </p>
        </div>
        <div>
          <div className="w-40">
            <p className="font-poppins-bold text-[#8a836c] text-[15px]">
              Métodos de Pagamentos Aceitos
            </p>
          </div>

          <div>
            <img src={MethodsPagaments} className="h-[80px]" />
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
