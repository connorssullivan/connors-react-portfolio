import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./nav/Nav.js"; 
import About from "./about/about.js";
import Skills from "./skills/skills.js";
import Projects from "./projects/projects.js";
import Contact from "./contact/contact.js";
import "./styles/app.css";
import Background from "./background/Background.js";
import PlayerStats from "./playerStats/PlayerStats.js";

const App = () => {
  return (
  <>
    <Router>
      <Nav/>
      <Background />
      {/* Define routes for different pages using the 'Routes' component */}
      <Routes>
        <Route path="/" element={About}/>
        <Route path="/skills" element={Skills}/>
        <Route path="/projects" element={Projects}/>
        <Route path="/contact" element={Contact}/>
      </Routes>
      {/* Add in Player Stats*/}
      <PlayerStats/>
    </Router>
  </>
  );
};

export default App;
