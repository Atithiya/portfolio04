import React from "react";
import Profile from "../assets/profile.png";
import CV from "../assets/Atithiya_CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  const profilePic =
    "https://scontent.fbkk12-3.fna.fbcdn.net/v/t39.30808-6/387133819_2607528776063478_4409975424382356809_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=813123&_nc_eui2=AeGoADNJSvUJacJA-gYEHpJJVjvPvaJjXYJWO8-9omNdghIiktXCHKCiN_Qhv9ItSTiZVQiIYLt7KZe5upqomnWf&_nc_ohc=HciKGd34h00AX-GeiU7&_nc_ht=scontent.fbkk12-3.fna&oh=00_AfCEI49kx_pcdT-URAhTQ5hbGSWfHjw9iFfBi1LwhvVhJQ&oe=652C3603";

  useEffect(() => {
    AOS.init({
      // Global settings go here
      // For example:
      duration: 800, // Animation duration in milliseconds
      offset: 100, // Offset (in pixels) from the top of the page when triggering animations
    });
  }, []);
  return (
    <section id="about">
      {/* <div className=" text-center pt-9 bg-gradient-to-b from-gray-800 to-black ">
        <div className="text-white font-semibold    text-center lg:text-start lg:text-7xl lg:mt-15 lg:ms-6 ">
          <h2 className="text-4xl lg:text-7xl ">ABOUT ME</h2>
          <progress className="progress w-56 bg-white"></progress>
        </div> */}
      <div className="lg:mb-36 p-5 bg-gradient-to-b from-gray-800 to-black">
        <div
          data-aos="fade-right"
          className="text-white font-semibold  text-center lg:text-start lg:text-7xl lg:ms-6 p-9 "
        >
          <h2 className="text-4xl lg:text-7xl text">ABOUT ME</h2>
          <progress className="progress w-56 bg-white"></progress>
        </div>

        <div className="w-full lg:flex mt-14 p-5">
          <div className="lg:w-1/2  hover:scale-105 duration-200 ">
            <img
              src={profilePic}
              alt="profile-picture"
              className="profile-picture w-[400px] lg:w-[500] shadow-md shadow-purple-600"
            />
          </div>
          <div data-aos="fade-down" className="lg:w-1/2 lg:text-center  ">
            <p className="text-white lg:text-xl mt-20">
              Hello, I'm Atithiya Inthorn. <br />I am graduated of Generation
              Thailand's Junior Software Developer 5 program, where I discovered
              my passion for technology and software development. I'm a career
              switcher, moving from my previous path as a law student to focus
              on web development, with the goal of creating customized websites
              to enhance people's online experiences.
            </p>
            <a
              href={CV}
              className="mt-5 btn lg:text-base btn-outline text-xs rounded-full w-full lg:w-48  bg-gradient-to-r from-violet-500 to-fuchsia-500 "
            >
              Download CV <AiOutlineDownload />
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
