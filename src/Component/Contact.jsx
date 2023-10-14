import React from "react";
import background from "../assets/bg.png";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    AOS.init({
      // Global settings go here
      // For example:
      duration: 800, // Animation duration in milliseconds
      offset: 100, // Offset (in pixels) from the top of the page when triggering animations
    });
  }, []);
  return (
    <section id="contact">
      <div>
        <div
          data-aos="fade-right"
          className="text-white font-semibold  text-center p-9 lg:text-start lg:text-7xl lg:ms-6 "
        >
          <h2 className="text-4xl lg:text-7xl text">
            CONTACT <span className="contact-me">ME</span>
          </h2>
          <progress className="progress w-56 bg-white"></progress>
          <div className="text-xl">
            <p>It would be amazing to receive oppotunity to work with you!</p>
          </div>
        </div>

        {/* contact-button */}
        <div
          data-aos="fade-down"
          className="flex justify-center gap-5 mb-5 w-full "
        >
          <div>
            <a
              href="mailto:atithiya.inthorn@gmail.com"
              className="btn btn-outline text-xs rounded-full bg-gradient-to-r from-sky-500 to-indigo-500  lg:text-base"
            >
              Atithiya.inthorn@gmail.com
            </a>
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
      </div>
    </section>
  );
}

export default Contact;
