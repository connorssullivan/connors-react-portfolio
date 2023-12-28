//Set up react
import React, { Component } from 'react'
import{Link, useLocation} from "react-router-dom";

//Imports for Navigation images
import astronautHelmet from "../assets/astronaut-helmet.png";
import deadEye from "../assets/dead-eye.png";
import stack from "../assets/stack.png";
import envelope from "../assets/envelope.png";

//Import for the style sheet
import "../styles/nav.css";

export default function Nav() {
  // look up current location
  const location = useLocation();

  // Determine the navigation class based on the current pathname
  const getNavPositionClass = () => {
    switch (location.pathname) {
      case "/":
        return "nav-about";
      case "/skills":
        return "nav-skills";
      case "/projects":
        return "nav-projects";
      case "/contact":
        return "nav-contact";
      default:
        return "";
    }
  };

    //Get the title page from navigation menu
    const getPageTitle = () => {
      switch (location.pathname) {
        case "/":
          return "ABOUT";
        case "/skills":
          return "SKILLS";
        case "/projects":
          return "PROJECTS";
        case "/contact":
          return "CONTACT";
        default:
          return "";
      }
    };

  // Get the current navigation position class and page title
  const navPositionClass = getNavPositionClass();
  const pageTitle = getPageTitle();

  // Check if a given navigation class is the current page
  const isCurrentPage = (navClass) => {
    return navClass === navPositionClass;
  };

    //Render a navigation link with a icon
    const renderNavLink = (to, imgSrc, altText, navClass) => {
      const isCurrent = isCurrentPage(navClass);
      const linkClass = isCurrent ? "nav-link current" : "nav-link";

      return (
        <Link to={to} className={linkClass}>
          <img src={imgSrc} alt={altText} />
          {isCurrent && <h1 className="page-title">{pageTitle}</h1>}
        </Link>
      );
    };

    // Render the main navigation
    return (
      <nav className={`nav ${navPositionClass}`}>
        {renderNavLink(
          "/",
          astronautHelmet,
          "astronaut helmet icon",
          "nav-about"
        )}
        {renderNavLink("/skills", deadEye, "deadEye icon", "nav-skills")}
        {renderNavLink("/projects", stack, "stack icon", "nav-projects")}
        {renderNavLink("/contact", envelope, "envelope icon", "nav-contact")}
      </nav>
    );
  }
