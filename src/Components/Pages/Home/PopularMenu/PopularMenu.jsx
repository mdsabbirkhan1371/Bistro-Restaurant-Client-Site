import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import MenuItem from '../../../Shared/MenuItem/MenuItem';
import useMenu from '../../../../hooks/useMenu';

const PopularMenu = () => {
  const [menu] = useMenu();
  const popularItems = menu.filter(item => item.category === 'popular');

  return (
    <section className="mb-12">
      <SectionTitle
        heading="Popular Items"
        subHeading="FROM OUR MENU"
      ></SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {popularItems.map(menu => (
          <MenuItem menu={menu} key={menu._id}></MenuItem>
        ))}
      </div>
      <div className="text-center m-5">
        <button className="btn  btn-outline border-0 mt-5 px-10 text-xl border-b-2">
          Order Now
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
