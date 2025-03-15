import { FaHome } from 'react-icons/fa';
import { IoAdd } from 'react-icons/io5';
import { RiAlignItemRightFill } from 'react-icons/ri';
import { NavLink, Outlet } from 'react-router-dom';
const Dashboard = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-72 bg-base-300 sticky top-0 z-50 h-screen">
          <h2 className="text-center   font-semibold text-2xl border-b-2 pb-3">
            Dashboard
          </h2>
          <div className=" fixed justify-center mx-12 leading-8 mt-5">
            <NavLink
              className="flex font-semibold text-[17px] items-center justify-center gap-1"
              to={'/'}
            >
              <FaHome />
              Home
            </NavLink>
            <NavLink
              className="flex items-center font-semibold text-[17px]  justify-center gap-1"
              to={'add-items'}
            >
              <IoAdd />
              Add Items
            </NavLink>
            <NavLink
              className="flex font-semibold text-[17px]  items-center justify-center gap-1"
              to={'all-items'}
            >
              <RiAlignItemRightFill />
              All Items
            </NavLink>
          </div>
        </div>
        <div className="w-full">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
