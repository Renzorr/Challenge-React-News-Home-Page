import logo from "../assets/images/logo.svg";
import menu from "../assets/images/icon-menu.svg";
import closeMenu from "../assets/images/icon-menu-close.svg";
import { useState } from "react";

function Header() {
  const [open, setOpen] = useState("nav");

  const navToggle = () => {
    open === "nav" ? setOpen("nav active") : setOpen("nav");
  };

  return (
    <header className="container header">
      <a href="./">
        <img src={logo} alt="home logo" className="logo" />
      </a>
      <nav className={open}>
        <ul className="header_items">
          <button onClick={navToggle} className="close">
            <img src={closeMenu} alt="close menu icon" />
          </button>
          <li>
            <a href="./" className="header_item">
              Home
            </a>
          </li>
          <li>
            <a href="./" className="header_item">
              New
            </a>
          </li>
          <li>
            <a href="./" className="header_item">
              Popular
            </a>
          </li>
          <li>
            <a href="./" className="header_item">
              Trending
            </a>
          </li>
          <li>
            <a href="./" className="header_item">
              Categories
            </a>
          </li>
        </ul>
      </nav>
      <button onClick={navToggle} className="menu">
        <img src={menu} alt="icon menu" />
      </button>
    </header>
  );
}

export default Header;
