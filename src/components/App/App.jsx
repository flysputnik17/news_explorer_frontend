/////////////////////////////////////////////////React Imports/////////////////////////////////////////////////
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
///////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////Context Imports////////////////////////////////////
import CurrentUserContext from "../../contexts/CurrentUserContext";
import MenuOpenContext from "../../contexts/MenuOpenContext";
import IsLoggedInContext from "../../contexts/IsLoggedInContext";
import MainRouteContext from "../../contexts/MainRouteContext";
import NewsDataContext from "../../contexts/NewsDataContext";
import LoadingContext from "../../contexts/LoadingContext";
import EmptySearchContext from "../../contexts/EmptySearchContext";
import CurrentKeyWordContext from "../../contexts/CurrentKeyWordContext";
////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////React Components Imports/////////////////////////////////
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SignupPopup from "../SignupPopup/SignupPopup";
import SigninPopup from "../SigninPopup/SigninPopup";
import ConfirmationPopup from "../ConfirmationPopup/ConfirmationPopup";
import SavedNews from "../SavedNews/SavedNews";
/////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////API Imports/////////////////////////////////////////
import { getSearchResults } from "../../utils/ThirdPartyApi";
import Auth from "../../utils/auth";
import Api from "../../utils/api";
////////////////////////////////////////////////////////////////////////////////////////////////

const auth = new Auth({ headers: { "Content-Type": "application/json" } });
const api = new Api({
  headers: { "Content-Type": "application/json" },
});
function App() {
  /////////////////////////////////////////////////////////////////////////////////////////
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mainRoute, setMainRoute] = useState(true);
  const [activeModal, setActiveModal] = useState("");
  const [newsData, setNewsData] = useState([]);
  const [searchClicked, setSearchClicked] = useState(false);
  const [emptySearch, setEmptySearch] = useState(true);
  const [keywords, setKeywords] = useState([]);
  const [currKeyword, setCurrKeyword] = useState("");
  const [savedArticles, setSavedArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 514);
  const [currentUser, setCurrentUser] = useState({
    username: "",
    _id: "",
    token: "",
  });
  //////////////////////////////////////////////////////////////////////////////////////////////

  ////////////////////////////////////////Hooks/////////////////////////////////////////////

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

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      checkloggedIn(jwt);
    }
  }, []);
  useEffect(() => {
    api
      .getArticles()
      .then((res) => {
        setSavedArticles(res);
      })
      .catch(console.error);
  }, []);

  /////////////////////////////////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////PopUP functions/////////////////////////////
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
  /////////////////////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////User reg and login functions///////////////////////
  const handleRegistration = (data) => {
    console.log("click");
    console.log("data:", data);
    auth
      .register(data)
      .then(() => {
        setCurrentUser({
          email: data.email,
          password: data.password,
          username: data.username,
        });
        closeActiveModal();
        handleConfirm();
      })
      .catch(console.error);
  };

  const handleLogin = (data) => {
    auth
      .login(data)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setIsLoggedIn(true);
        setCurrentUser(data);
        closeActiveModal();
        return checkloggedIn();
      })
      .catch((err) => {
        console.error("Error in handleLogin", err);
      });
  };

  const handleSuccessRegistration = () => {
    handleLogin(currentUser);
    closeActiveModal();
  };

  const checkloggedIn = () => {
    const jwt = localStorage.getItem("jwt");
    return auth
      .getUserInfo(jwt)
      .then((res) => {
        setCurrentUser(res);
        setIsLoggedIn(true);
        closeActiveModal();
      })
      .catch((err) => {
        console.error("Error in checkloggedIn", err);
      });
  };
  const logout = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setMainRoute(true);
    navigate("/");
  };

  ///////////////////////////////////////////////////////////////////////////////////////////

  /////////////////////////////////////////Buttons fucnctions///////////////////////////////////
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

  /////////////////////////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////News Functions////////////////////////////////////////////
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

  //func to save articles
  const handleSaveArticle = (article, currKeyword) => {
    if (isLoggedIn) {
      setSavedArticles((prevArticles) => [...prevArticles, article]);
      setCurrKeyword(currKeyword);
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

  ////////////////////////////////////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////Hamburger Menu Function///////////////////////////
  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 514);
    if (window.innerWidth > 514) {
      setIsMenuOpen(false);
    }
  };
  const toggleMenu = () => {
    if (isSmallScreen) {
      console.log("click");
      setIsMenuOpen(!isMenuOpen);
    }
  };

  //////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <MainRouteContext.Provider value={mainRoute}>
      <IsLoggedInContext.Provider value={isLoggedIn}>
        <CurrentUserContext.Provider value={currentUser}>
          <MenuOpenContext.Provider value={isMenuOpen}>
            <CurrentKeyWordContext.Provider value={currKeyword}>
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
                          <LoadingContext.Provider value={loading}>
                            <EmptySearchContext.Provider value={emptySearch}>
                              <Main
                                handleNewsSearch={handleNewsSearch}
                                searchClicked={searchClicked}
                                handleSaveArticle={handleSaveArticle}
                                handleDeleteArticle={handleDeleteArticle}
                                savedArticles={savedArticles}
                              />
                            </EmptySearchContext.Provider>
                          </LoadingContext.Provider>
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
                    handleLogin={handleLogin}
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
            </CurrentKeyWordContext.Provider>
          </MenuOpenContext.Provider>
        </CurrentUserContext.Provider>
      </IsLoggedInContext.Provider>
    </MainRouteContext.Provider>
  );
}

export default App;
