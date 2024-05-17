import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";
import { Bounce, toast } from "react-toastify";

function SignUp() {
  const [Name, setName] = useState("");
  const [UsenameSignup, setUsenameSignup] = useState("");
  const [PasswordSignup, setPasswordSignup] = useState("");
  const [ConfirmSignup, setConfirmSignup] = useState("");
  const [GymName, setGymName] = useState("");
  const [Number, setNumber] = useState("");
  const [Eye, setEye] = useState(true);
  const eyeClick = () => {
    setEye(!Eye);
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    if (PasswordSignup === ConfirmSignup) {
      axios
        .post("http://localhost:8080/signup", {
          gymName: GymName,
          username: UsenameSignup,
          password: PasswordSignup,
          mobileNumber: Number,
          name: Name,
        })
        .then(() => {
          toast.success("SignUp Sucessfull !", {
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
          setConfirmSignup("");
          setGymName("");
          setName("");
          setNumber("");
          setPasswordSignup("");
          setUsenameSignup("");
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
    } else {
      toast.error("Password does not match !", {
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
    }
  };
  return (
    <>
      <section className="flex justify-center items-center h-screen bg-black">
        <div className=" p-8 shadow-lg shadow-[#37f713] rounded-lg bg-gradient-to-br from-black to-gray-500">
          <div className="flex flex-col gap-4">
            <p className="text-center p-2 font-semibold text-lg text-white">
              Sign up
            </p>
            <form className="flex flex-col gap-5" onSubmit={HandleSubmit}>
              <div className="flex gap-5">
                <input
                  type="text"
                  placeholder="Name"
                  className=" outline-none  rounded-md px-2"
                  value={Name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Username"
                  value={UsenameSignup}
                  onChange={(e) => setUsenameSignup(e.target.value)}
                  className=" outline-none rounded-md px-2"
                />
              </div>
              <div className="flex gap-5">
                <input
                  type="password"
                  placeholder="Password"
                  value={PasswordSignup}
                  onChange={(e) => setPasswordSignup(e.target.value)}
                  className=" outline-none  rounded-md px-2"
                />
                <div className=" relative">
                  <input
                    type={Eye ? "password" : "text"}
                    placeholder="Confirm Password"
                    className=" outline-none  rounded-md px-2"
                    value={ConfirmSignup}
                    onChange={(e) => setConfirmSignup(e.target.value)}
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
              </div>
              <div className="flex gap-5">
                <input
                  type="text"
                  placeholder="Gym Name"
                  value={GymName}
                  onChange={(e) => setGymName(e.target.value)}
                  className=" outline-none rounded-md px-2"
                />
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  value={Number}
                  onChange={(e) => setNumber(e.target.value)}
                  className=" outline-none  rounded-md px-2"
                />
              </div>
              <button
                className="bg-[#37f713] text-white rounded-lg py-0.5 mt-4 w-36 self-center"
                onClick={eyeClick}
              >
                Sign up
              </button>
              <p className="text-sm text-center text-white">
                Already Have Account{" "}
                <Link to="/login" className="font-bold">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp;
