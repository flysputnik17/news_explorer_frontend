import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import SavedNews from "../SavedNews/SavedNews";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [mainRoute, setMainRoute] = useState(true);

  const homeButtonClick = () => {
    if (mainRoute === true) {
      return;
    } else {
      setMainRoute(true);
    }
  };

  const logoButtonClick = () => {
    if (mainRoute === true) {
      return;
    } else {
      setMainRoute(true);
    }
  };
  const savedNewsClick = () => {
    if (mainRoute === true) {
      setMainRoute(false);
    } else {
      return;
    }
  };

  return (
    <div className="page">
      <div className="page__upper-content">
        <Header
          isLoggedIn={isLoggedIn}
          mainRoute={mainRoute}
          homeButtonClick={homeButtonClick}
          logoButtonClick={logoButtonClick}
          savedNewsClick={savedNewsClick}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={<Main isLoggedIn={isLoggedIn} />}
          ></Route>
          <Route exact path="/saved-news" element={<SavedNews />}></Route>
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
