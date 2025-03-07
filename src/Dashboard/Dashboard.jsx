
import {  Outlet } from 'react-router-dom';
const Dashboard = () => {
  
  return (
    <div>
      
        <div className="flex">
          <div className="w-96 bg-red-700 h-screen">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea aperiam
            deserunt earum quam exercitationem doloribus sint fugit itaque iure
            ex quas eius inventore saepe soluta, vero quidem dignissimos dolorem
            rerum?
          </div>
          <div className=" bg-slate-950">
            <Outlet></Outlet>
          </div>
        </div>
      
    </div>
  );
};

export default Dashboard;
