import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import perilDefault from "../assets/image_perfil.png";
import Logo from "../assets/logo";
import MenuResp from "./menu";
import Buscar from "./search";

const Header = () => {
  return (
    <header className="fixed w-full bg-[#eae5d5] z-50">
      <nav className="items-center py-2 2xl:mr-44 2xl:w-full 2xl:flex-col 2xl:mb-4 2xl:items-center z-50">
        <div className="flex-wrap 2xl:ml-32 justify-between items-center container mx-auto px-4 2xl:flex-col">
          <div className="2xl:flex 2xl:items-center">
            <div className=" flex justify-center items-center 2xl:justify-start ">
              <div className="">
                <Logo />
              </div>
            </div>
            <div className="flex justify-center text-3xl font-sail text-primary 2xl:justify-start 2xl:text-42xl">
              <h1>Adotepet</h1>
            </div>
          </div>
          <p className="flex justify-center ml-1 text-primary font-nunito text-xs 2xl:justify-start 2xl:text-sm">
            Seu melhor amigo espera por você
          </p>
        </div>
        <div>
          <Buscar />
        </div>
        <div className="2xl:hidden w-full fixed top-1 left-0">
          <MenuResp />
        </div>
        <div class="hidden"></div>
        <div class="2xl:border-t 2xl:border-details 2xl:mt-7 2xl:mb-7"></div>
        <div className="hidden 2xl:flex 2xl:justify-end 2xl:px-60 xl:gap-28 2xl:gap-80 2xl:w-full">
          <ul className="font-munito flex flex-wrap gap-6 justify-center">
            <li className="text-primary hover:text-[#D3BD88]">
              <Link to={"/"}>Inicio</Link>
            </li>
            <li className="text-primary hover:text-[#D3BD88]">
              <Link to="/shopping">Loja</Link>
            </li>
            <li className="text-primary hover:text-[#D3BD88]">
              <Link to="/contact">Contato</Link>
            </li>
            <li className="text-primary hover:text-[#D3BD88]">
              <a href="/pets">Politica da loja</a>
            </li>
            <li className="text-primary hover:text-[#D3BD88]">
              <a href="/pets">Comentarios</a>
            </li>
            <li className="text-primary hover:text-[#D3BD88]">
              <a href="/pets">Agendamento online</a>
            </li>
          </ul>
          <div className="lg:hidden 2xl:flex 2xl:justify-end 2xl:gap-1">
            <div className="flex mr-1 rounded-full text-black/60">
              <button className="flex gap-2">
                <img
                  src={perilDefault}
                  alt=""
                  className="rounded-full w-6 h-6"
                />
                Login
              </button>
            </div>
            <div>
              <button>
                <ShoppingCart className="text-black/60" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
