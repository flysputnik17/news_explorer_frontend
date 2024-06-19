import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "../About/About";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="page">
      <div className="page__upper-content">
        <Header isLoggedIn={isLoggedIn} />
        <Main isLoggedIn={isLoggedIn} />
      </div>
      <About />
      <Footer />
    </div>
  );
}

export default App;
