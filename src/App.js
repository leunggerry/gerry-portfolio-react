import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

function App() {
  // create states for the tab that is being set
  const [tabs] = useState(["about", "portfolio", "contact", "resume"]);
  // set the state of the tab
  const [currentTab, setTab] = useState(tabs[0]);
  return (
    <div>
      <Nav currentTab={currentTab} setTab={setTab} />
      <main className="container">
        {/* Default to the about me section, and dont show the others */}
        {currentTab === "about" && <About />}
        {/* show porfoltio if clicked */}
        {currentTab === "portfolio" && <Portfolio />}
      </main>
    </div>
  );
}

export default App;
