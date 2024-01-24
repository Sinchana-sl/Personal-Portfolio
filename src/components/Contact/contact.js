import "./contact.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.jpg";
import github from "../../assets/github.png";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n4miwjr",
        "template_uxfyplu",
        form.current,
        "EpquHDM2C0_4K85TZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id="contact">
      <h1 className="contactPageTitle">
        GET IN <span>TOUCH!</span>
      </h1>
      <p className="contactDesc">
        Got a question or proposal, or just want to say hello? Go ahead.
      </p>
      <form
        action=""
        className="contactForm"
        ref={form}
        onSubmit={sendEmail}
        autoComplete="on"
      >
        <div className="formElementsDiv">
          <label htmlFor="name">
            Name <span>*</span>
          </label>

          <div className="labelInDiv">
            <input
              id="name"
              type="text"
              className="name"
              placeholder="Your Name"
              name="from_name"
              required
              autoComplete="on"
            />
          </div>
        </div>
        <div className="formElementsDiv">
          <label htmlFor="email">
            E-mail <span>*</span>
          </label>

          <div className="labelInDiv">
            <input
              id="email"
              type="email"
              className="email"
              placeholder="Your-Email@example.com"
              name="from_mail"
              required
              autoComplete="on"
            />
          </div>
        </div>
        <div className="formElementsDiv">
          <label htmlFor="msg">
            Message <span>*</span>
          </label>
          <div className="labelInDiv">
            <textarea
              id="msg"
              name="message"
              cols="30"
              rows="5"
              className="msg"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
        </div>
        <div className="buttonDiv">
          <button type="submit" value="Send" className="submitBtn">
            Send Message
          </button>
          <div className="links">
            <a href="https://www.linkedin.com/in/sinchana-s-l-1a6b78222/">
              <img className="linksImg" src={linkedin} alt="Linkedin icon" />
            </a>
            {/* <a href="">
              <img className="linksImg" src={instragram} alt="Instagram icon" />
            </a> */}
            <a href="https://github.com/Sinchana-sl">
              <img className="linksImg" src={github} alt="Github icon" />
            </a>
            <a href="https://github.com/Sinchana-sl">
              <img className="linksImg" src={twitter} alt="Twitter icon" />
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Contact;
