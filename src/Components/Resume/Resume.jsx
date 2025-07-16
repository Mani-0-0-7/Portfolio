 import React from 'react'
 import './Resume.css'
import resume1 from'../Assets/resume-icon1.png'
import resume2 from "../Assets/resume-icon2.png"
const Resume = () => {
  return (
    <>
      <div className="resume">
        <div className="resumeinfo">
          <h1>RESUME</h1>
          <div className="resumechild">
            <h2>RESUME</h2>
          </div>
          <div className="resumeline">
            <span></span>
          </div>
        </div>
      </div>
      <div className="study">
        <div className="studyinfo">
          <div className="education">
            <div className="leftside">
              <img src={resume1} alt="" />
              <h1>EDUCATION</h1>
            </div>
            <div className="educationbio">
              <div className="contentdetails">
                <div className="studycon">
                  <h2 className='study'>Bachleor Of Information Technology</h2>
                  <h4 className='duration'>2019-2022</h4>
                  <h3 className='college'>University Of Madurai Kamaraj</h3>
               <div className="infoparagraph">
                   <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc ligula nulla, tincidunt id faucibus sed, suscipit
                    feugiat turpis.
                  </p>
               </div>
                </div>
                <div className="studycon">
                  <h2>State board of Tamilnadu</h2>
                  <h4>2018-2019</h4>
                  <h3>Govt.Hr.Sec.School</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc ligula nulla, tincidunt id faucibus sed, suscipit
                    feugiat turpis.
                  </p>
                </div>
                <div className="studycon">
                  <h2>State board of Tamilnadu</h2>
                  <h4>2018-2019</h4>
                  <h3>Govt.Hr.Sec.School</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc ligula nulla, tincidunt id faucibus sed, suscipit
                    feugiat turpis.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="experience">
            <div className="rightside">
              <img src={resume2} alt="" />
              <h1>EXPERIENCE</h1>
            </div>
            <div className="expdetails">
              <div className="workexpdiv">
                <div className="workexp">
                  <h2>Senior UI/UX Desinger</h2>
                  <h4>Jan2024 Present</h4>
                  <h3>Sivakasi</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc ligula nulla, tincidunt id faucibus sed, suscipit
                    feugiat turpis.
                  </p>
                </div>
                <div className="workexp2">
                  <h2>Senior UI/UX Desinger</h2>
                  <h4>Jan2024 Present</h4>
                  <h3>Sivakasi</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc ligula nulla, tincidunt id faucibus sed, suscipit
                    feugiat turpis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

}

export default Resume