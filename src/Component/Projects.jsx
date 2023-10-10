import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { useState } from "react";

function Projects() {
  const [project, setProject] = useState([
    // ใส่รายละเอียดโปรเจคตรงนี้แล้วมันจะไป .map ใน card ให้เรา
    {
      image:
        "https://i.pinimg.com/564x/0b/67/96/0b679656ca7ee45626d54e01c3c476b5.jpg",
      cardTitle: "Colmar Academy",
      cardDetail: "How to park your car at your garage?",
    },
    {
      image:
        "https://i.pinimg.com/736x/b3/1c/dd/b31cddcb8266fc067589b0301f7aa262.jpg",
      cardTitle: "React Accessment",
      cardDetail: "How to park your car at your garage?",
    },
    {
      image:
        "https://i.pinimg.com/736x/10/7e/6a/107e6acc7373b999b44b887324b780ae.jpg",
      cardTitle: "Stopwatch",
      cardDetail: "How to park your car at your garage?",
    },
  ]);

  return (
    <section id="projects">
      <div className="lg:mb-36 p-5">
        <div className="text-white font-semibold  text-center lg:text-start lg:text-7xl lg:ms-6 p-9">
          <h2 className="text-4xl lg:text-7xl">PROJECTS</h2>
          <progress className="progress w-56 bg-white"></progress>
        </div>

        {/* Card */}
        <div className="w-full  sm:flex sm:justify-center  lg:grid lg:grid-cols-3 lg:gap-5 text-white gap-5  ">
          {/* .map ตรงนี้ โดยครอบทั้ง div  */}
          {project.map((item, index) => (
            <div
              key={index}
              className="card w-full mt-5 bg-zinc-900 shadow-md shadow-purple-600  hover:scale-105 duration-200"
            >
              <figure>
                <img src={item.image} alt="car!" className="h-36 w-36" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.cardTitle}</h2>
                <p>{item.cardDetail}</p>
                <div className="card-actions justify-center mt-5">
                  <button className="btn lg:text-base btn-outline text-xs rounded-full w-full lg:w-32  bg-gradient-to-r from-violet-500 to-fuchsia-500">
                    Github <AiFillGithub />
                  </button>
                  <button className="btn lg:text-base btn-outline text-xs rounded-full w-full lg:w-32  bg-gradient-to-r from-violet-500 to-fuchsia-500">
                    Demo <BsArrowRight />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
