import { Search } from "lucide-react";

const Buscar = () => {
  return (
    <div className="flex justify-end w-full 2xl:flex 2xl:w-full 2xl:px-48 2xl:justify-end 2xl:mt-9 2xl:fixed 2xl:top-0 2xl:left-9">
      <div className="hidden 2xl:flex 2xl:items-center 2xl:rounded-full 2xl:border-none 2xl:border-gray-400 2xl:overflow-hidden">
        <input
          type="text"
          placeholder="Pesquisar..."
          className=" text-primary 2xl:bg-primary/30 2xl:px-4 2xl:py-1.5 2xl: 2xl:focus:outline-none 2xl:focus:ring-2  2xl:focus:ring-gray-400"
        />
        <button className="bg-[#d4b87b] hover:bg-[#c9a16b] 2xl:px-2 2xl:py-2.5 2xl:p-2">
          <Search className="2xl:w-12 2xl:h-4" />
        </button>
      </div>
    </div>
  );
};
export default Buscar;
