import { ListFilterPlus } from "lucide-react";

const Shopping = () => {
  return (
    <div className="flex flex-col min-h-screen xl:w-screen">
      <div className="items-center justify-center mt-36 2xl:mt-60">
        <div className="flex justify-center">
          <h1 className="font-poppins-bold text-main text-3xl md:text-4xl">
            Todos os produtos
          </h1>
        </div>
        <div className="flex flex-col 2xl:flex-wrap gap-7 mt-16">
          <div className="2xl:hidden mr-5 flex justify-end">
            <button className="text-black/65 rounded-md transition ease-in-out">
              <ListFilterPlus className="w-14 h-8" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Shopping;
