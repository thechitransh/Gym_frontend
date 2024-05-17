import React from "react";
import { NavLink } from "react-router-dom";

function LogNav() {
  return (
    <section className="flex justify-center shadow-md shadow-[#35f71389] py-2 w-full bg-gradient-to-r from-black to-gray-600">
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
            <NavLink to="/" className=" cursor-pointer hover:text-[#37f713]">
              <p
                className={({ isActive }) =>
                  isActive ? "text-[#37f713]" : " "
                }
              >
                Dashbord
              </p>
            </NavLink>
            <li className=" cursor-pointer hover:text-[#c4306b]">Members</li>
            <li className=" cursor-pointer hover:text-[#c4306b]">
              Add New Members
            </li>
          </ul>
          <div>
            <NavLink to="login">
              <button className="border-2 px-6 text-black py-1 rounded-lg bg-[#37f713] transition-all duration-500 hover:bg-white hover:border-2 hover:border-[#37f713] hover:text-black">
                <p to="login">Logout</p>
              </button>
            </NavLink>
          </div>
        </section>
      </nav>
    </section>
  );
}

export default LogNav;