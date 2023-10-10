import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { useState } from "react";

function Projects() {
  const [project, setProject] = useState([
    {
      image:
        "https://i.pinimg.com/564x/0b/67/96/0b679656ca7ee45626d54e01c3c476b5.jpg",
      cardTitle: "Hey",
      cardDetail: "How to park your car at your garage?",
    },
  ]);

  return (
    <section id="projects">
      <div className="lg:mb-36 p-5">
        <div className="text-white font-semibold  text-center lg:text-start lg:text-7xl lg:ms-6 p-9">
          <h2 className="text-4xl lg:text-7xl ">PROJECTS</h2>
          <progress className="progress w-56 bg-white"></progress>
        </div>

        {/* Card */}
        <div className="w-full  lg:flex lg:justify-center lg:gap-5 text-white gap-10  ">
          <div className="card w-full mt-5 bg-zinc-900 shadow-md shadow-gray-600 hover:scale-105 duration-200">
            <figure>
              {project.map((item) => (
                <img src={item.image} alt="car!" className="h-36 w-36" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.cardDetail}</h2>
              <p>{item.cardTitle}</p>
              <div className="card-actions justify-end ">
                <button className="btn btn-outline btn-secondary rounded-full">
                  Read more
                </button>
              </div>
            </div>
              ))}
          </div>
          {/* Card2 */}
          <div className="card w-full mt-5 bg-zinc-900 shadow-md shadow-gray-600 hover:scale-105 duration-200">
            <figure>
              <img
                src="https://i.pinimg.com/564x/0b/67/96/0b679656ca7ee45626d54e01c3c476b5.jpg"
                alt="car!"
                className="h-36 w-36"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">React Accessment</h2>
              <p>How to park your car at your garage?</p>
              <div className="card-actions justify-end ">
                <button className="btn btn-outline btn-secondary rounded-full">
                  Read more
                </button>
              </div>
            </div>
          </div>
          <div className="card mt-5  w-full bg-zinc-900 shadow-md shadow-gray-600 hover:scale-105 duration-200">
            <figure>
              <img
                src="https://i.pinimg.com/564x/23/44/ff/2344ff68c03a2b12fc66f578ca986008.jpg"
                alt="car!"
                className="h-36 w-36"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Stopwatch</h2>
              <p>How to park your car at your garage?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-outline btn-secondary rounded-full">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Card3 */}
        <div className="flex justify-center lg:justify-end pt-5 ">
          <div className="btn lg:text-base btn-outline text-xs rounded-full w-full lg:w-44  bg-gradient-to-r from-violet-500 to-fuchsia-500  ">
            Read more <BsArrowRight />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;