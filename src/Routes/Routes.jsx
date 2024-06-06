import { createBrowserRouter } from 'react-router-dom';
import Main from '../Components/Layout/Main/Main';
import Home from '../Components/Pages/Home/Home/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
    ],
  },
]);
