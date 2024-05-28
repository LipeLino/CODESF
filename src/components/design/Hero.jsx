import { useEffect, useState } from "react";
import { MouseParallax } from "react-just-parallax";
import { nature, idea, finance} from "/workspaces/CODESF/src/assets/index.js";

import PlusSvg from "../../assets/svg/PlusSvg";

export const Gradient = () => {
  return (
    <>
      <div className="relative z-1 h-6 mx-2.5 bg-n-11 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-8" />
      <div className="relative z-1 h-6 mx-6 bg-n-11/70 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-20" />
    </>
  );
};

export const BottomLine = () => {
  return (
    <>
      <div className="hidden absolute top-[53rem] left-0 right-0 h-0.25 bg-n-6 pointer-events-none xl:block z-2" />

      <PlusSvg className="hidden absolute top-[52.7375rem] left-[2.1875rem] z-2 pointer-events-none xl:block" />

      <PlusSvg className="hidden absolute top-[52.7375rem] right-[2.1875rem] z-2 pointer-events-none xl:block" />

      <div className="block absolute top-[55.5rem] left-0 right-0 h-0.25 bg-n-6 pointer-events-none xl:hidden z-0" />

      <PlusSvg className="block absolute top-[55.1675rem] left-[1.1875rem] z-2 pointer-events-none xl:hidden" />

      <PlusSvg className="block absolute top-[55.1675rem] right-[1.1875rem] z-2 pointer-events-none xl:hidden" />

      <div className="hidden absolute bottom-[0.3rem] left-0 right-0 h-0.25 bg-n-6 pointer-events-none xl:block z-2" />

      <PlusSvg className="hidden absolute -bottom-0 left-[2.1875rem] z-2 pointer-events-none xl:block" />

      <PlusSvg className="hidden absolute bottom-0 right-[2.1875rem] z-2 pointer-events-none xl:block" />
    </>
    
  );
};

const Rings = () => {
  return (
    <>
      <div className="absolute top-1/2 left-1/2 w-[65.875rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
    </>
  );
};

// eslint-disable-next-line react/prop-types
export const BackgroundCircles = ({ parallaxRef }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="absolute -top-[42.375rem] left-1/2 w-[78rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 md:-top-[38.5rem] xl:-top-[32rem]">
      <Rings />

      {/* Moving background colored circle balls */}

    <MouseParallax
      strength={0.07}
      delay={1}
      parallaxContainerRef={parallaxRef}
      style={{ position: 'relative', zIndex: 100 }}
    >
      <div>
        <p className="max-lg:text-sm max-lg:text-justify w-[40vh] lg:w-[32rem] right-0 lg:translate-x-[5rem] translate-x-[26rem] z-50 relative h-auto
            text-shadow bakdrop-blur-sm bg-gradient-to-r bg-clip-text text-transparent 
            from-color-russianviolet via-color-yaleblue to-color-russianviolet animate-text">
          A história do CODESF começou em 2023, inspirada pelo modelo de governança de Rio Verde (GO), com o objetivo de impulsionar o desenvolvimento de Frutal através do empreendedorismo e da participação ativa da sociedade civil.
        </p>
        <img
          src={idea}
          className="max-lg:left-[55%] max-lg:top-[6rem] absolute size-20 right-[10rem] z-50 top-[1rem] animate-bounce"
          alt="Idea"
        />
        <p className="max-lg:text-sm max-lg:text-justify w-[40vh] lg:w-[32rem] left-0 py-[10rem] max-lg:pt-[5rem] max-lg:pb-[8rem] lg:py-10 text-right lg:translate-x-[40rem] z-50 relative translate-x-[26rem] h-auto
            text-shadow bakdrop-blur-sm bg-gradient-to-r bg-clip-text text-transparent 
          from-color-russianviolet via-color-yaleblue to-color-russianviolet animate-text">
          Fundado em janeiro de 2024, o CODESF rapidamente se organizou em Câmaras Técnicas focadas em áreas estratégicas como investimentos, desenvolvimento urbano, meio ambiente, energia, tecnologia, dados e saúde.
        </p>
        <img
          src={finance}
          className="max-lg:left-[40%] max-lg:top-[20rem] absolute size-22 left-[10rem] z-50 top-[9rem] animate-bounce"
          alt="Finance"
        />
        <p className="max-lg:text-sm max-lg:text-justify w-[40vh] lg:w-[40rem] right-0 lg:translate-x-[5rem] translate-x-[26rem] z-50 relative h-auto
            text-shadow bakdrop-blur-sm bg-gradient-to-r bg-clip-text text-transparent 
          from-color-russianviolet via-color-yaleblue to-color-russianviolet animate-text">
          Desde então, o CODESF tem realizado projetos como atração de novas empresas, elaboração do Plano Diretor e desenvolvimento do mercado de tecnologia, além de planejar um fundo de microcrédito, um Distrito Industrial, um curso de Medicina na UEMG e um hospital privado, demonstrando seu compromisso com o desenvolvimento socioeconômico de Frutal.
        </p>
        <img
          src={nature}
          className="max-lg:left-[55%] max-lg:top-[35rem] absolute size-[8rem] right-[8rem] z-50 top-[17rem] animate-bounce"
          alt="Nature"
        />
      </div>
      <div className="z-10 animate-rotate-slow-46 transform-rotate-46 absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[46deg]">
        <div
          className={`w-2 h-2 -ml-1 -mt-36 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-1000 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
        />
      </div>
      <div className="z-10 animate-rotate-slow-56 transform-rotate-56 absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[56deg]">
        <div
          className={`w-4 h-4 -ml-1 -mt-32 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
        />
      </div>
      <div className="z-10 animate-rotate-slow-54 transform-rotate-54 absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[54deg]">
        <div
          className={`hidden w-4 h-4 -ml-1 mt-[12.9rem] bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full xl:block transit transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
        />
      </div>
      <div className="z-10 animate-rotate-slow-65 transform-rotate-65 absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[65deg]">
        <div
          className={`w-3 h-3 -ml-1.5 mt-52 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
        />
      </div>
      <div className="z-10 animate-rotate-slow-85 transform-rotate-85 absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[85deg]">
        <div
          className={`w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
        />
      </div>
      <div className="z-10 animate-rotate-slow-70 transform-rotate-70 absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[70deg]">
        <div
          className={`w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
        />
      </div>
    </MouseParallax>

    </div>
  );
};
