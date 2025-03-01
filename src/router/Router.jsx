import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../Home/Home/Home";
import SignUp from "../SocialActivaty/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
    ]
    
    
  },

  {
    path: '/sign-up',
    element: <SignUp></SignUp>
  }
])
export default router;