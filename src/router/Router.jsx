import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main/Main';
import Home from '../Home/Home/Home';
import SignUp from '../SocialActivaty/SignUp/SignUp';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../SocialActivaty/Login/Login';
import ProtectRoute from './ProtectRoute/ProtectRoute';
import AddItems from '../Dashboard/AdminDashboard/AddItems/AddItems';

const router = createBrowserRouter([
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
          <h2>
          </h2>
        ),
      },
      {
        path: 'add-items',
        element: <AddItems></AddItems>
      }
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
]);
export default router;
