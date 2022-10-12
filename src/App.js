import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import ContactForm from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  // create states for the tab that is being set
  const [tabs] = useState(["about", "portfolio", "contact", "resume"]);
  //set the background color
  const [bgColor] = useState("#6f6b5e");
  document.body.style.backgroundColor = bgColor;
  // set the state of the tab
  const [currentTab, setTab] = useState(tabs[0]);

  //set the tech stack
  const frontEndStack = ["HTML", "CSS", "MaterializeCSS", "Bootstrap", "JQuery", "React"];
  const backEndStack = ["NodeJS", "MongoDB", "Mongoose", "Express", "MySQL", "NoSQL"];
  return (
    <div>
      <Nav currentTab={currentTab} setTab={setTab} />
      <main className="container">
        {/* Default to the about me section, and dont show the others */}
        {currentTab === "about" && <About />}
        {/* show porfoltio if clicked */}
        {currentTab === "portfolio" && <Portfolio />}

        {/* show the contact form */}
        {currentTab === "contact" && <ContactForm />}

        {/* show the resume section */}
        {currentTab === "resume" && <Resume front={frontEndStack} backend={backEndStack} />}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
