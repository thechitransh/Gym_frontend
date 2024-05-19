import React, { useState } from "react";
import { Store } from "./Store";

function Provider({ children }) {
  const [Nav, setNav] = useState(true);
  return <Store.Provider value={{ Nav, setNav }}>{children}</Store.Provider>;
}

export default Provider;
