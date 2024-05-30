import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaEye } from "react-icons/fa";
import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa6";

export default function Signup() {
  const [variable, setVariable] = useState(true);
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    console.log(formData);
  };

  function changeType() {
    setVariable(!variable);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/auth/signup", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div>
      <h1 className="text-center py-3 font-bold text-3xl mb-4">Sign Up</h1>
      <div>
        <form
          className="flex flex-col max-w-2xl gap-4 mx-auto relative end"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            id="username"
            placeholder="username"
            className="bg-slate-200 p-3 rounded-lg"
            onChange={handleChange}
          ></input>
          <input
            type="text"
            id="email"
            placeholder="email"
            className="bg-slate-200 p-3 rounded-lg"
            onChange={handleChange}
          ></input>
          <input
            type={`${variable ? "password" : "text"}`}
            id="password"
            placeholder="password"
            className="bg-slate-200 p-3 rounded-lg"
            onChange={handleChange}
          ></input>
          <div className="relative right-3xl top-36">
            {variable ? (
              <FaEye
                onClick={() => changeType()}
                className="absolute bottom-44 right-3"
              />
            ) : (
              <FaEyeSlash
                onClick={() => changeType()}
                className="absolute bottom-44 right-3"
              />
            )}
          </div>
          <button className="bg-gray-500 uppercase p-3 text-white rounded-lg">
            Sign Up
          </button>
          <button className="bg-red-500 uppercase p-3 text-white rounded-lg flex items-center justify-center ">
            <FcGoogle className="text-center bg-white rounded-2xl mr-2 text-lg " />
            Continue with google
          </button>
          <p>
            Have an account?
            <Link to="sign-in" className="text-blue-300 ml-2">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
