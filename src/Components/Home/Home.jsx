import React from "react";
import "./Home.css";
import hero from "../Assets/hero-img.jpg";
import { FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="title">
          <div className="info">
            <h2>Hello I'm</h2>
            <h1>Manikandan</h1>
            <h3>Visual Designer</h3>
            <button>Hire Me</button>
          </div>
          <div className="list">
            <div className="icons">
              <div className="mediaicons">
                <FaInstagram className="insta" />
                <h2>Instagram</h2>
              </div>
              <div className="mediaicons">
                <FiGithub className="git" />
                <h2>GitHub</h2>
              </div>
              <div className="mediaicons">
                <FaLinkedin className="link" />
                <h2>LinkedIn</h2>
              </div>
              <div className="mediaicons">
                <FaWhatsapp className="message" />
                <h2>Whatsapp</h2>
              </div>
             
            </div>
          </div>
        </div>
        <div className="photo">
          <div className="photo1">
            <img src={hero} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
