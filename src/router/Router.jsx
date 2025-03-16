import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main/Main';
import Home from '../Home/Home/Home';
import SignUp from '../SocialActivaty/SignUp/SignUp';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../SocialActivaty/Login/Login';
import ProtectRoute from './ProtectRoute/ProtectRoute';
import AddItems from '../Dashboard/AdminDashboard/AddItems/AddItems';
import AllItems from '../Dashboard/AdminDashboard/AllItems/AllItems';
import FurnitureDetails from '../Page/FurnitureDetails/FurnitureDetails';
import UpdeatProduct from '../Dashboard/AdminDashboard/UpdeatProduct/UpdeatProduct';
import ErrowPage from '../Components/ErrorPage/ErrowPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrowPage></ErrowPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/details/:id',
        element: <FurnitureDetails></FurnitureDetails>,
        loader: ({ params }) =>
          fetch(`https://furniture-server-ten.vercel.app/product/${params.id}`),
      },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <ProtectRoute>
        <Dashboard></Dashboard>
      </ProtectRoute>
    ),

    children: [
      {
        path: '/dashboard',
        element: (
          <h2 className="text-5xl text-center mt-10">Welcome to Dashboard</h2>
        ),
      },
      {
        path: 'add-items',
        element: <AddItems></AddItems>,
      },
      {
        path: 'all-items',
        element: <AllItems></AllItems>,
      },
    ],
  },

  {
    path: '/sign-up',
    element: <SignUp></SignUp>,
  },
  {
    path: '/login',
    element: <Login></Login>,
  },
  {
    path: 'updeat-product/:id',
    element: <UpdeatProduct></UpdeatProduct>,
    loader: ({ params }) =>
      fetch(`https://furniture-server-ten.vercel.app/product/${params.id}`),
  },
]);
export default router;
