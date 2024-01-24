import "./intro.css";
import { Link } from "react-scroll";
import bg from "../../assets//bg.jpeg";
import btnImage from "../../assets/hireme.jpg";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introduction">
        <div className="introContent">
          <span className="hello">HELLO,</span>
          I'M
          <span className="introName"> SINCHANA S L</span>
          
          <p className="introPara">
            A Front-End Developer! A recent graduate with a B.E. in Computer
            Science from JSSATE - Bengaluru. I'm a passionate learner &
            problem-solving enthusiast who's always willing to learn and work
            across new technologies.
          </p>
          <Link
            to="contact"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-75}
            duration={700}
          >
            <button className="btn">
              <img src={btnImage} alt="" className="btnImage" />
              Hire Me
            </button>
          </Link>
        </div>
        <div className="myImage">
          <img src={bg} alt="Background" className="bg" />
        </div>
      </div>
    </section>
  );
};

export default Intro;
