import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";

const Slides = ({
  children: images,
  autoSlide = false,
  autoSlideInterval = 9000,
}) => {
  const [curr, setCurr] = useState(0);

  const prevSlide = () =>
    setCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1));
  const nextSlide = () =>
    setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative overflow-hidden w-full h-[35vh] lg:w-full lg:h-[60vh]">
      <div
        className="flex h-full lg:h-full transition-transform duration-2000 ease-in-out"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="flex-shrink-0 w-full h-full">
            <div className="relative w-full h-full">
              {React.cloneElement(img, {
                className: "w-full h-full object-cover",
                alt: img.props.alt || `Slide ${index + 1}`,
              })}
            </div>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full text-gray-600 transition-all pointer-events-auto"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="w-6 h-6 lg:w-8 lg:h-8" />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 rounded-full text-gray-600 transition-all pointer-events-auto"
          aria-label="Próximo slide"
        >
          <ChevronRight className="w-6 h-6 lg:w-8 lg:h-8" />
        </button>
      </div>
      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex items-center justify-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurr(i)}
              className={`transition-all w-2 h-2 rounded-full ${
                curr === i ? "bg-gray-500 w-4" : "bg-white/50"
              }`}
              aria-label={`Ir para o slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slides;
