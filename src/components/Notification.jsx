import { logo } from "../assets";

// eslint-disable-next-line react/prop-types
const Notification = ({ className, title }) => {
  return (
    <div
      className={`${className || ""
        } flex items-center p-4 pr-6 bg-color-ivory/30 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
    >
      <img src={logo} width={62} height={62} alt="Logo Codesf" />

      <div className="flex-1">
        <h6 className="mb-1 font-bold text-base text-color-russianviolet">{title}</h6>
      </div>
    </div>
  );
};

export default Notification;