import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Registration from "../pages/Registration";
import Dashbord from "../pages/Dashbord";

function Routers() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/dashbord" element={<Dashbord />} />
      </Routes>
    </>
  );
}

export default Routers;
