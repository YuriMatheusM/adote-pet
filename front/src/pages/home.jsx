import gatinho from "../assets/cat.png";
import dogsnapraia from "../assets/dogs.jpg";
import imagem_teste from "../assets/teste.png";
import Cards from "../components/cards";
import InfoCard from "../components/info_cards";
import Slides from "../components/slides";

const Home = () => {
  const slide = [
    {
      image: gatinho,
      description: "Bem-vindos ao Adotepet",
      subdescription: " ",
      buttonText: "Adotar Agora",
    },
    {
      image: dogsnapraia,
      description: "Conheça Nossos Animais",
      subdescription:
        "40% de desconto na primeira compra ao adotar um animalzinho",
      buttonText: "Adote Já",
    },
    {
      image: imagem_teste,
      description: "Brinque, Ame, Adote, Repita",
      subdescription: "",
      buttonText: "Adote um Amigo",
    },
  ];
  return (
    <div className="flex flex-col items-center min-h-screen xl:w-screen">
      <div className="flex mt-24 2xl:mt-48 w-full">
        <Slides autoSlide={true}>
          {slide.map((slide, index) => (
            <div className="relative flex w-full h-full" key={index}>
              <img
                key={index}
                src={slide.image}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center py-36 w-64 xl:w-full">
                <div className="bg-primary/30 rounded-xl py-6 px-3 max-w-xl w-full shadow-lg text-start ml-10 transform 2xl:ml-96">
                  <h3 className="text-2xl font-poppins-bold text-menu xl:text-6xl">
                    {slide.description}
                  </h3>
                  <p className="text-black xl:text-black/80 font-mono xl:text-2xl xl:mt-3">
                    {slide.subdescription}
                  </p>
                  <div className="flex justify-start">
                    <button className="bg-[#d4b87b] text-text/100 border-[1.7px] border-[#d4b87b] hover:bg-white transition duration-1000 mt-3 py-1 px-2 xl:mt-5 xl:py-2 xl:px-6">
                      {slide.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slides>
      </div>
      <div>
        <InfoCard />
      </div>
      <div>
        <Cards />
      </div>
      <div>
        <Shop />
      </div>
    </div>
  );
};
export default Home;
