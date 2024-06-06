import { Parallax } from 'react-parallax';

const Cover = ({ image, title, description }) => {
  return (
    <Parallax
      blur={{ min: -55, max: 50 }}
      bgImage={image}
      bgImageAlt="menu"
      strength={-200}
    >
      <div className="hero md:h-[700px]">
        <div className="hero-content rounded-sm bg-fixed bg-black bg-opacity-70 px-60 py-16  text-center text-neutral-content">
          <div className="max-w-md uppercase ">
            <h1 className="mb-5 text-4xl font-semibold">{title}</h1>
            <p className="mb-5">{description}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
