import { useContext } from 'react';
import { AuthContext } from '../Routes/Provider/AuthProvider.jsx/AuthProvider';

const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default useAuth;
