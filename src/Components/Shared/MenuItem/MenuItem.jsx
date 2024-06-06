const MenuItem = ({ menu }) => {
  const { name, image, price, recipe } = menu;
  return (
    <div>
      <div className="flex gap-5 items-center my-2">
        <img
          style={{ borderRadius: '0 200px 200px 200px' }}
          className="w-[100px]"
          src={image}
          alt=""
        />
        <div>
          <h2 className="uppercase">{name}------------</h2>
          <p>{recipe}</p>
        </div>
        <p className="text-yellow-500">${price}</p>
      </div>
    </div>
  );
};

export default MenuItem;
