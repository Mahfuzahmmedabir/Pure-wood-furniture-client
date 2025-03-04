import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main/Main';
import Home from '../Home/Home/Home';
import SignUp from '../SocialActivaty/SignUp/SignUp';
import Dashboard from '../Dashboard/Dashboard';

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
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: '/dashboard',
        element: (
          <h2>
            {' '}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
            nisi, necessitatibus temporibus dolores sequi quis a quia corrupti
            doloremque ratione excepturi placeat accusamus distinctio sint porro
            vero voluptatum facilis nam?
          </h2>
        ),
      },
    ],
  },

  {
    path: '/sign-up',
    element: <SignUp></SignUp>,
  },
]);
export default router;
