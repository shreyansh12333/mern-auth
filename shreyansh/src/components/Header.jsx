import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-slate-200 mb-5">
      <div className="flex items-start justify-between max-w-6xl mx-auto p-3">
        <h1 className="font-bold ">Auth App</h1>
        <ul className="flex gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/sign-in">Sign in</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
