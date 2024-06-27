import React from "react";
import logo from "./logo.svg";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Certificates from "./components/certificates/Certificates";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Hackathons from "./components/hackathons/Hackathons";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Skills />
      <Hackathons />
      <Projects />
      {/*<Certificates />*/}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
