import { Link } from "react-router-dom";
import './navbar.css';

export default function Navbar() {
  return (
    <nav className="h-screen justify-center flex flex-col">
      <ul>
        <li className="hover__Item">
          <Link to="/">
            Home
            <span className="hover__Content"></span>
          </Link>
        </li>

        <li className="hover__Item">
          <Link to="/about">
            About
          </Link>
        </li>

        <li className="hover__Item">
          <Link to="/works">
            Works
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
  )
}