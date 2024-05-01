import { loading } from "../assets";

const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center justify-center h-[3.5rem] px-6 bg-color-ivory/30 rounded-[1.7rem] ${className || ""
        } text-base font-semibold backdrop-blur `}
    >
      <img className="w-5 h-5 mr-4 font-bold" src={loading} alt="Loading" />
      Uma nova Frutal
    </div>
  );
};

export default Generating;
