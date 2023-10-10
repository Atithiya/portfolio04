import React, { useState } from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoCss3 } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoReact } from "react-icons/bi";
import { BsFillBootstrapFill } from "react-icons/bs";
import { SiTailwindcss } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { BsGit } from "react-icons/bs";

import background from "../assets/bg.png";

function Skills() {
  const [skills, setSkills] = useState([
    {
      logo: <AiFillHtml5 />,
      logoName: "HTML",
    },
    {
      logo: <BiLogoCss3 />,
      logoName: "CSS",
    },
    {
      logo: <BiLogoJavascript />,
      logoName: "JavaScript",
    },
    {
      logo: <BiLogoReact />,
      logoName: "ReactJS",
    },
    {
      logo: <BsFillBootstrapFill />,
      logoName: "Bootstrap",
    },
    {
      logo: <SiTailwindcss />,
      logoName: "Tailwind CSS",
    },
    {
      logo: <FaFigma />,
      logoName: "Figma",
    },
    {
      logo: <BsGit />,
      logoName: "Git",
    },
    // Add more skills as needed
  ]);

  return (
    <section id="skills">
      <div className="lg:mb-36 p-5 ">
        <div className="text-white font-semibold  text-center p-9 lg:text-start lg:text-7xl lg:ms-6 ">
          <h2 className="text-4xl lg:text-7xl">SKILLS</h2>
          <progress className="progress w-56 bg-white"></progress>
        </div>

        {/* Skills */}
        <div className="card text-white gap-5 grid grid-cols-2 lg:grid-cols-4 gap-4 place-content-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="card w-full  text-neutral-content  bg-zinc-900 shadow-md shadow-purple-600  hover:scale-105 duration-200"
            >
              <div className="card-body items-center text-center">
                <div className="card-title text-6xl">{skill.logo}</div>
                <p>{skill.logoName}</p>
              </div>
            </div>
          ))}
        </div>
        {/* End of skills */}
      </div>
    </section>
  );
}

export default Skills;
