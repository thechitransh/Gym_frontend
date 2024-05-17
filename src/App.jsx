import React from "react";
import Nav from "./components/Nav";
import Routers from "./utils/Routers";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <>
      <Nav />
      <Routers />
    </>
  );
}

export default App;
