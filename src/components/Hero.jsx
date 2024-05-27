import { curve, frutal, gradientblue, videofrutal } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";
import TypeWriterEffect from "react-typewriter-effect";
import PlusSvg from "../assets/svg/PlusSvg";
import ThreeDModel from './3D/3d.jsx';

const myAppRef = document.querySelector(".scrollable-div");

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="relative pt-[14.6rem] -mt-[5.25rem] overflow-hidden"
      id="hero"
    >
    <div>
    <>
      <div className="hidden absolute top-[3rem] left-0 right-0 h-0.25 bg-n-6 pointer-events-none xl:block z-2" />

      <PlusSvg className="hidden absolute top-[2.6875rem] left-[2.1875rem] z-2 pointer-events-none xl:block" />

      <PlusSvg className="hidden absolute top-[2.6875rem] right-[2.1875rem] z-2 pointer-events-none xl:block" />
    </>
      <video
        autoPlay
        loop
        muted
        className="absolute top-12 lg:px-10 w-screen h-100vh object-cover max-lg:mt-10"
      >
        <source src={videofrutal} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    <div>
      <div className="hidden absolute top-[119.8vh] left-0 right-0 h-0.25 bg-n-6 pointer-events-none xl:block z-2" />

      <PlusSvg className="hidden absolute top-[119.2vh] left-[2.1875rem] z-2 pointer-events-none xl:block" />

      <PlusSvg className="hidden absolute top-[119.2vh] right-[2.1875rem] z-2 pointer-events-none xl:block" />
    </div>
    </div>
      <div className="relative mt-40 z-1 max-w-[62rem] max-lg:-mt-10 mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
        <img
          src={gradientblue}
          className="absolute -top-10 w-full h-[14rem] object-cover opacity-80 blur-3xl rounded-extra-3xl"
          alt="Gradient Background"
        />
        <h1 className="h5 mb-10 sm:h1 max-xs1:text-xl lg:text-6xl backdrop-blur-0 text-shadow rounded-extra4xl">
          <div className="pb-5 flex justify-center text-shadow bakdrop-blur-sm bg-gradient-to-r bg-clip-text text-transparent 
            from-color-russianviolet via-color-yaleblue to-color-russianviolet animate-text">
            <TypeWriterEffect
              startDelay={100}
              cursorColor="white"
              text="Explore o Futuro de Frutal"
              typeSpeed={100}
              scrollArea={myAppRef}
              hideCursorAfterText={true}
            />
          </div>
          <span className="inline-block relative">
            <div className="flex justify-center text-shadow bakdrop-blur-sm bg-gradient-to-r bg-clip-text text-transparent 
            from-color-russianviolet via-color-yaleblue to-color-russianviolet animate-text">
              <TypeWriterEffect
                startDelay={3200}
                cursorColor="white"
                text="CODESF"
                typeSpeed={200}
                scrollArea={myAppRef}
                hideCursorAfterText={true}
              />
            </div>
            <img
              src={curve}
              className="absolute top-full left-0 w-full xl:-mt-2 pt-2"
              width={624}
              height={28}
              alt="Curve"
            />
          </span>
        </h1>
        <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8 text-shadow backdrop-blur-0 max-lg:text-center rounded-extra-4xl max-lg:py-4">
          O CODESF reúne diversos setores da sociedade para impulsionar o
          desenvolvimento sustentável de Frutal, visando torná-la uma cidade
          moderna, acolhedora e próspera.
        </p>
        <Button href="#organizacao" white>
          SOBRE O CODESF
        </Button>
      </div>
      <div className="container relative lg:mt-120vh" ref={parallaxRef}>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl">
            <div className="relative bg-n-8/50 rounded-[1rem] z-50 shadow-xl">
              <div className="h-[1.4rem] bg-n-1 rounded-t-[0.9rem]" />

              <div className="aspect-[42/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={frutal}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[13%] z-0"
                  width={1024}
                  height={490}
                  alt="Frutal"
                />
                
                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-color-ivory/30 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[15rem] w-[18rem] xl:flex"
                    title="Frutal 2050"
                  />
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>

          <BackgroundCircles className="animate-rotate-slow" />
        </div>

        <CompanyLogos className="hidden relative z-10 mt-20 lg:block backdrop-blur-sm drop-shadow-2xl overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] group" />
      </div>
    </Section>
  );
};

export default Hero;
