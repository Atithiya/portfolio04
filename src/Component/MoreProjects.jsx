import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import MoreProjectNavbar from "./MoreProjectNavbar";

// img
import keepFitImg from "../assets/pro2-keepfit.jpg";
import rockImg from "../assets/pro8-rock.png";
import tinDogImg from "../assets/pro9-TinDog-img.png";

function MoreProjects() {
  useEffect(() => {
    AOS.init({
      // Global settings go here
      // For example:
      duration: 800, // Animation duration in milliseconds
      offset: 100, // Offset (in pixels) from the top of the page when triggering animations
    });
  }, []);
  const [project, setProject] = useState([
    {
      image: rockImg,
      cardTitle: "Rock Paper Scissors",
      cardDetail:
        "Created a Rock, Paper, Scissors game with HTML, CSS, and JavaScript, showcasing my front-end development skills, offering users a fun and engaging experience",
      github: "https://github.com/Atithiya/RockPaperScissors",
      demo: "https://atithiya-rock-paper-scissors.vercel.app/",
    },
    {
      image: tinDogImg,
      cardTitle: "TinDog",
      cardDetail:
        "Constructed Tindog, a straightforward web application developed with HTML, CSS, and Bootstrap, allowing users to browse and connect with other dog owners in their area",
      github: "https://github.com/Atithiya/TinDog",
      demo: "https://atithiya-tindog.vercel.app/",
    },
  ]);

  return (
    <>
      <MoreProjectNavbar />
      <section id="projects" className="w-full">
        <div className=" p-5 pt-14">
          <div
            data-aos="fade-right"
            className="text-white font-semibold  text-center lg:text-start lg:text-7xl lg:ms-6 p-9"
          >
            <h2 className="text-4xl lg:text-5xl ">PROJECTS</h2>
            {/* <progress className="progress w-56 bg-white"></progress> */}
          </div>

          {/* Card */}
          <div
            data-aos="fade-down"
            className="w-full  sm:flex sm:justify-center  lg:grid lg:grid-cols-3 lg:gap-10 text-white gap-10  lg:ps-8 lg:pe-8 "
          >
            {/* .map ตรงนี้ โดยครอบทั้ง div  */}
            {project.map((item, index) => (
              <div
                key={index}
                className="card w-full  mt-5 lg:mt-0 bg-zinc-900 shadow-md shadow-purple-600  hover:scale-105 duration-200"
              >
                <figure>
                  <img
                    src={item.image}
                    alt="car!"
                    className="h-full w-full lg:h-48"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item.cardTitle}</h2>
                  <p className="text-sm">{item.cardDetail}</p>

                  <div className="card-actions justify-center mt-5 ">
                    <a
                      href={item.github}
                      target="_blank"
                      className="btn lg:text-base btn-outline text-xs rounded-full w-full lg:w-32  bg-gradient-to-r from-violet-500 to-fuchsia-500"
                    >
                      Github <AiFillGithub />
                    </a>
                    <a
                      href={item.demo}
                      target="_blank"
                      className="btn lg:text-base btn-outline text-xs rounded-full w-full lg:w-32  bg-gradient-to-r from-violet-500 to-fuchsia-500"
                    >
                      Link <FiExternalLink />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default MoreProjects;
