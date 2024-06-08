import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImage from '../../../../public/assets/menu/banner3.jpg';
import dessertImage from '../../../../public/assets/menu/dessert-bg.jpeg';
import pizzaImage from '../../../../public/assets/menu/pizza-bg.jpg';
import soupImage from '../../../../public/assets/menu/soup-bg.jpg';
import saladImage from '../../../../public/assets/menu/salad-bg.jpg';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import MenuCategory from '../../Shared/MenuCategory/MenuCategory';
const Menu = () => {
  const [menu] = useMenu();
  const todaysOffered = menu.filter(item => item.category === 'offered');
  const desserts = menu.filter(item => item.category === 'dessert');
  const soup = menu.filter(item => item.category === 'soup');
  const pizza = menu.filter(item => item.category === 'pizza');
  const salad = menu.filter(item => item.category === 'salad');

  return (
    <div>
      <div>
        <Helmet>
          <title>Bistro Boss | Our Menu</title>
        </Helmet>

        <Cover
          image={menuImage}
          title={'our menu'}
          description={'Would you like to try a dish?'}
        ></Cover>

        {/*----------------- today offer section----------- */}
        <SectionTitle
          heading={"Today's Offer"}
          subHeading={"Dont't miss"}
        ></SectionTitle>
        <MenuCategory item={todaysOffered}></MenuCategory>

        {/* ----------dessert section---------------*/}

        <MenuCategory
          item={desserts}
          coverImage={dessertImage}
          title={'dessert'}
          description={
            'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
          }
        ></MenuCategory>

        {/* ---------------pizza section---------  */}
        <MenuCategory
          item={pizza}
          coverImage={pizzaImage}
          title={'pizza'}
          description={
            'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
          }
        ></MenuCategory>

        {/* -------------salad section--------- */}
        <MenuCategory
          item={salad}
          coverImage={saladImage}
          title={'salad'}
          description={
            'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
          }
        ></MenuCategory>

        {/* ------------soup section ----------- */}
        <MenuCategory
          item={soup}
          coverImage={soupImage}
          title={'soup'}
          description={
            'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
          }
        ></MenuCategory>
      </div>
    </div>
  );
};

export default Menu;
