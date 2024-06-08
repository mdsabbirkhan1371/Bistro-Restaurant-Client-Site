import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../../Shared/NavBar/NavBar';
import Footer from '../../Shared/Footer/Footer';

const Main = () => {
  const location = useLocation();
  const noHeadorFoot =
    location.pathname.includes('login') || location.pathname.includes('signUp');
  return (
    <div>
      {noHeadorFoot || <NavBar></NavBar>}
      <Outlet></Outlet>
      {noHeadorFoot || <Footer></Footer>}
    </div>
  );
};

export default Main;
