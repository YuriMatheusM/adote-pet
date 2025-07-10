import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import perilDefault from "../assets/image_perfil.png";
import Logo from "../assets/logo";
import SearchMobile from "./searchMobile";

const MenuResp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav ref={menuRef}>
      <div className="flex justify-end px-2">
        <div className="">
          <SearchMobile />
        </div>
        <button
          className="hover:bg-orange-100 rounded-md transition duration-5000 ease-in-out"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="w-10 h-8" />
        </button>
      </div>
      {isOpen && (
        <div className="w-full fixed top-1 left-0 rounded-xl bg-menu shadow-md z-50 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Logo className="h-11" />
            <div className="flex mr-5 rounded-full">
              <button className="">
                <img
                  src={perilDefault}
                  alt=""
                  className="rounded-full w-8 h-8"
                />
              </button>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="flex text-primary hover:text-orange-500"
            >
              <X className="w-8 h-8" />
            </button>
          </div>
          <ul className="text-center space-y-2 ">
            <li>
              <a href="/" className="text-primary hover:text-[#D3BD88]">
                Inicio
              </a>
            </li>
            <li>
              <a href="/pets" className="text-primary hover:text-[#D3BD88]">
                Loja
              </a>
            </li>
            <li>
              <a href="/about" className="text-primary hover:text-[#D3BD88]">
                Contato
              </a>
            </li>
            <li>
              <a href="/pets" className="text-primary hover:text-[#D3BD88]">
                Politica da loja
              </a>
            </li>
            <li>
              <a href="/pets" className="text-primary hover:text-[#D3BD88]">
                Comentarios
              </a>
            </li>
            <li>
              <a href="/pets" className="text-primary hover:text-[#D3BD88]">
                Agendamento online
              </a>
            </li>
            <li>
              <a href="/pets" className="text-primary hover:text-[#D3BD88]">
                Carrinho
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
export default MenuResp;
