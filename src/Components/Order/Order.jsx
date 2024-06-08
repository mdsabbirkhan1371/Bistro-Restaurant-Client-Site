import { useState } from 'react';
import orderImage from '../../../public/assets/shop/banner2.jpg';
import Cover from '../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/useMenu';
import OrderTab from './OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const Order = () => {
  const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];

  const { category } = useParams();
  const initialIndex = categories.indexOf(category);

  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  // console.log(category);
  // const offers = menu.filter(item => item.category === 'offered');

  const drinks = menu.filter(item => item.category === 'drinks');
  const desserts = menu.filter(item => item.category === 'dessert');
  const soups = menu.filter(item => item.category === 'soup');
  const pizzas = menu.filter(item => item.category === 'pizza');
  const salads = menu.filter(item => item.category === 'salad');
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order</title>
      </Helmet>
      <Cover
        image={orderImage}
        title={'Order Food'}
        description={'Would you like to try a dish?'}
      ></Cover>

      <div className="my-12">
        <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
          <TabList className="text-center text-2xl">
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soups</Tab>
            <Tab>Desserts</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel>
            <OrderTab items={salads}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={pizzas}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={soups}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={desserts}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={drinks}></OrderTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
