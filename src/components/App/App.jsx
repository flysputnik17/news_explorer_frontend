import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import SavedNews from "../SavedNews/SavedNews";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SignupPopup from "../SignupPopup/SignupPopup";
import SigninPopup from "../SigninPopup/SigninPopup";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mainRoute, setMainRoute] = useState(false);
  const [activeModal, setActiveModal] = useState("");

  const handleSignUp = () => {
    setActiveModal("sign-up");
  };
  const handleSignIn = () => {
    setActiveModal("sign-in");
  };

  const handleSignupButton = () => {
    closeActiveModal();
    handleSignUp();
  };
  const handleSignInButton = () => {
    closeActiveModal();
    handleSignIn();
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

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
          handleSignIn={handleSignIn}
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
      {activeModal === "sign-up" && (
        <SignupPopup
          isOpen={activeModal === "sign-up"}
          onClose={closeActiveModal}
          handleSignInButton={handleSignInButton}
        />
      )}
      {activeModal === "sign-in" && (
        <SigninPopup
          isOpen={activeModal === "sign-in"}
          onClose={closeActiveModal}
          handleSignupButton={handleSignupButton}
        />
      )}
    </div>
  );
}

export default App;
