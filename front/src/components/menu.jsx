import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo";
import Login from "./login";
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
          className="hover:bg-orange-100 rounded-md transition duration-700 ease-in-out"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="w-10 h-8" />
        </button>
      </div>
      {isOpen && (
        <div className="w-full fixed top-1 left-0 rounded-xl bg-menu shadow-md z-50 p-4">
          <div className="container mx-auto flex justify-between items-center mb-2">
            <Logo className="h-11" />
            <div>
              <Login />
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
              <Link
                to="/"
                className="text-primary hover:text-[#D3BD88]"
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/shopping"
                className="text-primary hover:text-[#D3BD88]"
                onClick={() => setIsOpen(false)}
              >
                Loja
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-primary hover:text-[#D3BD88]"
                onClick={() => setIsOpen(false)}
              >
                Contato
              </Link>
            </li>
            <li>
              <a
                href="/pets"
                className="text-primary hover:text-[#D3BD88]"
                onClick={() => setIsOpen(false)}
              >
                Politica da loja
              </a>
            </li>
            <li>
              <a
                href="/pets"
                className="text-primary hover:text-[#D3BD88]"
                onClick={() => setIsOpen(false)}
              >
                Comentarios
              </a>
            </li>
            <li>
              <a
                href="/pets"
                className="text-primary hover:text-[#D3BD88]"
                onClick={() => setIsOpen(false)}
              >
                Agendamento online
              </a>
            </li>
            <li>
              <a
                href="/pets"
                className="text-primary hover:text-[#D3BD88]"
                onClick={() => setIsOpen(false)}
              >
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
