import React, { useContext } from 'react';
import { AuthContext } from '../../AuthPovider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const SignUp = () => {
  const { createNewUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handealSignUp = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    console.log(email, password);
    createNewUser(email, password).then(res => {
      const userInfo = { name, email };
      axios.post('http://localhost:5000/user', userInfo).then(res => {
        console.log(res);
      }); 
      console.log(res.user);
      navigate('/dashboard');
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
            Sign up Here
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

            <button className="btn btn-neutral mt-4">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
