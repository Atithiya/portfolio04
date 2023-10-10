import React from "react";
import Profile from "../assets/profile.png";
import CV from "../assets/CV_Atithiya.pdf";

function About() {
  return (
    <section id="about">
      {/* <div className=" text-center pt-9 bg-gradient-to-b from-gray-800 to-black ">
        <div className="text-white font-semibold    text-center lg:text-start lg:text-7xl lg:mt-15 lg:ms-6 ">
          <h2 className="text-4xl lg:text-7xl ">ABOUT ME</h2>
          <progress className="progress w-56 bg-white"></progress>
        </div> */}
      <div className="lg:mb-36 p-5 bg-gradient-to-b from-gray-800 to-black">
        <div className="text-white font-semibold  text-center lg:text-start lg:text-7xl lg:ms-6 p-9 ">
          <h2 className="text-4xl lg:text-7xl text">ABOUT ME</h2>
          <progress className="progress w-56 bg-white"></progress>
        </div>

        <div className="w-full lg:flex mt-14 p-5">
          <div className="lg:w-1/2  hover:scale-105 duration-200 ">
            <img
              src={Profile}
              alt="profile-picture"
              className="profile-picture w-[400px] lg:w-[500] shadow-md shadow-purple-600"
            />
          </div>
          <div className="lg:w-1/2 lg:text-center ">
            <p className="text-white lg:text-xl mt-20">
              Hello ! I am Atithiya Inthorn. <br></br>I am a graduated from
              Junior Software Developer 5 of Generation Thailand, where my
              passion for technology and software development took root. I'm an
              enthusiastic junior software developer with a strong drive to
              contribute to the dynamic world of technology and create
              innovative solutions.
            </p>
            <a
              href={CV}
              className="mt-5 btn lg:text-base btn-outline text-xs rounded-full w-full lg:w-44  bg-gradient-to-r from-violet-500 to-fuchsia-500 "
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

{
  /* <a
href={resume}
download={`fullName_Resume.pdf`}
rel='noopener noreferrer'
target='_blank'
>
<button className='btn-resume'></button>
</a> */
}
//ส่งอีเมล  mail to
