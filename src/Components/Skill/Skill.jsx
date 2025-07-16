import React from 'react'
import './Skill.css'
const Skill = () => {
  return (
    <>
      <div className="skill">
        <div className="skilltag">
          <h1>SKILLS</h1>
          <div className="skilltag2">
            <h2>SKILLS</h2>
          </div>
          <div className="skillline">
            <span></span>
          </div>
        </div>
        <div className="skillinfo">
          <div className="skilldiv">
            <div className="skilldetails">
              <h2>
                All the skills that I have in that field of work are mentioned.
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores. Stet clita kasd gubergren, no sea takimata
                sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt.
              </p>
            </div>
            <section className="skillbar" id='skill'>
            <div className="skillbarcontainer">
            <div className="skillbaritems">
              <div className="skillbaritem">
                <div className="skillbarinfo">
                  <h2>HTML</h2>
                  <div className="progressbarline"><h2>90%</h2></div>
                </div>
              </div>

            </div>
            </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skill