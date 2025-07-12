import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import perfilDefault from "../assets/image_perfil.png";
import LogoGoogle from "../assets/logo_google1.png";

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  const loginRef = useRef();

  const handleClickOutside = (event) => {
    if (loginRef.current && !loginRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div>
      <div ref={loginRef}>
        <div className="hidden xl:flex xl:mr-1 xl:rounded-full xl:text-black/60">
          <div>
            <button className="flex gap-2" onClick={() => setIsOpen(!isOpen)}>
              <img
                src={perfilDefault}
                alt=""
                className="rounded-full w-6 h-6"
              />
              <p>Login</p>
            </button>
          </div>
        </div>
        <div className="xl:hidden">
          <div>
            <div className="flex mr-5 rounded-full">
              <button onClick={() => setIsOpen(!isOpen)}>
                <img
                  src={perfilDefault}
                  alt=""
                  className="rounded-full w-8 h-8"
                />
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="flex w-full h-full fixed top-1 left-0 bg-[#eae5d5] text-primary z-50">
            <div className="flex justify-center mx-auto">
              <div className="flex flex-col flex-wrap items-center gap-7 mt-24 xl:mt-48">
                <div>
                  <h1 className="text-4xl text-primary font-nunito">Login</h1>
                </div>
                <div>
                  <p className="">
                    Novo no site?{""}{" "}
                    <Link className="hover:underline">Registre-se</Link>
                  </p>
                </div>
                <div className="flex flex-col flex-wrap gap-3 items-center">
                  <div>
                    <label>Email*</label>
                    <div>
                      <input
                        type="text"
                        placeholder="Email"
                        className=" text-black/40 bg-transparent border-black/40 border-[1.7px] w-72 xl:w-[280px] px-2 py-2 focus:outline-none rounded-sm mb-2"
                      />
                    </div>
                  </div>
                  <div>
                    <label>Senha*</label>
                    <div>
                      <input
                        type="text"
                        placeholder="Senha"
                        className=" text-black/40 bg-transparent border-black/40 border-[1.7px] w-72 xl:w-[280px] px-2 py-2 focus:outline-none rounded-sm mb-2"
                      />
                      <div>
                        <Link className="underline">Esqueceu a senha?</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <button className="bg-primary text-white justify-center items-center w-72 h-10">
                    Login
                  </button>
                  <p>ou</p>
                  <div className="flex">
                    <button className="flex bg-white items-center text-black justify-start gap-12 border-[1.7px] px-2 w-72 h-10">
                      <div>
                        <img src={LogoGoogle} className="w-5" />
                      </div>
                      <p className="">Login com o google</p>
                    </button>
                  </div>
                </div>
                <div className="mt-11 xl:hidden">
                  <button onClick={() => setIsOpen(false)}>
                    <X className="w-14 h-14" />
                  </button>
                </div>
              </div>
            </div>
            <div className="hidden xl:block xl:absolute xl:mt-44 xl:right-[580px]">
              <button onClick={() => setIsOpen(false)}>
                <X className="w-14 h-14" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Login;
