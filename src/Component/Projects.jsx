import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import portImg from "../assets/port.jpg";

function Projects() {
  useEffect(() => {
    AOS.init({
      // Global settings go here
      // For example:
      duration: 800, // Animation duration in milliseconds
      offset: 100, // Offset (in pixels) from the top of the page when triggering animations
    });
  }, []);
  const [project, setProject] = useState([
    // ใส่รายละเอียดโปรเจคตรงนี้แล้วมันจะไป .map ใน card ให้เรา
    {
      image:
        "https://scontent.fbkk28-1.fna.fbcdn.net/v/t39.30808-6/391515066_2607505446065811_7419148797784407413_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=813123&_nc_eui2=AeHGK3SsMWAV5zz5_mZHiuNUlfH-VOYqWjGV8f5U5ipaMZMbortS-i1M6XKXIc4JAP3acA7L92EigN_Hllg33Dm_&_nc_ohc=HQeTdUmNQCgAX8QAjPI&_nc_ht=scontent.fbkk28-1.fna&oh=00_AfDWNKwAQqTCoX49rrToubpm5nooCV7wSH01qOMyXzmiug&oe=652B4E50",
      cardTitle: "Portfolio",
      cardDetail:
        "Developed a static portfolio from the ground up, using ReactJS, CSS, and Tailwind CSS, while also implementing responsive web design for mobile devices.",
      github: "https://github.com/Atithiya/portfolio04/tree/main",
      demo: "https://atithiya-inthorn-portfolio.vercel.app/",
    },
    {
      image:
        "https://scontent.fbkk28-1.fna.fbcdn.net/v/t39.30808-6/391526637_2607504972732525_6896985667222711452_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=813123&_nc_eui2=AeHjbdFjso5KzwEKgMFKjdmPJqht5JWiGnwmqG3klaIafOFh6G9lHLRYAvbtqrIP1oK-4xJEhKCHwlcLxVntdj6m&_nc_ohc=bHeJONrtdOsAX8SpO2B&_nc_ht=scontent.fbkk28-1.fna&oh=00_AfBbFhFEGBCgFpTJPBu9CvvmYYXFTJC3PcoEfs1x-muoCw&oe=652B34B9",
      cardTitle: "React Accessment",
      cardDetail:
        "Developed the admin panel by sending API requests, allowing admin to create, delete, and read data on the admin page, using ReactJS and TailwindCSS.",
      github: "https://github.com/Atithiya/AtithiyaReactAccessment",
      demo: "https://atithiya-react-accessment.vercel.app/",
    },
    {
      image:
        "https://scontent.fbkk28-1.fna.fbcdn.net/v/t39.30808-6/391526007_2607505392732483_866346561858161106_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=813123&_nc_eui2=AeFIhD_IitVfDnas3w3GSyP6JkfoKjuyRY0mR-gqO7JFjeh4vsbGQBafHrvfLdMKEeJ1t7XeRh8Nqw9Nzc8A7P_b&_nc_ohc=Tg7jnX8KOxoAX9V_5kL&_nc_ht=scontent.fbkk28-1.fna&oh=00_AfB-7xY6rC1Koen_Ufxm8AhdpD_zubWGTkBrZn9oty9ANw&oe=652B8282",
      cardTitle: "Colmar Academy",
      cardDetail:
        "Created my first static website with a focus on responsive web design, meeting specific requirements, using HTML and pure CSS.",
      github: "https://github.com/Atithiya/Colmar-Academy-Test",
      demo: "https://colmar-academy-test.vercel.app/",
    },
  ]);

  return (
    <section id="projects">
      <div className="lg:mb-36 p-5">
        <div
          data-aos="fade-right"
          className="text-white font-semibold  text-center lg:text-start lg:text-7xl lg:ms-6 p-9"
        >
          <h2 className="text-4xl lg:text-7xl">PROJECTS</h2>
          <progress className="progress w-56 bg-white"></progress>
        </div>

        {/* Card */}
        <div
          data-aos="fade-down"
          className="w-full  sm:flex sm:justify-center  lg:grid lg:grid-cols-3 lg:gap-5 text-white gap-5  "
        >
          {/* .map ตรงนี้ โดยครอบทั้ง div  */}
          {project.map((item, index) => (
            <div
              key={index}
              className="card w-full  mt-5 bg-zinc-900 shadow-md shadow-purple-600  hover:scale-105 duration-200"
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
                <p>{item.cardDetail}</p>
                <div className="card-actions justify-center mt-5">
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
  );
}

export default Projects;
