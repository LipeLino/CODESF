import TagLine from "./Tagline";

const Heading = ({ className, title, text, tag }) => {
  return (
    <div
      className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center text-shadow bakdrop-blur-sm bg-gradient-to-r bg-clip-text  text-transparent 
      from-color-russianviolet via-color-yaleblue to-color-russianviolet animate-text`}
    >
      {tag && <TagLine className="mb-4 md:justify-center">{tag}</TagLine>}
      {title && <h2 className="h2 font-bold">{title}</h2>}
      {text && <p className="font-semibold body-2 mt-4 text-n-4">{text}</p>}
    </div>
  );
};

export default Heading;
