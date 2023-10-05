import Logo from "../..//assets/logo4.png";
import "./Navbar.css";
import { FaStream } from "react-icons/fa";
import { useState } from "react";
function Navbar() {
  const [ShowMenu, setShowMenu] = useState<boolean>(false);
  return (
    <div>
      <div className="navbar">
        <nav className="nav container">
          <a href="#home" className="logo">
            <img src={Logo} alt="" />
          </a>
          <div className={`${ShowMenu ? "show-menu" : "menu"}`}>
            <ul className="list">
              <li className="nav-link">
                <a href="#home">Home</a>
              </li>
              <li className="nav-link">
                <a href="#about">About</a>
              </li>
              <li className="nav-link">
                <a href="#features">Features</a>
              </li>
              <li className="nav-link">
                <a href="#menu">Menu</a>
              </li>
              <li className="nav-link">
                <a href="#gallery">Gallery</a>
              </li>
              <li className="nav-link">
                <a href="#Testinomials">Testinomials</a>
              </li>
            </ul>
          </div>
          <div className="nav-toggle" onClick={() => setShowMenu(!ShowMenu)}>
            <FaStream />
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
