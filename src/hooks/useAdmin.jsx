import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useAdmin = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    enabled: !loading,
    queryKey: [user?.email, 'isAdmin'],
    queryFn: async () => {
      const result = await axiosSecure.get(`/users/admin/${user.email}`);
      console.log(result.data);
      return result.data?.admin;
    },
  });
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
