import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthPovider/AuthProvider';
import Dashboard from '../../Dashboard/Dashboard';

const Navbar = () => {
  const { user, SignOut } = useContext(AuthContext);
  console.log(user);
  const links = (
    <div className="font-bold gap-5 flex">
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/to'}>All Furniture</NavLink>
      <NavLink to={'/shop'}>Shop</NavLink>
    </div>
  );
  return (
    <div className="sticky top-0 z-50 ">
      <div className="navbar bg-base-100  ">
        <div className="navbar-start">
          <div className="dropdown z-50">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn poppins-black-italic text-2xl btn-ghost ">
            Pure <span className="text-orange-500 font-bold">Wood</span>{' '}
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6 z-50">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <button
                className="btn"
                onClick={() =>
                  document.getElementById('my_modal_3').showModal()
                }
              >
                Log Out
              </button>
              <dialog id="my_modal_3" className="modal flex justify-end">
                <div className="modal-box lg:-mt-[460px] mr-3 w-96 lg:mr-10">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>
                  <h3 className="font-bold text-lg text-center">Hello!</h3>
                  <p className="py-4 text-center">{user?.email}</p>
                  {user.email === import.meta.env.VITE_admin ? (
                    <h2 className="text-center mb-3">
                      <Link to={'/dashboard'}>Dashboard</Link>
                    </h2>
                  ) : (
                    ''
                  )}
                  <button
                    onClick={SignOut}
                    className="mx-auto text-center border px-3 py-1 hover:bg-red-600 hover:text-white rounded-sm flex"
                  >
                    Log Out
                  </button>
                </div>
              </dialog>
            </>
          ) : (
            <div>
              <Link to={'/login'} className="btn">
                Log in
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
