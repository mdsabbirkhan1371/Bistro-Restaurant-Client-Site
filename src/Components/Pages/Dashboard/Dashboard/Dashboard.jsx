import {
  FaBook,
  FaChessBishop,
  FaEnvelope,
  FaHome,
  FaList,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from 'react-icons/fa';
import { MdDateRange, MdOutlineReviews } from 'react-icons/md';
import { RiReservedFill, RiSecurePaymentFill } from 'react-icons/ri';
import { NavLink, Outlet } from 'react-router-dom';
import useCarts from '../../../../hooks/useCarts';
import { TiThMenu } from 'react-icons/ti';
import useAdmin from '../../../../hooks/useAdmin';

const Dashboard = () => {
  const [cart] = useCarts();
  const [isAdmin] = useAdmin();

  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu p-5 space-y-3">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome></FaHome>
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <FaUtensils></FaUtensils>
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaList></FaList>
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageBookings">
                  <FaBook></FaBook>
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUsers">
                  <FaUsers></FaUsers>
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
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
            </>
          )}

          {/* shared links  */}
          <div className="divider divider-secondary"></div>

          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/order/salad">
              <TiThMenu />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <FaChessBishop />
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <FaEnvelope />
              Contact
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
