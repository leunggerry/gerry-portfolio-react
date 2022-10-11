import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  // Hooks that manage the form data
  // intialize the state of empty strings in the form
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });

  // desctruct the form state
  const { name, email, message } = formState;

  //message handlers
  const [errorMessage, setErrorMessage] = useState("");

  //function declarations
  /**
   * Sync the sate of the input
   * @param {*} e
   */
  function handleChange(e) {
    //validate email
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      if (!isValid) {
        setErrorMessage("Your email is invalid");
      } else {
        setErrorMessage("");
      }
    }
    //validate input for name and message
    else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }

    // spread operator ...formstate, so we can retain other key-value pairs in object
    // without it formState object would be overwritten
    // name property of target -refers  to the name attribute of the forma element
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  /**
   * Handle the submission of the form
   * @param {*} e
   */
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }
  return (
    <section className="container my-3">
      <h1 className="display-6 text-light" id="contact">
        Contact
      </h1>
      <div className="row">
        <form id="contact-form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label text-white">
              Name:
            </label>
            <input
              type="text"
              defaultValue={name}
              className="form-control"
              name="name"
              onBlur={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" defaultValue={email} className="form-label text-white">
              Email:
            </label>
            <input type="email" className="form-control" name="email" onBlur={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="message" defaultValue={message} className="form-label text-white">
              Message:
            </label>
            <textarea className="form-control" name="message" rows={5} onBlur={handleChange} />
          </div>
          {/* if statement (if (errorMessage)) */}
          {errorMessage && (
            <div>
              <p className="text-warning">{errorMessage}</p>
            </div>
          )}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
