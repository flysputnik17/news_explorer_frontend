import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Header.css";
import { useContext } from "react";
import MainRouteContext from "../../contexts/MainRouteContext";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import MenuOpenContext from "../../contexts/MenuOpenContext";
import IsLoggedInContext from "../../contexts/IsLoggedInContext";

const Header = ({
  homeButtonClick,
  logoButtonClick,
  savedNewsClick,
  handleSignIn,
  logout,
  toggleMenu,
}) => {
  const mainRoute = useContext(MainRouteContext); //mainRoute context is for use the useEffect to change the buttons
  const isLoggedIn = useContext(IsLoggedInContext); //isLoggedIn context is for to detemin wich buttons to render its depandes on if the user is logged in or not
  const currentUser = useContext(CurrentUserContext); //currentUser context is for rendering the name of the user
  const isMenuOpen = useContext(MenuOpenContext); //isMenuOpen context is for to render the hamburger menu if the screen width is less then 490px

  const [headerStyle, setHeaderStyle] = useState("header");
  const [headerTitle, setHeaderTitle] = useState("header__title");
  const [headerButtons, setHeaderButtons] = useState("header__buttons");
  const [headerButtonHome, setHeaderButtonHome] = useState(
    "header__buttons-homeButton"
  );
  const [headerButtonArtical, setHeaderButtonArtical] = useState(
    "header__buttons-articals"
  );
  const [headerElise, setHeaderElise] = useState("header__elise");

  const [headerEliseButton, setHeaderEliseButton] = useState(
    "header__elise-button"
  );

  useEffect(() => {
    if (mainRoute === false) {
      setHeaderStyle("header__saved");
      setHeaderTitle("header__saved-title");
      setHeaderButtons("header__saved-buttons");
      setHeaderButtonHome("header__saved-buttons-homeButton");
      setHeaderButtonArtical("header__saved-buttons-articals");
      setHeaderElise("header__saved-elise");
      setHeaderEliseButton("header__saved-elise-button");
    } else {
      setHeaderStyle("header");
      setHeaderTitle("header__title");
      setHeaderButtons("header__buttons");
      setHeaderButtonHome("header__buttons-homeButton");
      setHeaderButtonArtical("header__buttons-articals");
      setHeaderElise("header__elise");
      setHeaderEliseButton("header__elise-button");
    }
  }, [mainRoute]);

  return (
    <header className={` ${headerStyle} ${isMenuOpen ? "header-open" : ""}`}>
      <div className="header__content">
        <Link
          to="/"
          className={`${headerTitle} ${
            isMenuOpen ? "header__saved-title-white " : ""
          }`}
          onClick={logoButtonClick}
        >
          NewsExplorer
        </Link>

        {isLoggedIn ? (
          <>
            <div
              className={`${headerButtons} ${
                isMenuOpen ? "header__buttons--open" : ""
              }`}
            >
              <Link
                to="/"
                className={headerButtonHome}
                type="button"
                onClick={homeButtonClick}
              >
                Home
              </Link>
              <Link
                to="/saved-news"
                className={headerButtonArtical}
                type="button"
                onClick={savedNewsClick}
              >
                Saved articles
              </Link>
              <div className={headerElise}>
                <p className="header__elise-title">{currentUser.name}</p>
                <button
                  className={`${
                    mainRoute || isMenuOpen
                      ? "header__elise-button"
                      : "header__saved-elise-button"
                  }`}
                  type="button"
                  onClick={logout}
                ></button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div
              className={`${headerButtons} ${
                isMenuOpen ? "header__buttons--open" : ""
              }`}
            >
              <button className={headerButtonHome} type="button">
                Home
              </button>
              <button
                onClick={handleSignIn}
                className="header__unsigned-buttons-signInButton"
                type="button"
              >
                Sign in
              </button>
            </div>
          </>
        )}
        <button
          className={`${
            mainRoute || isMenuOpen
              ? "header__menu-button"
              : "header__menu-button-black"
          }`}
          onClick={toggleMenu}
        ></button>
      </div>
    </header>
  );
};

export default Header;
