import { Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const SearchMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef();

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div ref={searchRef} className="2xl:hidden flex justify-end w-full">
      <div className="2xl:hidden px-1 py-1 top-0">
        <div>
          <button onClick={() => setIsOpen(!isOpen)} className="">
            <Search className="w-7 h-6 mt-1" />
          </button>
        </div>
        {isOpen && (
          <div className="w-full h-full  fixed top-1 left-0 rounded-xl bg-[#eae5d5] shadow-md z-50 p-4">
            <div className="flex justify-center items-center">
              <div className="flex w-full items-center rounded-full border-none border-gray-400 overflow-hidden">
                <input
                  type="text"
                  placeholder="Pesquisar..."
                  className=" text-primary bg-primary/30 px-4 w-full py-1 focus:outline-none focus:ring-2  focus:ring-gray-400"
                />
                <button className="bg-[#d4b87b] hover:bg-[#c9a16b] px-2 py-2 p-2">
                  <Search className="w-12 h-4" />
                </button>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="flex text-primary hover:text-orange-500"
              >
                <X className="w-8 h-8" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default SearchMobile;
