import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "../About/About";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="page">
      <div className="page__upper-content">
        <Header isLoggedIn={isLoggedIn} />
        <Main isLoggedIn={isLoggedIn} />
        {/* <Routes>
          <Route exact path="/"></Route>
        </Routes> */}
      </div>
      <About />
    </div>
  );
}

export default App;
