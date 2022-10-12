import React, { useState } from "react";

function Portfolio() {
  // name and file path of the project
  const [projects] = useState([
    {
      name: "FooDr",
      file: "foodDr.png",
      github: "https://github.com/leunggerry/projectAwesome",
      description:
        "This is the FoodDr (Food Doctor), where the user provides a location where they want food recommendations and we provide some options",
    },
    {
      name: "Git Social",
      file: "git-social.png",
      github: "https://github.com/leunggerry/git-social",
      description:
        "This is project I worked on with several others to build this professional social app to connect with others in looking to build projects together with other developers",
    },
    {
      name: "Weather Dashboard",
      file: "weather-dashboard.png",
      github: "https://github.com/leunggerry/weather_dashboard",
      description:
        "This is a weather dashboard where you key keep track of local weather or other cities. The weather is fetch from an API called OpenWeather.",
    },
    {
      name: "Work Day Scheduler",
      file: "work-day-scheduler.png",
      github: "https://github.com/leunggerry/personal_scheduler",
      description:
        "This is a daily planner application where you can time block your work day and keep track of what task or meeting you need to complete or attend.",
    },
    {
      name: "Team Profile Generator",
      file: "team-management-system.png",
      github: "https://github.com/leunggerry/team-profile-generator",
      description:
        "This project will generate information about your based on the answers provided. You can enter a manager, engineer and an intern as well as their contact info.",
    },
    {
      name: "README Generator",
      file: "readme-generator.png",
      github: "https://github.com/leunggerry/readme_generator",
      description: "Generate a Markdown document describing your project",
    },
  ]);

  return (
    <section className="container my-3">
      <h1 className="display-6 text-light" id="portfolio">
        Portfolio
      </h1>
      <div className="row">
        {/* loop thought each project to show each as a card */}
        {projects.map((project) => (
          <div className="col-sm-6">
            <div className="card m-2">
              <img src={require(`../../assets/projects/${project.file}`)} alt={project.name} />
              <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text">{project.description}</p>
                <a href={project.github} className="card-link">
                  Github
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
