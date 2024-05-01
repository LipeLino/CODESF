import { logo, check } from "../assets";
import { collabApps, collabContent, collabText1, collabText2, collabText3, collabText4 } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../index.css';

gsap.registerPlugin(ScrollTrigger);

const Collaboration = () => {
  const titleRefs = useRef([]);
  const textRefs = useRef([]);

  useEffect(() => {
    titleRefs.current.forEach((titleRef, index) => {
      const textRef = textRefs.current[index];
      const prevTextRef = textRefs.current[index - 1];

      gsap.set(textRef, { height: 0, padding: 0, overflow: 'hidden' });

      gsap.fromTo(textRef,
        { autoAlpha: 0 },
        {
          autoAlpha: 1,
          height: 'auto', // or any value that is large enough to accommodate the content
          padding: '1rem', // or the original padding value
          scrollTrigger: {
            trigger: titleRef,
            start: 'top center',
            end: 'bottom -80%',
            toggleActions: 'play none none reverse',
            markers: false,
            onEnter: () => {
              if (prevTextRef) {
                gsap.to(prevTextRef, { autoAlpha: 0, height: 0, padding: 0 });
              }
            }
          }
        }
      );
    });
  }, []);

  return (
    <Section crosses>
      <div className="container lg:flex">
        <div className="max-w-[38rem]">
          <h2 className="h3 mb-4 md:mb-8 drop-shadow-2xl bakdrop-blur-sm bg-gradient-to-r bg-clip-text  text-transparent 
            from-color-russianviolet via-color-yaleblue to-color-russianviolet animate-text">
            Conselho de Desenvolvimento Econômico e Sustentável de Frutal
          </h2>

          <ul className="max-w-[24rem] mb-10 md:mb-14">
            {collabContent.map((item, index) => (
              <li className="mb-2 py-4" key={item.id}>
                <div className="flex items-center" ref={el => titleRefs.current[index] = el}>
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="py-2 font-semibold body-2 ml-5 drop-shadow-2xl bakdrop-blur-sm bg-gradient-to-r bg-clip-text  text-transparent 
  from-color-russianviolet via-color-yaleblue to-color-russianviolet animate-text">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4" ref={el => textRefs.current[index] = el}>{item.text}</p>
                )}
              </li>
            ))}
          </ul>

          <Button href="#news" className="border-gradient-r">Notícias</Button>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[26rem] lg:mx-auto">
            {collabText4}
          </p>

          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    src={logo}
                    width={48}
                    height={48}
                    alt="Logo CODESF"
                  />
                </div>
              </div>
            </div>

            <ul>
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${index * 45
                    }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${index * 45
                      }`}
                  >
                    <img
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />
                  </div>
                </li>
              ))}
            </ul>

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
