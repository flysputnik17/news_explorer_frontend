import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Header.css";

const Header = ({
  isLoggedIn,
  mainRoute,
  homeButtonClick,
  logoButtonClick,
  savedNewsClick,
  handleSignIn,
  logout,
}) => {
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

  //now i need to make that if mainRoute is true the class of the heders will be change
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
    <header className={headerStyle}>
      <div className="header__content">
        <Link to="/" className={headerTitle} onClick={logoButtonClick}>
          NewsExplorer
        </Link>

        {isLoggedIn ? (
          <>
            <div className={headerButtons}>
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
                <p className="header__elise-title">Elise</p>
                <button
                  className={headerEliseButton}
                  type="button"
                  onClick={logout}
                ></button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="header__buttons">
              <button className="header__buttons-homeButton" type="button">
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
      </div>
    </header>
  );
};

export default Header;
