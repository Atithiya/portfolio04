import React from "react";
import background from "../assets/bg.png";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

function Contact() {
  return (
    <section id="contact">
      <div>
        <div className="text-white font-semibold  text-center p-9 lg:text-start lg:text-7xl lg:ms-6 ">
          <h2 className="text-4xl lg:text-7xl text">
            CONTACT <span className="contact-me">ME</span>
          </h2>
          <progress className="progress w-56 bg-white"></progress>
        </div>

        {/* contact-button */}
        <div className="flex justify-center gap-5 mb-5 w-full ">
          <div>
            <button className="btn btn-outline text-xs rounded-full bg-gradient-to-r from-sky-500 to-indigo-500  lg:text-base">
              Atithiya.inthorn@gmail.com
            </button>
          </div>

          <div>
            <a
              href="https://github.com/Atithiya"
              target="_blank"
              className="btn btn-outline btn-circle   bg-gradient-to-r from-sky-500 to-indigo-500 lg:text-base"
            >
              <BsGithub />
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/atithiya"
              target="_blank"
              className="btn btn-outline btn-circle  bg-gradient-to-r from-sky-500 to-indigo-500 lg:text-base"
            >
              <BsLinkedin />
            </a>
          </div>
        </div>
        <footer className="footer  border-t-2 text-white p-2 ps-5">
          <p>© 2023 All Rights Reserved.</p>
        </footer>
      </div>
    </section>
  );
}

export default Contact;
