import { useEffect, useState } from 'react';
// import useAxiosPublic from './useAxiosPublic';
// import { useQuery } from '@tanstack/react-query';

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/menu')
      .then(res => res.json())
      .then(data => {
        setMenu(data);
        setLoading(false);
      });
  }, []);

  // using tan stack
  // const axiosPublic = useAxiosPublic();
  // const {
  //   data: menu = [],
  //   isPending: loading,
  //   refetch,
  // } = useQuery({
  //   queryKey: ['menu'],
  //   queryFn: async () => {
  //     const result = await axiosPublic.get('/menu');
  //     return result.data;
  //   },
  // });
  return [menu, loading];
};

export default useMenu;
