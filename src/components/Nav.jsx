import { text } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import { Link, NavLink } from "react-router-dom";

function Nav() {
  return (
    <section className="flex justify-center shadow-md shadow-[#35f71389] py-2 fixed w-full bg-gradient-to-r from-black to-gray-600">
      <nav className="w-[90%] ">
        <section className="flex justify-between py-4 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-14 cursor-pointer"
            />
          </div>
          <ul className="flex gap-9 font-semibold text-white">
            <li className=" cursor-pointer hover:text-[#37f713]">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-[#37f713]" : " "
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className=" cursor-pointer hover:text-[#c4306b]">Fitness</li>
            <li className=" cursor-pointer hover:text-[#c4306b]">
              Gyms Near Me
            </li>
            <li className=" cursor-pointer hover:text-[#c4306b]">Plans</li>
            <li className=" cursor-pointer hover:text-[#c4306b]">About</li>
          </ul>
          <div>
            <button className="border-2 px-6 text-black py-1 rounded-lg bg-[#37f713] transition-all duration-500 hover:bg-white hover:border-2 hover:border-[#37f713] hover:text-black">
              <Link to="login">Login</Link>
            </button>
          </div>
        </section>
      </nav>
    </section>
  );
}

export default Nav;
