import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Registration from "../pages/Registration";
import { useContext } from "react";
import { Store } from "../context/Store";

function Routers() {
  const { setNav } = useContext(Store);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </>
  );
}

export default Routers;
