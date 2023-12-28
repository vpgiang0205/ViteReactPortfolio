import { Link } from "react-router-dom";
import './navbar.css';

export default function Navbar() {
  return (
    <nav className={`navList  `}>
      <ul className={`md:flex md:h-screen justify-center flex-col`}>

        <li className="hover__Item">
          <Link to="/">
            About
          </Link>
        </li>

        <li className="hover__Item">
          <Link to="/works">
            Projects
          </Link>
        </li>

        <li className="hover__Item">
          <Link to="/skills">
            Skills
          </Link>
        </li>

        <li className="hover__Item">
          <Link to="/contact">
            Contact
          </Link>
        </li>
      </ul>

    </nav>
  );
}
