import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./nav/Nav.js"; 
import About from "./about/about.js";
import Skills from "./skills/skills.js";
import Projects from "./projects/projects.js";
import Contact from "./contact/contact.js";
import "./styles/app.css";

const App = () => {
  return (
  <>
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={About}/>
        <Route path="/skills" element={Skills}/>
        <Route path="/projects" element={Projects}/>
        <Route path="/contact" element={Contact}/>
      </Routes>
    </Router>
  </>
  );
};

export default App;
