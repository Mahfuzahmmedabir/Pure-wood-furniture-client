import React, { useContext } from 'react';
import { AuthContext } from '../../AuthPovider/AuthProvider';
import { Navigate, useNavigate } from 'react-router-dom';

const ProtectRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  
  if (loading) {
    return (
      <>
        <p className="text-center">
          <span className="loading loading-spinner loading-md"></span>
        </p>
      </>
    );
  }

  if (user?.email == 'admin@gmail.com') {
    return children;
  }

  return <Navigate to={'/'}></Navigate>;
};

export default ProtectRoute;
