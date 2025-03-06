import React, { useContext } from 'react';
import { AuthContext } from '../../AuthPovider/AuthProvider';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Login = () => {
  const { loginWithEmail } = useContext(AuthContext);
  const admin = import.meta.env.VITE_admin;
  console.log(admin);
  const navigate = useNavigate();
  const handealLogn = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginWithEmail(email, password).then(res => {
      if (res.user?.email === admin) {
        navigate('/dashboard');
      } else {
        navigate('/');
      }
      console.log(res.user.email);
    });
  };

  return (
    <div className=" lg:flex mt-60">
      <div className="w-6/12">animation</div>
      <div className="lg:w-6/12  lg:ml-52">
        <div className="card  max-w-sm shrink-0 ">
          <h2 className="text-center text-2xl font-semibold">Login </h2>
          <form onSubmit={handealLogn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className=" text-[16px] font-semibold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-[16px] font-semibold">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-black text-white w-full">Login</button>
            </div>
          </form>
          <p className="text-center font-semibold ">
            Don't have an account?
            <Link to={'/sign-up'} className="text-green-500 px-2">
              Creact Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
