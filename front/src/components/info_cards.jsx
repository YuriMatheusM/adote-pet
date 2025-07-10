import ImageCat from "../assets/image_1_cat";
import ImageDog from "../assets/image_2_dog";
import ImageLoc from "../assets/image_3_loc";
import ImageRacao from "../assets/image_4_rcao";
import ImageCad from "../assets/image_5_cad";

const InfoCard = () => {
  return (
    <div className="flex-wrap font-sans text-primary justify-center items-center 2xl:flex 2xl:gap-24 2xl:mt-5">
      <div className="bg-primary/30 py-16 px-16 text-center my-11">
        <div className="flex gap-3 mx-11">
          <ImageCat className="w-14 h-14" />
          <ImageDog className="w-16 h-14" />
        </div>
        <h3 className="3xl font-bold">ADOÇÃO RESPONSAVEL</h3>
        <h1 className="font-[350]">Saiba mais sobre o precesso.</h1>
      </div>

      <div className="bg-primary/30 py-16 px-16 text-center my-11">
        <div className="flex mx-11">
          <ImageLoc className="w-14 h-14 mx-auto" />
        </div>
        <h3 className="3xl font-bold">COMPANHIA PARA TODA VIDA</h3>
        <h1 className="font-[350]">Saiba mais sobre o precesso.</h1>
      </div>

      <div className="bg-primary/30 py-16 px-16 text-center my-11">
        <div className="flex mx-11">
          <ImageRacao className="w-14 h-14 mx-auto" />
        </div>
        <h3 className="3xl font-bold">ADOÇÃO RESPONSAVEL</h3>
        <h1 className="font-[350]">Saiba mais sobre o precesso.</h1>
      </div>

      <div className="bg-primary/30 py-16 px-16 text-center my-11">
        <div className="flex mx-11">
          <ImageCad className="mx-auto" />
        </div>
        <div className="flex mx-11"></div>
        <h3 className="3xl font-bold">ADOÇÃO RESPONSAVEL</h3>
        <h1 className="font-[350]">Saiba mais sobre o precesso.</h1>
      </div>
    </div>
  );
};
export default InfoCard;
