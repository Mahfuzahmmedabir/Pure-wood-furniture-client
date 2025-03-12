import { useQuery } from '@tanstack/react-query';
import useAxiosOpen from './useAxios';
const useItems = () => {
  const axiosOpen = useAxiosOpen()
  const { data: furniture = [], refetch } = useQuery({
    queryKey: ['furniture'],
    queryFn: async () => {
      const res = await axiosOpen.get('/product');
      return res.data
    }
  });
  return [furniture, refetch];
};

export default useItems;


