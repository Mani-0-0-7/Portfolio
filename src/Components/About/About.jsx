import React from 'react'
import './About.css'
import about from '../Assets/about.jpg';
const About = () => {
  return (
    <>
      <div className="about">
        <div className="tag">
          <h1>ABOUT ME</h1>

          <div className="tag1">
            <h3>ABOUT ME</h3>
          </div>
          <div className="underline">
            <span></span>
          </div>
        </div>
        <div className="biocon">
          <div className="bio">
            <div className="biodata">
              <div className="aboutimg">
                <img src={about} alt="" />
              </div>
            </div>
            <div className="bioinfo">
              <div className="biodetails">
                <h1>Hi There! I'm Manikandan</h1>
                <h2>Visual Desinger</h2>
                <p>
                  I am a Visual Designer with a strong focus on digital
                  branding. Visul design seeks to attract, inspire, create
                  desires and otivate people to respond to messages, with a view
                  to making a favorable impact.
                </p>
              </div>
              <div className="bioinformation">
                <div className="cvdetails">
                  <h3>Birthday</h3>
                  <h3>Phone</h3>
                  <h3>Email</h3>
                  <h3>From</h3>
                  <h3>Language</h3>
                  <h3>Freelance</h3>
                  <h3>Hobby</h3>
                </div>
                <div className="cvinfo">
                  <div className="symbol">
                    <h3>:</h3>
                    <h3>:</h3>
                    <h3>:</h3>
                    <h3>:</h3>
                    <h3>:</h3>
                    <h3>:</h3>
                    <h3>:</h3>
                  </div>
                  <div className="infodetails">
                    <h3>Jan20,2002</h3>
                    <h3>9080772992</h3>
                    <h3>mr.9787@gmail.com</h3>
                    <h3>Sivakasi</h3>
                    <h3>Tamil,English</h3>
                    <h3>Available</h3>
                    <h3>Sports</h3>
                  </div>
                </div>
              </div>
              <button>Download Cv</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About