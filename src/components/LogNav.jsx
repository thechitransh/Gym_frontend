import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Store } from "../context/Store";

function LogNav() {
  const { setNav } = useContext(Store);
  const logout = () => {
    setNav(true);
  };
  return (
    <section className="flex justify-center border-[#35f71389] shadow-md py-2 w-full bg-gradient-to-r from-black to-gray-600">
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
            <NavLink
              to="/dashbord"
              className={({ isActive }) =>
                isActive ? "text-[#35f71389] underline" : ""
              }
            >
              <p>Dashbord</p>
            </NavLink>
            <li className=" cursor-pointer hover:text-[#c4306b]">Members</li>

            <NavLink
              to="/registration"
              className={({ isActive }) =>
                isActive ? "text-[#35f71389] underline" : ""
              }
            >
              <li className=" cursor-pointer">Add New Members</li>
            </NavLink>
          </ul>
          <div>
            <NavLink to="/">
              <button
                className="border-2 px-6 text-black py-1 rounded-lg bg-[#37f713] transition-all duration-500 hover:bg-white hover:border-2 hover:border-[#37f713] hover:text-black"
                onClick={logout}
              >
                Logout
              </button>
            </NavLink>
          </div>
        </section>
      </nav>
    </section>
  );
}

export default LogNav;
