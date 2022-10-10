import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";

function App() {
  // create states for the tab that is being set
  const [tabs] = useState(["about", "portfolio", "contact", "resume"]);
  // set the state of the tab
  const [currentTab, setTab] = useState(tabs[0]);
  return (
    <div>
      <Nav currentTab={currentTab} setTab={setTab} />
      <main className="container">{<About />}</main>
    </div>
  );
}

export default App;
