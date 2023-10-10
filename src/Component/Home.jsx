import React from "react";
import { TypeAnimation } from "react-type-animation";
import background from "../assets/bg.png";

function Home() {
  return (
    <section id="home">
      <div
        className="background h-80 "
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="text-white text-7xl text-center lg:text-start lg:text-9xl  lg:ms-10 pt-36 ">
          <h2 className="fname">ATITHIYA</h2>
          <h2 className=" lname ">INTHORN</h2>
        </div>
        <div className="text-center  font-semibold lg:text-start lg:ms-10 text-3xl lg:text-5xl  type italic ">
          <TypeAnimation
            sequence={[
              "HELLO !",
              500,
              "JUNIOR FRONT-END DEVELOPER",
              500,
              "JUNIOR FRONT-END ",
              500,
            ]}
            style={{ fontSize: "1em" }}
            repeat={Infinity}
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
