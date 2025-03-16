import axios from 'axios';

const axiosOpen = axios.create({
  baseURL: 'https://furniture-server-ten.vercel.app',
});

const useAxiosOpen = () => {
  return axiosOpen;
};

export default useAxiosOpen;
