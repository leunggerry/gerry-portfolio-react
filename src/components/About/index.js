import React from "react";
import profileImage from "../../assets/profile/profile.jpg";

//Component Definition
function About() {
  return (
    <section className="my-3">
      <h1 className="display-6 text-light" id="about">
        About Me
      </h1>
      <img
        src={profileImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="Profile of Gerry Leung"
      />
      <div className="my-2">
        <p className="text-light">
          I am currently a software developer who is working in the telecommunications space. I was
          working in the telecommunications industry every since I graduated from university. During
          my time here, I eventually thought that I needed to do something different. I decided to
          join a bootcamp to level up my skills as a programmer. I started dabbling in the full stack
          space, learning about web development doing little bit of JavaScript and CSS programming
          and I found my new love in software development. I hope that my projects can show my new
          found love and my process in becoming a better developer everyday.
        </p>
      </div>
    </section>
  );
}

export default About;
