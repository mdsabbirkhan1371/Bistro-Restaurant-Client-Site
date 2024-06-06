import { useEffect, useState } from 'react';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import MenuItem from '../../../Shared/MenuItem/MenuItem';

const PopularMenu = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetch('menu.json')
      .then(res => res.json())
      .then(data => {
        const popularItems = data.filter(item => item.category === 'popular');
        setMenus(popularItems);
      });
  }, []);
  return (
    <section className="mb-12">
      <SectionTitle
        heading="Popular Items"
        subHeading="FROM OUR MENU"
      ></SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {menus.map(menu => (
          <MenuItem menu={menu} key={menu._id}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
