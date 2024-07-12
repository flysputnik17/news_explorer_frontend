import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import CurrentUserContext from "../../contexts/CurrentUserContext";
import MenuOpenContext from "../../contexts/MenuOpenContext";
import IsLoggedInContext from "../../contexts/IsLoggedInContext";
import MainRouteContext from "../../contexts/MainRouteContext";
import NewsDataContext from "../../contexts/NewsDataContext";

import SavedNews from "../SavedNews/SavedNews";
import { getSearchResults } from "../../utils/ThirdPartyApi";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SignupPopup from "../SignupPopup/SignupPopup";
import SigninPopup from "../SigninPopup/SigninPopup";
import ConfirmationPopup from "../ConfirmationPopup/ConfirmationPopup";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mainRoute, setMainRoute] = useState(true);
  const [activeModal, setActiveModal] = useState("");
  const [newsData, setNewsData] = useState([]);
  const [searchClicked, setSearchClicked] = useState(false);
  const [emptySearch, setEmptySearch] = useState(true);
  const [currentUser, setCurrentUser] = useState({
    name: "",
    _id: "",
    token: "",
  });
  const [keywords, setKeywords] = useState([]);
  const [currKeyword, setCurrKeyword] = useState("");
  const [savedArticles, setSavedArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  /////////////////////////////////////////////////////////////////////////////
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 490);

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 490);
    if (window.innerWidth > 490) {
      setIsMenuOpen(false);
    }
  };
  const toggleMenu = () => {
    if (isSmallScreen) {
      console.log("click");
      setIsMenuOpen(!isMenuOpen);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  ///////////////////////////////////////////////////////////////////////////
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

  //if there is no keyword the emprySearch will be ture so the Nothing found will render
  //if there is a keyword the newsCardList will be render with the the data from the get req
  const handleNewsSearch = (keyword) => {
    setSearchClicked(true);
    setLoading(true);
    if (keyword === "") {
      setEmptySearch(true);
      setLoading(false);
    } else {
      setKeywords((prevKeyword) => [...prevKeyword, keyword]);
      setEmptySearch(false);
      setNewsData([]);
      getSearchResults(keyword)
        .then((res) => {
          setNewsData(res.articles);
          setCurrKeyword(keyword);
          console.log("res:", res);
        })
        .catch((err) => {
          console.log("error:", err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const signUpPopup = () => {
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

  const handleRegistration = (data) => {
    console.log("click");
    console.log("data:", data);
    setCurrentUser({ name: data.username, password: data.password });
    console.log("currentUser:", currentUser);
    closeActiveModal();
    handleConfirm();
  };

  const handleSuccessRegistration = () => {
    setIsLoggedIn(true);
    setMainRoute(false);
    navigate("/saved-news");
    closeActiveModal();
  };

  const handleSignupButton = () => {
    closeActiveModal();
    signUpPopup();
  };
  const handleSignInButton = (e) => {
    e.preventDefault();
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
    setMainRoute(true);
    navigate("/");
  };

  //func to save articles
  const handleSaveArticle = (article) => {
    if (isLoggedIn) {
      setSavedArticles((prevArticles) => [...prevArticles, article]);
    } else {
      return;
    }
  };

  //func to unsave title
  const handleDeleteArticle = (article) => {
    if (isLoggedIn) {
      setSavedArticles((prevArticles) =>
        prevArticles.filter(
          (savedArticle) => savedArticle.title !== article.title
        )
      );
      setKeywords((prevKeyword) =>
        prevKeyword.filter((keyword) => keyword !== article.keyword)
      );
    } else {
      return;
    }
  };

  return (
    <MainRouteContext.Provider value={mainRoute}>
      <IsLoggedInContext.Provider value={isLoggedIn}>
        <CurrentUserContext.Provider value={currentUser}>
          <MenuOpenContext.Provider value={isMenuOpen}>
            <div className="page">
              <div className="page__upper-content">
                <Header
                  homeButtonClick={homeButtonClick}
                  logoButtonClick={logoButtonClick}
                  savedNewsClick={savedNewsClick}
                  handleSignIn={handleSignIn}
                  logout={logout}
                  toggleMenu={toggleMenu}
                />
                <NewsDataContext.Provider value={newsData}>
                  <Routes>
                    <Route
                      exact
                      path="/"
                      element={
                        <Main
                          handleNewsSearch={handleNewsSearch}
                          searchClicked={searchClicked}
                          emptySearch={emptySearch}
                          handleSaveArticle={handleSaveArticle}
                          handleDeleteArticle={handleDeleteArticle}
                          savedArticles={savedArticles}
                          loading={loading}
                        />
                      }
                    ></Route>
                    <Route
                      exact
                      path="/saved-news"
                      element={
                        <SavedNews
                          keywords={keywords}
                          handleDeleteArticle={handleDeleteArticle}
                          savedArticles={savedArticles}
                          currKeyword={currKeyword}
                        />
                      }
                    ></Route>
                  </Routes>
                </NewsDataContext.Provider>
              </div>

              <Footer homeButtonClick={homeButtonClick} />
              {activeModal === "sign-up" && (
                <SignupPopup
                  isOpen={activeModal === "sign-up"}
                  onClose={closeActiveModal}
                  handleSignInButton={handleSignInButton}
                  handleRegistration={handleRegistration}
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
                  handleSuccessRegistration={handleSuccessRegistration}
                />
              )}
            </div>
          </MenuOpenContext.Provider>
        </CurrentUserContext.Provider>
      </IsLoggedInContext.Provider>
    </MainRouteContext.Provider>
  );
}

export default App;
