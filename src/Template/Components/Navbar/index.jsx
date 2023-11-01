import { useState } from "react";
import { Link } from "react-router-dom";
import './navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="sm:fixed md:h-screen justify-center flex md:flex-col px-10">
      <button
        className="md:hidden text-white p-2"
        onClick={toggleMenu}
      >
        {menuOpen ? "Close" : "Menu"}
      </button>
      <ul className={`${menuOpen ? "block" : "hidden"} md:block space-y-4`}>
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
