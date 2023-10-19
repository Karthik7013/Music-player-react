import { useState } from "react";
import { Body } from "./Components/Body";

import "./Index.css";


import { SideNav } from "./Components/SideNav";
import { BrowserRouter } from "react-router-dom";

function App() {

  let [displayNav, setDisplayNav] = useState(false);

  return (
    <div className="app">
      <BrowserRouter>
        <SideNav displayNav={displayNav} />
        <Body setDisplayNav={setDisplayNav} />
      </BrowserRouter>
    </div>
  )
}

export default App
