import { FaHome, FaShoppingCart } from 'react-icons/fa';
import { MdDateRange, MdFoodBank, MdOutlineReviews } from 'react-icons/md';
import { RiReservedFill, RiSecurePaymentFill } from 'react-icons/ri';
import { NavLink, Outlet } from 'react-router-dom';
import useCarts from '../../../../hooks/useCarts';

const Dashboard = () => {
  const [cart] = useCarts();
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu p-5 space-y-3">
          <li>
            <NavLink to="/dashboard/userHome">
              <FaHome></FaHome>
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <RiReservedFill />
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/paymentHistory">
              <RiSecurePaymentFill />
              Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaShoppingCart></FaShoppingCart>
              My Cart ({cart.length})
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addReviews">
              <MdOutlineReviews />
              Add Reviews
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/myBooking">
              <MdDateRange />
              My Booking
            </NavLink>
          </li>
          <div className="divider divider-secondary"></div>

          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <MdFoodBank />
              Order More
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-12">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
