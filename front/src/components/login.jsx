import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import perfilDefault from "../assets/image_perfil.png";
import LogoGoogle from "../assets/logo_google1.png";

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRegisterMode, setIsRegisterMode] = useState(false);
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
        <div className="hidden 2xl:flex 2xl:mr-1 2xl:rounded-full 2xl:text-black/60">
          <div>
            <button
              className="flex gap-2"
              onClick={() => {
                setIsOpen(true);
                setIsRegisterMode(false);
              }}
            >
              <img
                src={perfilDefault}
                alt=""
                className="rounded-full w-6 h-6"
              />
              <p>Login</p>
            </button>
          </div>
        </div>
        <div className="2xl:hidden">
          <div>
            <div className="flex mr-5 rounded-full">
              <button
                onClick={() => {
                  setIsOpen(true);
                  setIsRegisterMode(false);
                }}
              >
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
              <div className="flex flex-col flex-wrap items-center gap-7 mt-24 2xl:mt-48">
                <h1 className="text-4xl text-primary font-nunito">
                  {isRegisterMode ? "Registre-se" : "Login"}
                </h1>
                <p>
                  {isRegisterMode ? "Já tem uma conta?" : "Novo no site?"}{" "}
                  <button
                    className="hover:underline"
                    onClick={() => setIsRegisterMode(!isRegisterMode)}
                  >
                    {isRegisterMode ? "Faça Login" : "Registre-se"}
                  </button>
                </p>
                {isRegisterMode ? (
                  <div>
                    <div className="flex flex-col flex-wrap gap-3 items-center mb-4">
                      <div>
                        <label>Nome*</label>
                        <div>
                          <input
                            type="text"
                            placeholder="Nome"
                            className=" text-black/40 bg-transparent border-black/40 border-[1.7px] w-72 xl:w-[280px] px-2 py-2 focus:outline-none rounded-sm mb-2"
                          />
                        </div>
                      </div>
                      <div>
                        <label>Sobrenome*</label>
                        <div>
                          <input
                            type="text"
                            placeholder="Sobrenome"
                            className=" text-black/40 bg-transparent border-black/40 border-[1.7px] w-72 xl:w-[280px] px-2 py-2 focus:outline-none rounded-sm mb-2"
                          />
                        </div>
                      </div>
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
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                      <button className="bg-primary text-white justify-center items-center w-72 h-10">
                        Cadastrar
                      </button>
                      <div>
                        <p className="font-nunito text-[12px]">
                          Por favor conpletar o cadastro no perfil
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="flex flex-col flex-wrap gap-3 items-center mb-4">
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
                            className=" text-black/40 bg-transparent border-black/40 border-[1.7px] w-72 xl:w-[280px] px-2 py-2 focus:outline-none rounded-sm "
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
                  </div>
                )}
                <div className="fixed bottom-4 2xl:hidden">
                  <button onClick={() => setIsOpen(false)}>
                    <X className="w-14 h-14" />
                  </button>
                </div>
              </div>
            </div>
            <div className="hidden 2xl:block 2xl:absolute 2xl:mt-44 2xl:right-[580px]">
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
