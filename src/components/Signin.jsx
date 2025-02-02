import axios from "axios";
import validator from "validator"
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const backendUrl = import.meta.env.VITE_API_URL;

  const handleEnter = (e, next) => {
    if (e.key === "Enter") {
      e.preventDefault();
      next.current.focus();
    }
  };

  const handleOnchange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleLogin = async() => {
    if (!validator.isEmail(form.email)) {
      return alert("Enter credentials correctly");
    }
    if (!validator.isLength(form.password, { minLength: 6 })) {
      return alert("Password must contains 6 letters");
    }

    const res = await axios.post(`${backendUrl}/user/login`,form)

    if(res.status === 200) {   
      if(res.data.token) {
        localStorage.setItem("token", res.data.token)
        return navigate("/dashboard")
      }
      return alert(res.data.msg)
    }
    return alert("Some error occured")
  };

  useEffect(() => {
    localStorage.removeItem("token");
  }, []);
  return (
    <div className="h-auto min-h-screen flex justify-center items-center">
      <div className="h-auto rounded-xl p-4 bg-white w-[20rem] flex flex-col">
        <div className="flex flex-col text-2xl items-center mb-4">
          <h2 className="font-bold ">Sign In</h2>
          <span className="text-sm text-gray-600 break-words">
            Enter your credentials to access your account
          </span>
        </div>

        <div className="my-2">
          <h4 className="font-bold text-sm">Email</h4>
          <input
            type="text"
            className="w-full outline-1 outline-gray-300 mt-1 rounded-sm px-4 h-9 focus:outline-black"
            placeholder="adam@example.com"
            ref={emailRef}
            onKeyDown={(e) => {
              handleEnter(e, passwordRef);
            }}
            name="email"
            onChange={handleOnchange}
            value={form.email}
          />
        </div>

        <div className="my-2">
          <h4 className="font-bold text-sm">Password</h4>
          <input
            type="password"
            className="w-full outline-1 outline-gray-300 mt-1 rounded-sm px-4 h-9 focus:outline-black"
            placeholder="Password"
            ref={passwordRef}
            onKeyDown={(e) => {
              handleEnter(e, null);
            }}
            name="password"
            onChange={handleOnchange}
            value={form.password}
          />
        </div>

        <div className="my-3 w-full flex justify-center">
          <button className="bg-black text-white w-full py-1 rounded-sm cursor-pointer" onClick={handleLogin}>
            Sign In
          </button>
        </div>

        <div className="flex justify-center w-full gap-2 font-semibold">
          Don't have an account?
          <Link className="underline cursor-pointer" to="/signup">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;
