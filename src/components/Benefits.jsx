import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

const Benefits = () => {
  return (
    <Section id="organizacao">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-3xl max-lg:text-center h1 text-shadow bakdrop-blur-sm bg-gradient-to-r bg-clip-text  text-transparent 
          from-color-russianviolet via-color-yaleblue to-color-russianviolet animate-text"
          title="Crescimento e Prosperidade, Nossa Prioridade"
        />
        <div className="w-full justify-center lg:hidden flex">
          <Heading
            className="md:max-w-md lg:max-w-3xl max-lg:text-center h2"
            title="6 Câmaras Técnicas"
          />
        </div>

        <div className="flex flex-wrap 2xl:gap-5 mb-10 justify-between">
          {benefits.slice(0, 3).map((item) => (
            <div
              className="group block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5 font-bold backdro-blur-md">{item.title}</h5>
                <p className="group-hover:font-semibold body-2 mb-6 text-color-russianviolet text-shadow backdro-blur-md">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Saiba mais
                  </p>
                  <Arrow />
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-color-ivory"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-40">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
              <ClipPath />
            </div>
          ))}
        </div>

        <div className="w-full justify-center mt-20 hidden lg:flex">
          <Heading
            className="md:max-w-md lg:max-w-3xl max-lg:text-center h1 text-shadow bakdrop-blur-sm bg-gradient-to-r bg-clip-text  text-transparent 
            from-color-russianviolet via-color-yaleblue to-color-russianviolet animate-text"
            title="6 Câmaras Técnicas"
          />
        </div>

        <div className="flex flex-wrap 2xl:gap-5 mb-10 justify-between">
          {benefits.slice(3).map((item) => (
            <div
              className="group block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5 backdro-blur-md font-bold">{item.title}</h5>
                <p className="group-hover:font-semibold body-2 mb-6 text-color-russianviolet backdro-blur-md text-shadow">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Saiba mais
                  </p>
                  <Arrow />
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-color-ivory"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-40">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
