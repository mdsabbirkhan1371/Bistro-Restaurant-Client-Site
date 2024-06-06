import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import featuredImg from '../../../../../public/assets/home/featured.jpg';
import './Featured.css';
const Featured = () => {
  return (
    <div className="featured bg-fixed pt-8 my-20">
      <SectionTitle
        heading="Check it out"
        subHeading="Featured Item"
      ></SectionTitle>

      <div className="md:flex items-center bg-opacity-60  bg-slate-500 justify-center pb-20 px-36 pt-20 text-white gap-10">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div>
          <h3>March 20, 2023</h3>
          <h3>WHERE CAN I GET SOME?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline border-0 mt-5 px-10 text-xl text-black border-b-2">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
