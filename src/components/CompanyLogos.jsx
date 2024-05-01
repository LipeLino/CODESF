import { companyLogos } from "../constants";
import '../index.css'

// eslint-disable-next-line react/prop-types
const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline text-2xl mb-6 text-center text-n-1/80 backdrop-blur-sm drop-shadow-2xl">
        DESENVOLVENDO FRUTAL COM O APOIO DE:
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem] animate-infinite-scroll group-hover:pause"
            key={index}
          >
            <img src={logo} width={134} height={28} alt={logo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
