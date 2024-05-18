import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { Store } from "../context/Store";
import { Link } from "react-router-dom";
import axios from "axios";
import { Bounce, toast } from "react-toastify";
function Login() {
  const [Usename, setUsename] = useState("");
  const [Password, setPassword] = useState("");
  const [Eye, setEye] = useState(true);
  const { setNav } = useContext(Store);

  const HandleUsername = (e) => {
    setUsename(e.target.value);
  };
  const HandlePassword = (e) => {
    setPassword(e.target.value);
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    if (Usename.length == 0) {
      toast.error("Username can't be empty 😐", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
    if (Password.length == 0) {
      toast.error("Password can't be empty 😐", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } else {
      axios
        .post("http://localhost:8080/login", {
          username: Usename,
          password: Password,
        })
        .then(() => {
          toast.success("Login Sucessfull 🫡", {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
          setPassword("");
          setUsename("");
          setNav(false);
        })
        .catch((error) => {
          toast.error(error.response.data, {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        });
    }
  };
  const eyeClick = () => {
    setEye(!Eye);
  };
  return (
    <section className="flex justify-center items-center h-screen bg-black">
      <div
        className=" p-8 shadow-md shadow-[#37f713] rounded-lg bg-gradient-to-br to-black
       from-gray-500"
      >
        <div className="flex flex-col gap-4 ">
          <p className="text-center p-2 font-semibold text-lg text-white">
            Login
          </p>
          <form className="flex flex-col gap-4" onSubmit={HandleSubmit}>
            <input
              type="text"
              placeholder="Usrname"
              value={Usename}
              onChange={HandleUsername}
              className=" outline-none border-b-2  rounded-md px-2"
            />

            <div className=" relative">
              <input
                type={Eye ? "password" : "text"}
                value={Password}
                onChange={HandlePassword}
                placeholder="Password"
                className=" outline-none border-b-2 rounded-md px-2"
              />
              <div
                className=" absolute right-1 top-0 hover:cursor-pointer"
                onClick={eyeClick}
              >
                {Eye ? (
                  <FontAwesomeIcon icon={faEyeSlash} />
                ) : (
                  <FontAwesomeIcon icon={faEye} />
                )}
              </div>
            </div>
            <button className="bg-[#37f713] text-white rounded-lg py-0.5 mt-2">
              login
            </button>
            <p className="text-sm text-center text-white">
              Don't Have Account{" "}
              <Link to="/signup" className="font-bold">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
