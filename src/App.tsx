import React from "react";
import Header from "./pages/Header/Header";
import Main from "./pages/Main/Main";
import Experience from "./pages/Experience/ExperienceList";
import "./App.scss";

const App: React.FC = () => (
  <div className="App">
    <Header />
    <Main />
    <Experience />
  </div>
);

export default App;
