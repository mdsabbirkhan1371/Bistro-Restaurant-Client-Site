import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useCarts = () => {
  // tan stack query
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ['cart'],
    queryFn: async () => {
      const result = await axiosSecure(`/carts?email=${user.email}`);
      return result.data;
    },
  });
  return [cart, refetch];
};

export default useCarts;
