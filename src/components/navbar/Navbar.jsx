import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodepen,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  //testing
  const user = true;
  return (
    <div className="nav">
      <div className="nav--left">
        <FontAwesomeIcon className="social--icons" icon={faGithub} />
        <FontAwesomeIcon className="social--icons" icon={faLinkedin} />
        <FontAwesomeIcon className="social--icons" icon={faCodepen} />
        <FontAwesomeIcon className="social--icons" icon={faInstagram} />
      </div>

      <div className="nav--center">
        <ul className="nav--list">
          <li className="nav--item">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>

          <li className="nav--item">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>

          <li className="nav--item">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>

          <li className="nav--item">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>

          <li className="nav--item">
            <Link className="link" to="/">
              {user && "LOGOUT"}
            </Link>
          </li>
        </ul>
      </div>
      <div className="nav--right">
        {user ? (
          <img
            className="nav--img"
            src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?cs=srgb&dl=pexels-spencer-selover-775358.jpg&fm=jpg"
            alt=""
          />
        ) : (
          <ul className="nav--list">
            <li className="nav--item">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="nav--item">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <FontAwesomeIcon className="search--icon" icon={faSearch} />
      </div>
    </div>
  );
};

export default Navbar;
