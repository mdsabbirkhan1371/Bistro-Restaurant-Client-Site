import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Routes/Provider/AuthProvider.jsx/AuthProvider';
import { FaCartPlus } from 'react-icons/fa';
import useCarts from '../../../hooks/useCarts';

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCarts();
  console.log('my cart items', cart);
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch(err => {
        console.error(err);
      });
  };
  const navLinks = (
    <>
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <Link to="/menu">OUR MENU</Link>
      </li>
      <li>
        <Link to="/order/salad">ORDER FOOD</Link>
      </li>
      <li>
        <Link to="/secret">Secret</Link>
      </li>
      <li>
        <Link to="/">
          <FaCartPlus className=" text-2xl"></FaCartPlus>
          <div className="badge badge-secondary">+{cart.length}</div>
        </Link>
      </li>

      {user ? (
        <>
          <li>
            <Link onClick={handleLogout}>LOGOUT</Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">LOGIN</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar fixed z-10 max-w-screen-xl text-white bg-opacity-30 bg-black font-semibold">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <small>
            BISTRO BOSS <br />
            RESTAURANT
          </small>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">{user && <p>{user.displayName}</p>}</div>
    </div>
  );
};

export default NavBar;
