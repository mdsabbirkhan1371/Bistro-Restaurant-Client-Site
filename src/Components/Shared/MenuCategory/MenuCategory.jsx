import Cover from '../Cover/Cover';
import MenuItem from '../MenuItem/MenuItem';

const MenuCategory = ({ item, title, coverImage, description }) => {
  return (
    <div className="my-12">
      {title && (
        <Cover
          image={coverImage}
          title={title}
          description={description}
        ></Cover>
      )}
      <div className="grid grid-cols-1 mt-14 md:grid-cols-2 gap-10">
        {item.map(menu => (
          <MenuItem menu={menu} key={menu._id}></MenuItem>
        ))}
      </div>
      <div className="text-center m-5">
        <button className="btn  btn-outline border-0 mt-5 px-10 text-xl border-b-2">
          Order Your Favorite Food
        </button>
      </div>
    </div>
  );
};

export default MenuCategory;
