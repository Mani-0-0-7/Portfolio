import React from 'react'
import './Navbar.css';
import logo from "../Assets/logo.png";
import { MdOutlinePhone } from "react-icons/md";

const Navbar = () => {
  return (
    <>
      <section className="navpage">
        <div className="navcontainer">
          <div className="logo">
            <img src={logo} alt=""/>
          </div>

          <div className="navbar">
            <h3>Home</h3>
            <h3>About</h3>
            <h3>Resume</h3>
            <h3>Portfolio</h3>
            <h3>Blog</h3>
            <h3>Contact</h3>
            <h3>|</h3>
          </div>
          
          <div className="phonebar">
            <MdOutlinePhone className="phoneimg" />
            <h3>+9080778992</h3>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar