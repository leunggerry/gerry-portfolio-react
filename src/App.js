import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";

function App() {
  const [tabs] = useState(["about", "portfolio", "contact", "resume"]);
  // create states for the tab that is being set

  const [currentTab, setTab] = useState(tabs[0]);
  return (
    <div>
      <Nav currentTab={currentTab} setTab={setTab} />
      <main>
        <About />
      </main>
    </div>
  );
}

export default App;
