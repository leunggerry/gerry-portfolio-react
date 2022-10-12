import React from "react";

function Resume(props) {
  const { front, backend } = props;
  return (
    <section className="container my-3">
      <div className="row">
        {/* add link to my resume */}
        <h3 className="display-6 text-white">Resume</h3>
        <a
          type="button"
          className="col-3 btn btn-primary"
          href="https://drive.google.com/file/d/1WPASZM14tDKgz1h4-RtWMkfimafyLWxd/view?usp=sharing"
          role="button"
        >
          Download Resume
        </a>
      </div>
      {/* frontend tech */}
      <div className="row mt-3">
        <div className="col-6">
          <h3 className="display-7 text-white">Front End</h3>
          <ul className="list-group">
            {front.map((frontTech) => (
              <li className="list-group-item">{frontTech}</li>
            ))}
          </ul>
        </div>

        {/* backend tech */}
        <div className="col-6">
          <h3 className="display-7 text-white">Backend</h3>
          <ul className="list-group">
            {backend.map((backend) => (
              <li className="list-group-item">{backend}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;
