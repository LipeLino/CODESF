import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import NewsList from "./NewsList";
import { LeftLine, RightLine } from "./design/News";

const News = () => {
  return (
    <Section className="overflow-hidden" id="news">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>

        <Heading
          tag="A Voz de Frutal"
          title="CODESF em Destaque"
        />

        <div className="relative">
          <NewsList />
          <LeftLine />
          <RightLine />
        </div>

        <div className="flex justify-center mt-10">
          <a
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
            href="#blognews"
          >
            Leia na Íntegra
          </a>
        </div>
      </div>
    </Section>
  );
};

export default News;