import React from "react";
import "./Header.scss";

const Header = () => (
  <header className="header">
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <a href="#who-i-am">Quem eu sou?</a>
        </li>
        <li className="nav-item">
          <a href="#experiences">Experiências</a>
        </li>
        <li className="nav-item">
          <a href="#education">Formação Acadêmica</a>
        </li>
        <li className="nav-item">
          <a href="#skills">Habilidades</a>
        </li>
        <li className="nav-item">
          <a href="#mission">Missão</a>
        </li>
        <li className="nav-item">
          <a href="#contacts">Contatos</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
