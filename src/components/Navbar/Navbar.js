import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-dark-blue light-gray">
      <div className="navbar-content">
        <Link className="light-gray" to="/projects">
          <h1 className="title">
            <span className="full-name">Jeremiah Schmutz</span>
            <span className="short-name">JWSchmutz</span>
          </h1>
        </Link>
        <div className="links light-gray">
          <Link className="light-gray nav-link" to="/projects">
            Projects
          </Link>
          <span className="tiny-only">|</span>
          <Link className="light-gray nav-link" to="/about">
            About
          </Link>
          <span className="tiny-only">|</span>
          <Link className="light-gray nav-link" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
