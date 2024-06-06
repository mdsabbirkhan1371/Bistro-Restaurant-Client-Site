import { createBrowserRouter } from 'react-router-dom';
import Main from '../Components/Layout/Main/Main';
import Home from '../Components/Pages/Home/Home/Home';
import Menu from '../Components/Pages/Menu/Menu';

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
    ],
  },
]);
