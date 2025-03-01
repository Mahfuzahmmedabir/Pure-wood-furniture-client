import React from 'react';

const SignUp = () => {
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
          <form className="fieldset">
            <label className="fieldset-label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="fieldset-label">Password</label>
            <input type="password" className="input" placeholder="Password" />

            <button className="btn btn-neutral mt-4">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
