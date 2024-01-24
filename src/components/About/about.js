import "./about.css";

const About = () => {
  return (
    <section id="aboutPage">
      <h2>
        ABOUT <span> ME</span>
      </h2>

      <div className="aboutandSkills">
        <div className="about">
          
          <p className="aboutDesc">
            I started my journey by learning basics of Front End Development
            using HTML,CSS & Javascript and have worked on very few projects.
            I'm working on improving my data structure and Algorithm skills by
            solving problems in Leetcode and GeeksForGeeks coding platforms. I'm
            a passionate learner who's always willing to learn and work across
            new technologies.
          </p>
        </div>

        <div className="skills">
          <h3>TECHNICAL SKILLS</h3>
          <div className="skillsList">
            <ul>
              <li>Java</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Data Structures</li>
              <li>Problem solving</li>
              <li>Javascript</li>
              <li>React Basics</li>
            </ul>
          </div>
        </div>
        <div className="education">
          <h3>MY EDUCATION</h3>
          <div className="diffEdu">
            <div className="engineering">
              <h4 className="diffEduHeading">
                Computer Science and Engineering
              </h4>
              <div className="info">
                <p>2019-2023</p>
                <p>JSS Academy of Technical Education - Bengaluru</p>
                <p>CGPA - 8.89</p>
              </div>
            </div>
            <div className="puc">
              <h4 className="diffEduHeading">Science-PCMB</h4>
              <div className="info">
                <p>2017-2019</p>
                <p>SAV Composite PU College - Shivamogga</p>
                <p>Percentage - 89.9%</p>
              </div>
            </div>
            <div className="sslc">
              <h4 className="diffEduHeading">SSLC</h4>
              <div className="info">
                <p>2008-2017</p>
                <p>JNES - Shivamogga</p>
                <p>Percentage - 90.99%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
