import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { links, socials } from "../util/consts";
import { FaHamburger } from "react-icons/fa";
import logo from "../util/logo.svg";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    checkSize();
    window.addEventListener("resize", checkSize)
  }, [])

  const checkSize = () => {
    if(window.innerWidth >= 768){
      setShowLinks(true)
    }
    if(window.innerWidth < 768){
      setShowLinks(false)
    }
  }

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaHamburger />
          </button>
        </div>
        <div className={`links-container ${showLinks && 'show'}`}>
          <ul className="links">
            {links
              .filter((link) => link.text !== 'Error')
              .map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <Link to={url}>{text}</Link>
                  </li>
                );
              })}
          </ul>
        </div>
        <ul className={`social-icons ${showLinks && 'show'}`}>
          {socials.map((social) => {
            const { id, url, icon } = social;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
