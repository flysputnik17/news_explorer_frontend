import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "../About/About";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="page">
      <div className="page__upper-content">
        <Header isLoggedIn={isLoggedIn} />
        <Routes>
          <Route
            exact
            path="/"
            element={<Main isLoggedIn={isLoggedIn} />}
          ></Route>
          {/* <Route exact path="/profile" element={}></Route> */}
        </Routes>
      </div>

      <About />
      <Footer />
    </div>
  );
}

export default App;
