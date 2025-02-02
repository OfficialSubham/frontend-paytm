import React, { useRef, useState } from "react";
import validator from "validator";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate()
  const backendUrl = import.meta.env.VITE_API_URL

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

  const handleSignup = async () => {
    if (!validator.isEmail(form.email)) {
      return alert("Enter credentials correctly");
    }
    if (!validator.isLength(form.password, { minLength: 6 })) {
      return alert("Password must contains 6 letters");
    }
    if (!validator.isLength(form.name, { min: 3 })) {
      return alert("Name cannot be less then 3 letters");
    }

    const res = await axios.post(`${backendUrl}/user/sign-up`, {
      form
    })

    if(res.status === 200) {
      localStorage.setItem("token", res.data.token)
      navigate("/dashboard")
    }

    setForm({
      name: "",
      email: "",
      password: "",
    });
  };

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

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
          <input
            type="text"
            className="w-full outline-1 outline-gray-300 mt-1 rounded-sm px-4 h-9 focus:outline-black"
            ref={nameRef}
            placeholder="Adam"
            onKeyDown={(e) => {
              handleEnter(e, emailRef);
            }}
            name="name"
            value={form.name}
            onChange={handleOnchange}
          />
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
            value={form.email}
            onChange={handleOnchange}
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
            value={form.password}
            onChange={handleOnchange}
          />
        </div>

        <div className="my-3 w-full flex justify-center">
          <button
            className="bg-black text-white w-full py-1 rounded-sm cursor-pointer"
            onClick={handleSignup}
          >
            Sign Up
          </button>
        </div>

        <div className="flex justify-center w-full gap-2 font-semibold">
          Already have an account?
          <Link className="underline cursor-pointer" to="/signin">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
