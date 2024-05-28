import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import NewsList from "./NewsList";
import { LeftLine, RightLine } from "./design/News";
import { FaWhatsapp } from 'react-icons/fa';

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
      <div>
      <div className="pt-20">
      <Heading      
          title="CONTATO E LOCALIZAÇÃO"
        />
      </div>
      <div className="flex justify-between">
  <div className="flex pl-[8rem] google-map-code mx-auto">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.5524767079833!2d-48.9300625258926!3d-20.027288881383125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bcb103d4c10047%3A0x1583c4afc32c3804!2sAv.%20Bras%C3%ADlia%20-%20Frutal%2C%20MG%2C%2038200-000!5e0!3m2!1spt-BR!2sbr!4v1716929668439!5m2!1spt-BR!2sbr"
      width="600"
      height="450"
      frameborder="0"
      style={{ border: 0 }}
      allowfullscreen=""
      aria-hidden="false"
      tabindex="0"
      className="rounded-lg border-2 border-[#191539]"
    />
  </div>

  <div className="flex flex-col mr-[10rem] w-[28rem] pt-20">
    <ul className="list-none text-right">
      <li className="b-1 font-code font-bold tracking-wider uppercase border-b py-5">
        Avenida Brasília, 54, Bairro Jardim das Laranjeiras, Frutal, Estado de Minas Gerais, CEP 38.204-136
      </li>
      <li className="b-1 font-code font-bold tracking-wider uppercase border-b py-5">
        E-mail: codesfrutal@gmail.com
      </li>
      <li className="b-1 font-code font-bold tracking-wider uppercase border-b py-5">
        Telefone: (34) 9 9183-1427
      </li>
    </ul>
  </div>
</div>

        <a
        href="https://wa.me/3499183-1427" // replace with your WhatsApp number
        className="fixed bottom-4 right-4 bg-green-500 text-white p-2 rounded-full z-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={24} />
      </a>

      </div>
    </Section>
  );
};

export default News;
