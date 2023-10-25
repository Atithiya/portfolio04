import React from "react";
import Profile from "../assets/profile.png";
import CV from "../assets/Atithiya_Inthorn_CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  const profilePic =
    "https://scontent.fbkk28-1.fna.fbcdn.net/v/t39.30808-6/387133819_2607528776063478_4409975424382356809_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=rahz7dTkxqcAX-Soyjf&_nc_ht=scontent.fbkk28-1.fna&oh=00_AfB45HVtqPSPMTTuQYti0NIkGEa8KQTRb-Ja7CxXsDfYDw&oe=653E0243";

  useEffect(() => {
    AOS.init({
      // Global settings go here
      // For example:
      duration: 800, // Animation duration in milliseconds
      offset: 100, // Offset (in pixels) from the top of the page when triggering animations
    });
  }, []);
  return (
    <section id="about" className="w-full">
      {/* <div className=" text-center pt-9 bg-gradient-to-b from-gray-800 to-black ">
        <div className="text-white font-semibold    text-center lg:text-start lg:text-7xl lg:mt-15 lg:ms-6 ">
          <h2 className="text-4xl lg:text-7xl ">ABOUT ME</h2>
          <progress className="progress w-56 bg-white"></progress>
        </div> */}
      <div className="pt-14 p-8 bg-gradient-to-b from-gray-800 to-black">
        <div
          data-aos="fade-right"
          className="text-white font-semibold  text-center lg:text-start lg:text-7xl lg:ms-6 p-9 "
        >
          <h2 className="text-4xl lg:text-5xl text ">ABOUT ME</h2>
        </div>

        <div data-aos="fade-down" className="w-full lg:flex  lg:ps-20 lg:pe-20">
          <div className="lg:w-1/2">
            <img
              src={profilePic}
              alt="profile-picture"
              className="profile-picture w-[400px] lg:w-[500] shadow-md shadow-purple-600"
            />
          </div>
          <div className="lg:w-1/2 lg:text-start pt-5 lg:pt-0">
            <p className="text-white lg:text-lg ">
              Hello, I'm Atithiya Inthorn, a proud graduate of Generation
              Thailand's Junior Software Developer cohort 5 program. During this
              incredible journey, I uncovered my passion for technology and
              software development, leading me to embark on a new career path.
              As a career switcher,
              <br /> I transitioned from my previous studies in law to
              wholeheartedly embrace web development. <br />
              <br />
              My ultimate aim is to craft bespoke websites that elevate people's
              online experiences and spread positivity.
            </p>
            <a
              href={CV}
              className="mt-5 btn lg:text-base btn-outline text-xs rounded-full w-full lg:w-48  bg-gradient-to-r from-violet-500 to-fuchsia-500 "
              target="_blank"
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
