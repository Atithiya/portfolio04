import React from "react";
import background from "../assets/bg.png";

function Education() {
  const img =
    "https://cdn.pixabay.com/photo/2011/12/14/12/17/galaxy-11098_1280.jpg";
  return (
    <section id="education">
      <div className="lg:mb-36 p-5">
        <div className="text-white font-semibold  text-center lg:text-start lg:text-7xl lg:ms-6 p-9 ">
          <h2 className="text-4xl lg:text-7xl text">EDUCATION</h2>
          <progress className="progress w-56 bg-white"></progress>
        </div>
        {/* card education */}
        <div className="w-full text-white  ">
          {/* card 1 */}
          <div className="card w-full  glass   hover:scale-105 duration-200 shadow-md shadow-purple-600 ">
            <div className="card-body">
              <h2 className="card-title">
                Junior Software Developer Bootcamp | Generation Thailand
              </h2>
              <p>July - Oct 2023</p>
              <p>Technical Skills : Full Stack Developer, MERN Stack </p>
              <p>
                Behaviral Skills : Team work, Growth Mindset, Time management
                and more.
              </p>
            </div>
          </div>
          {/* card 2 */}
          <div className="card w-full glass mt-5   hover:scale-105 duration-200 shadow-md shadow-purple-600">
            <div className="card-body">
              <h2 className="card-title">
                Bachelor of Law | Ramkhamhaeng University
              </h2>
              <p>2017-2020</p>
              <p>Law and legal document preparation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
