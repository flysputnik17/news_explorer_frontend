import { useEffect, useState } from "react";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";

import SavedNews from "../SavedNews/SavedNews";
import { APIkey, to, from, pageSize } from "../../utils/constants";
import { getSearchResults } from "../../utils/ThirdPartyApi";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SignupPopup from "../SignupPopup/SignupPopup";
import SigninPopup from "../SigninPopup/SigninPopup";
import ConfirmationPopup from "../ConfirmationPopup/ConfirmationPopup";

// const api = new Api({
//   baseUrl: "https://newsapi.org/v2",
//   headers: { "Content-Type": "application/json" },
// });

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mainRoute, setMainRoute] = useState(true);
  const [activeModal, setActiveModal] = useState("");
  const [newsData, setNewsData] = useState({
    source: "",
    title: "",
    publishedAt: "",
    description: "",
    urlToImage: "",
  });
  const navigate = useNavigate();

  //for closing modals with the Escape button
  useEffect(() => {
    if (!activeModal) return;
    const handleExit = (evt) => {
      if (evt.key === "Escape") {
        closeActiveModal();
      }
    };
    document.addEventListener("keydown", handleExit);
    return () => document.removeEventListener("keydown", handleExit);
  }, [activeModal]);

  //for closing modals with the click on the overly
  useEffect(() => {
    if (!activeModal) return;
    const handleOverly = (evt) => {
      if (evt.target.classList.contains("modal_opened")) {
        closeActiveModal();
      }
    };
    document.addEventListener("mousedown", handleOverly);
    return () => document.removeEventListener("mousedown", handleOverly);
  }, [activeModal]);

  const handleNewsSearch = (keyword) => {
    getSearchResults(keyword)
      .then((res) => {
        console.log("res:", res);
        const result = res.articles;

        result.source = res.articles[0].source.name;
        result.title = res.articles[0].title;
        result.publishedAt = res.articles[0].publishedAt;
        result.description = res.articles[0].description;
        result.urlToImage = res.articles[0].urlToImage;

        setNewsData(result);
      })
      .catch((err) => {
        console.log("error:", err);
      });
  };

  const handleSignUp = () => {
    setActiveModal("sign-up");
  };
  const handleSignIn = () => {
    setActiveModal("sign-in");
  };

  const handleConfirm = () => {
    setActiveModal("confirmation");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };
  const handleSignUpSuccess = () => {
    console.log("click");
    closeActiveModal();
    handleConfirm();
  };

  const handleSignupButton = () => {
    console.log("click");
    closeActiveModal();
    handleSignUp();
  };
  const handleSignInButton = (e) => {
    e.preventDefault();
    console.log("click");

    closeActiveModal();
    handleSignIn();
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

  const checkloggedIn = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    closeActiveModal();
  };
  const logout = () => {
    setIsLoggedIn(false);
    setMainRoute("");
    navigate("/");
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
          logout={logout}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Main
                isLoggedIn={isLoggedIn}
                newsData={newsData}
                handleNewsSearch={handleNewsSearch}
              />
            }
          ></Route>
          <Route
            exact
            path="/saved-news"
            element={<SavedNews isLoggedIn={isLoggedIn} newsData={newsData} />}
          ></Route>
        </Routes>
      </div>

      <Footer />
      {activeModal === "sign-up" && (
        <SignupPopup
          isOpen={activeModal === "sign-up"}
          onClose={closeActiveModal}
          handleSignInButton={handleSignInButton}
          handleSignUpSuccess={handleSignUpSuccess}
        />
      )}
      {activeModal === "sign-in" && (
        <SigninPopup
          isOpen={activeModal === "sign-in"}
          onClose={closeActiveModal}
          handleSignupButton={handleSignupButton}
          checkloggedIn={checkloggedIn}
        />
      )}
      {activeModal === "confirmation" && (
        <ConfirmationPopup
          isOpen={activeModal === "confirmation"}
          onClose={closeActiveModal}
          handleSignInButton={handleSignInButton}
        />
      )}
    </div>
  );
}

export default App;
