import axios from 'axios';
import { useEffect } from 'react';
import React, { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const Dashboard = () => {
  const [admin, setAdmin] = useState([]);
  const [isAdmin, setisAdmin] = useState(true)
  useEffect(() => {
    axios.get('http://localhost:5000/user').then(res => {
      console.log(res.data);
      setAdmin(res.data);
    });
  }, []);
  console.log(admin);
  admin.map(admins => {
    if (admins.admin) {
        setisAdmin(isAdmin);
    }
  })


  return (
    <div>
      {isAdmin ? (
        <Navigate to={'/'}></Navigate>
      ) : (
        <div className="flex">
          <div className="w-96  bg-red-700 h-screen">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea aperiam
            deserunt earum quam exercitationem doloribus sint fugit itaque iure
            ex quas eius inventore saepe soluta, vero quidem dignissimos dolorem
            rerum?
          </div>
          <div className=" bg-slate-950">
            <Outlet></Outlet>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
