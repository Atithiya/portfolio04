import React from "react";
import background from "../assets/bg.png";
import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Experience from "./Experience";
import Footer from "./Footer";

function App() {
  return (
    <>
      {/* ใส่เนื้อหาตรงนี้ */}
      <Navbar />
      <Home />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
