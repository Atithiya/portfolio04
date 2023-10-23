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
    {
      image:
        "https://scontent.fbkk28-1.fna.fbcdn.net/v/t39.30808-6/393579026_2614484842034538_7903755899744248717_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG6x7TqDYDkQCTRi0Xod_ntYgdvZEuW50NiB29kS5bnQ8KFe-8Twhs_C-HO78VOdt70KVZg9PLWNwkdG8_nOJHo&_nc_ohc=ve1o5TXgdZ0AX97VFve&_nc_ht=scontent.fbkk28-1.fna&oh=00_AfB6DmigBQzf5Dpsri6Xx0FvExXr1kj7vk61MLe_aR49OA&oe=653A3AF8",
      cardTitle: "KeepFit",
      cardDetail:
        "Created a workout app for elderly users with a team, employing agile methods and receiving mentorship from an experienced developer. Designed 'My Activity' using Figma, ReactJS, and TailwindCSS, and crafted Keepfit's logo",
      github: "https://github.com/peth12/keepfit-react",
      demo: "https://keepfit-react.vercel.app/",
    },
    {
      image:
        "https://scontent.fbkk28-1.fna.fbcdn.net/v/t39.30808-6/391515066_2607505446065811_7419148797784407413_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHGK3SsMWAV5zz5_mZHiuNUlfH-VOYqWjGV8f5U5ipaMZMbortS-i1M6XKXIc4JAP3acA7L92EigN_Hllg33Dm_&_nc_ohc=vatLvqTazSYAX-4iMHN&_nc_ht=scontent.fbkk28-1.fna&oh=00_AfDIN-3ohKKNXQelL_TiidTw8Lb9coD9xAtDxhAb7S_oKg&oe=65353190",
      cardTitle: "Portfolio",
      cardDetail:
        "Developed a static portfolio from the ground up, using ReactJS, CSS, and Tailwind CSS, while also implementing responsive web design for mobile devices",
      github: "https://github.com/Atithiya/portfolio04/tree/main",
      demo: "https://atithiya-portfolio.vercel.app/",
    },
    {
      image:
        "https://scontent.fbkk28-1.fna.fbcdn.net/v/t39.30808-6/391526637_2607504972732525_6896985667222711452_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=FX3M9qZ37tcAX_iJshG&_nc_ht=scontent.fbkk28-1.fna&oh=00_AfAALgTyEM3glt7-f6Kx7DHWeEB4tKhDrFcAbI8i9x43YA&oe=653B06B9",
      cardTitle: "React Assessment",
      cardDetail:
        "Created the admin panel by sending API requests, allowing admin to create, delete, and read data on the admin page, using ReactJS and TailwindCSS",
      github: "https://github.com/Atithiya/AtithiyaReactAccessment",
      demo: "https://atithiya-react-accessment.vercel.app/",
    },
    {
      image:
        "https://scontent.fbkk28-1.fna.fbcdn.net/v/t39.30808-6/391526007_2607505392732483_866346561858161106_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFIhD_IitVfDnas3w3GSyP6JkfoKjuyRY0mR-gqO7JFjeh4vsbGQBafHrvfLdMKEeJ1t7XeRh8Nqw9Nzc8A7P_b&_nc_ohc=-80vuXMTSFUAX_xVER4&_nc_ht=scontent.fbkk28-1.fna&oh=00_AfAX8K9tYihGcgicbJpmjgxTyCPaR7EO6k33IxPmOPZQTA&oe=65376002",
      cardTitle: "Colmar Academy",
      cardDetail:
        "Created my first static website with a focus on responsive web design, meeting specific requirements, using HTML and pure CSS",
      github: "https://github.com/Atithiya/Colmar-Academy-Test",
      demo: "https://colmar-academy-test.vercel.app/",
    },
    {
      image:
        "https://scontent.fbkk28-1.fna.fbcdn.net/v/t39.30808-6/393584799_2613624875453868_1525315236249494699_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHpvBteme4PRM-1BWa4k16C5yptkTTjz4jnKm2RNOPPiKKf9qlgp9zeNEIC_H3taynXmCTcn_JyPAn2SvlbRvO-&_nc_ohc=ErNIWxWVJbgAX-0ZXN6&_nc_ht=scontent.fbkk28-1.fna&oh=00_AfDIQtvb594WgdV8tQJBqKj9so9sjoJpiL-flTgzmVOu8w&oe=6538936A",
      cardTitle: "Weather App",
      cardDetail:
        "This web application uses HTML, CSS, and JavaScript to fetch and display current weather information from the OpenWeatherMap API for a specified location",
      github: "https://github.com/Atithiya/weatherApp/",
      demo: "https://weather-app-atithiya.vercel.app/",
    },
    {
      image:
        "https://scontent.fbkk28-1.fna.fbcdn.net/v/t39.30808-6/391694518_2614705255345830_5686081095431102603_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFuN6Vsb_aH5-hbPtB6kgSSeEviWfXGLpd4S-JZ9cYul6Qg2KptUWYV9SrLnukNpFcD5efeZlv8nmwEdVe-f0XY&_nc_ohc=HgkVYHgLYm0AX_lEGv0&_nc_ht=scontent.fbkk28-1.fna&oh=00_AfAGlrP8x5wiB7k5RXjUtUR63TMN4Gc5_agLqOXkg7NQwA&oe=65395DD2",
      cardTitle: "Register Form",
      cardDetail:
        "Crafted a front-end user registration form using HTML, CSS, and JavaScript. This form carefully validates user inputs and provides immediate error alerts",
      github: "https://github.com/Atithiya/GenerateQrCode",
      demo: "https://register-form-alpha.vercel.app/",
    },
  ]);

  return (
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
  );
}

export default Projects;
