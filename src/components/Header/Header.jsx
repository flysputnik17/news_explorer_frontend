import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Header.css";
import { useContext } from "react";
import MainRouteContext from "../../contexts/MainRouteContext";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import MenuOpenContext from "../../contexts/MenuOpenContext";
import IsLoggedInContext from "../../contexts/IsLoggedInContext";
import {
  headerStyle,
  headerStyleSaved,
  headerButtons,
  headerTitle,
  headerTitleBlack,
  headerLogut,
  headerLogutBlack,
  headerButtonHome,
  headerButtonHomeBlack,
  headerButtonHomeModWhite,
  headerButtonHomeModBlack,
} from "../../utils/constants";

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

  return (
    <header
      className={` ${mainRoute ? `${headerStyle}` : `${headerStyleSaved}`} ${
        isMenuOpen ? "header-open" : ""
      }`}
    >
      <div className="header__content">
        <Link
          to="/"
          className={`${
            mainRoute ? `${headerTitle}` : `${headerTitle} ${headerTitleBlack}`
          } ${isMenuOpen ? "header__saved-title-white " : ""}`}
          onClick={logoButtonClick}
        >
          NewsExplorer
        </Link>

        <div
          className={`${headerButtons} ${
            isMenuOpen ? "header__buttons--open" : ""
          }`}
        >
          <Link
            to="/"
            className={`${
              mainRoute
                ? `${headerButtonHome} ${headerButtonHomeModWhite}`
                : `${headerButtonHome} ${headerButtonHomeBlack}`
            } `}
            type="button"
            onClick={homeButtonClick}
          >
            Home
          </Link>
          {isLoggedIn ? (
            <>
              <Link
                to="/saved-news"
                className={`${
                  mainRoute
                    ? `${headerButtonHome} `
                    : `${headerButtonHome} ${headerButtonHomeBlack} ${headerButtonHomeModBlack}`
                } `}
                type="button"
                onClick={savedNewsClick}
              >
                Saved articles
              </Link>
              <div
                className={`${
                  mainRoute
                    ? `${headerLogut}`
                    : `${headerLogut} ${headerLogutBlack}`
                } ${isMenuOpen ? "header__saved-title-white " : ""}`}
              >
                <p className="header__logout-title">{currentUser.name}</p>
                <button
                  className={`${
                    mainRoute || isMenuOpen
                      ? "header__logout-button"
                      : "header__saved-logout-button"
                  }`}
                  type="button"
                  onClick={logout}
                ></button>
              </div>
            </>
          ) : (
            <>
              <button
                onClick={handleSignIn}
                className="header__unsigned-buttons-signInButton"
                type="button"
              >
                Sign in
              </button>
            </>
          )}
        </div>

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
