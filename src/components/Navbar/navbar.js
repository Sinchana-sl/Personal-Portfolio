import "./navbar.css";
import logo from "../../assets/logo.jpg";
import { Link } from "react-scroll";
import contact from "../../assets/contact.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenu">
        <Link
          activeClass="active"
          spy={true}
          to="intro"
          smooth={true}
          offset={-100}
          duration={700}
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          spy={true}
          to="about"
          smooth={true}
          offset={-230}
          duration={700}
          className="desktopMenuListItem"
        >
          About
        </Link>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={700}
          to="contact"
          className="desktopMenuListItem"
        >
          Contact
        </Link>
        <Link to="#" className="desktopMenuListItem">
          Projects
        </Link>
      </div>
      <a
        href="src/assets/resume/Sinchana's Resume F"
        download="Sinchana's resume.pdf"
        target="_blank"
      >
        <button className="desktopMenuBtn">
          <img src={contact} alt="" className="desktopMenuImg" />
          Resume
        </button>
      </a>
    </nav>
  );
};
export default Navbar;
