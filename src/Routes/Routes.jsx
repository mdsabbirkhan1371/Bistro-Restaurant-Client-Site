import { createBrowserRouter } from 'react-router-dom';
import Main from '../Components/Layout/Main/Main';
import Home from '../Components/Pages/Home/Home/Home';
import Menu from '../Components/Pages/Menu/Menu';
import Order from '../Components/Order/Order';
import Login from '../Components/Pages/Login/Login';
import SignUp from '../Components/Pages/SignUp/SignUp';
import Secret from '../Components/Shared/Secret/Secret';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Dashboard from '../Components/Pages/Dashboard/Dashboard/Dashboard';
import DashCart from '../Components/Pages/Dashboard/DashCart';
import AllUsers from '../Components/Pages/Dashboard/AllUsers/AllUsers';
import AdminRoute from './AdminRoute/AdminRoute';
import AddItems from '../Components/Pages/Dashboard/Pages/AddItems/AddItems';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/menu',
        element: <Menu></Menu>,
      },
      {
        path: '/order/:category',
        element: <Order></Order>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>,
      },
      {
        path: '/secret',
        element: (
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        ),
      },
    ],
  },

  // for dash board
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      // normal user route
      {
        path: 'cart',
        element: <DashCart></DashCart>,
      },

      // admin route
      {
        path: 'allUsers',
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: 'addItems',
        element: (
          <AdminRoute>
            <AddItems></AddItems>
          </AdminRoute>
        ),
      },
    ],
  },
]);
