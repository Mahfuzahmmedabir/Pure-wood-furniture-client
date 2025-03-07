import React, { useContext } from 'react';
import { AuthContext } from '../../AuthPovider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UseAxiosOpen from '../../hooks/useAxios';
const SignUp = () => {
  const { createNewUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handealSignUp = e => {
    const axiosOpen = UseAxiosOpen()
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    console.log(email, password);
    createNewUser(email, password)
      .then(res => {
      const userInfo = { name, email };
      axiosOpen
        .post(
          '/user',

          userInfo
        )
        .then(res => {
          console.log(res);
          navigate('/');
        });
      console.log(res.user);
    });
  };
  return (
    <div className=" lg:flex justify-around  lg:mt-44">
      <div className="w-6/12">
        animation Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Laborum dicta error ad incidunt quidem repellat voluptatem dolorem et
        est excepturi. Reiciendis saepe, cupiditate ex hic pariatur consequuntur
        quos doloribus debitis.
      </div>
      <div className="card bg-base-100   w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body ">
          <h2 className="text-3xl py-6 font-semibold text-center">
            Create New Account
          </h2>
          <form onSubmit={handealSignUp} className="fieldset">
            <label className=" font-semibold">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
            />
            <label className=" font-semibold">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
            />
            <label className="font-semibold ">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
            />
            <button className="btn btn-neutral mt-4">Sign Up</button>
          </form>
          <p className="text-center font-semibold ">
            Already have an account?
            <Link to={'/login'} className="text-green-500 px-2">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
