const FoodCart = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="my-5">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="" />
        </figure>
        <p className="text-black absolute right-0 mr-12 text-xl font-semibold mt-16">
          {' '}
          ${price}
        </p>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button className="btn  btn-outline border-0 mt-5 px-10 text-xl border-b-2">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCart;
