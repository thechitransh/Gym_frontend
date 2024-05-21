import React, { useContext } from "react";
import Routers from "./utils/Routers";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Store } from "./context/Store";
import LogNav from "./components/LogNav";
import NavMain from "./components/NavMain";

function App() {
  const { Nav } = useContext(Store);
  return (
    <>
      {Nav ? <NavMain /> : <LogNav />}
      <Routers />
    </>
  );
}

export default App;
