import React from "react";
import "./Main.scss";
import profilePhoto from "../../assets/imgs/profile-photo.png";
import dev from "../../assets/imgs/dev.svg";

const Main = () => (
  <div className="container">
    <div className="left-section">
      <img src={profilePhoto} alt="Profile" className="profile-photo" />
    </div>
    <div className="right-section">
      <img src={dev} alt="dev" className="dev-image" />
      <h2>Olá, eu sou Wellinton, também conhecido como dev Camboim</h2>
      <p className="text">
        Sou desenvolvedor full-stack com mais de 6 anos de experiência,
        especialmente no setor de soluções financeiras.
      </p>
    </div>
  </div>
);

export default Main;
