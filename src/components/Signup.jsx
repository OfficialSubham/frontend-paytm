import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="h-auto min-h-screen flex justify-center items-center">
      <div className="h-auto rounded-xl p-4 bg-white w-[20rem] flex flex-col">
        <div className="flex flex-col text-2xl items-center mb-4">
          <h2 className="font-bold ">Sign up</h2>
          <span className="text-sm text-gray-600 break-words">
            Enter your information to create an account
          </span>
        </div>

        <div className="my-2">
          <h4 className="font-bold text-sm">Name</h4>
          <input type="text" className="w-full outline-1 outline-gray-300 mt-1 rounded-sm px-4 h-9" placeholder="Adam"/>
        </div>

        <div className="my-2">
          <h4 className="font-bold text-sm">Email</h4>
          <input type="text" className="w-full outline-1 outline-gray-300 mt-1 rounded-sm px-4 h-9" placeholder="adam@example.com"/>
        </div>

        <div className="my-2">
          <h4 className="font-bold text-sm">Password</h4>
          <input type="password" className="w-full outline-1 outline-gray-300 mt-1 rounded-sm px-4 h-9" placeholder="Password"/>
        </div>

        <div className="my-3 w-full flex justify-center">
          <button className="bg-black text-white w-full py-1 rounded-sm cursor-pointer">Sign Up</button>
        </div>
        
        <div className="flex justify-center w-full gap-2 font-semibold">
          Already have an account? <Link className="underline cursor-pointer" to="/signin">Login</Link>
        </div>

      </div>
    </div>
  );
};

export default Signup;
