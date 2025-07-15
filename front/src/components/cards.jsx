import imageCard1 from "../assets/image_card1.png";
import imageCard2 from "../assets/image_card2.png";
import imageCard3 from "../assets/image_card3.png";
import imageCard4 from "../assets/image_card4.png";

const Cards = () => {
  return (
    <div className="flex-wrap font-sans xl:flex xl:justify-center xl:gap-7 2xl:flex 2xl:justify-center 2xl:gap-12 2xl:px-36 ">
      <div className="flex justify-center w-[365px] h-[400px] mt-12 2xl:flex 2xl:h-[480px]">
        <img
          src={imageCard1}
          alt="destaques"
          className="w-full h-full object-cover"
        />
        <div className="absolute flex w-[365px] h-[400px] 2xl:h-[480px]">
          <div className="flex-wrap bg-[#9e6c00]/80 w-full h-full justify-center py-28 p-3 2xl:flex 2xl:items-center">
            <h1 className="font-poppins-bold text-menu text-4xl px-12">
              DESTAQUES
            </h1>
            <div class="flex border-t border-details mt-7 mb-6 w-16 ml-3"></div>
            <div className="2xl:flex 2xl:justify-center 2xl:text-center">
              <p className="text-black text-black/80 font-mono whitespace-pre-line">
                40% de desconto na primeira compra ao adotar
              </p>
            </div>
            <button className="bg-[#d4b87b] text-text/100 border-[1.7px] border-[#d4b87b] hover:bg-white transition duration-1000 mt-7 py-3 px-12 ">
              Adote Já
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-[365px] h-[400px] mt-12 2xl:w-[600px] 2xl:h-[480px]">
        <img
          src={imageCard2}
          alt="destaques"
          className="w-full h-full object-cover"
        />
        <div className="absolute flex w-[365px] h-[400px] 2xl:w-[600px] 2xl:h-[480px] 2xl:mt-64">
          <div className="flex-wrap w-full h-full justify-center items-center p-3 2xl: ">
            <h1 className="font-poppins-bold text-menu text-4xl">
              Cães para Adoção
            </h1>
            <div class="flex border-t border-details mt-7 mb-6 w-16 ml-3"></div>
            <p className="text-black text-black/80 font-mono">
              Conheça nossos cães disponiveis para adoções
            </p>
            <button className="bg-[#d4b87b] text-text/100 border-[1.7px] border-[#d4b87b] hover:bg-white transition duration-1000 mt-7 py-3 px-12 ">
              Adote Agora
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-[365px] h-[400px] mt-12 2xl:w-[530px] 2xl:h-[480px]">
        <img
          src={imageCard3}
          alt="destaques"
          className="w-full h-full object-cover"
        />
        <div className="absolute flex w-[365px] h-[400px] 2xl:w-[530px] 2xl:h-[480px] 2xl:mt-64">
          <div className="flex-wrap w-full h-full justify-center p-3 ">
            <h1 className="font-poppins-bold text-menu text-4xl">
              Gatos para Adoção
            </h1>
            <div class="flex border-t border-details mt-7 mb-6 w-16 ml-3"></div>
            <p className="text-black text-black/80 font-mono">
              Conheça nossos gatos disponiveis para adoção
            </p>
            <button className="bg-[#d4b87b] text-text/100 border-[1.7px] border-[#d4b87b] hover:bg-white transition duration-1000 mt-7 py-3 px-12 ">
              Adote Agora
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-[365px] h-[400px] mt-12 xl:w-[800px] 2xl:w-[980px] 2xl:h-[480px] mb-10">
        <img
          src={imageCard4}
          alt="destaques"
          className="w-full h-full object-cover"
        />
        <div className="absolute flex w-[365px] h-[400px] xl:w-[800px] xl:w- 2xl:w-[980px] 2xl:h-[480px] 2xl:mt-64">
          <div className="flex-wrap w-full h-full justify-center items-center p-3 ">
            <h1 className="font-poppins-bold text-menu text-4xl">
              Pequeninos para Adoção
            </h1>
            <div class="flex border-t border-details mt-7 mb-6 w-16 ml-3"></div>
            <p className="text-black text-black/80 font-mono">
              Conheça nossos pequenos animais disponiveis para adoção
            </p>
            <button className="bg-[#d4b87b] text-text/100 border-[1.7px] border-[#d4b87b] hover:bg-white transition duration-1000 mt-7 py-3 px-12 ">
              Adote Agora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cards;
