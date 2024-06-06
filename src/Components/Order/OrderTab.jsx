import FoodCart from '../Shared/FoodCart/FoodCart';

const OrderTab = ({ items }) => {
  return (
    <div className="grid md:grid-cols-3 gap-5">
      {items.map(item => (
        <FoodCart item={item} key={item._id}></FoodCart>
      ))}
    </div>
  );
};

export default OrderTab;
