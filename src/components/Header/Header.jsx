// import { Link } from "react-router-dom";
import "./Header.css";

function Header({ isLoggedIn }) {
  return (
    <header className="header">
      <div className="header__content">
        {/* <Link to="/">
          
        </Link> */}
        <h1 className="header__title">NewsExplorer</h1>

        {isLoggedIn ? (
          <>
            <div className="header__buttons">
              <button className="header__buttons-homeButton" type="button">
                Home
              </button>
              <button className="header__buttons-articals" type="button">
                Saved articles
              </button>
              <button className="header__buttons-elise" type="button">
                Elise
              </button>
              <img
                src="../../images/logout.svg"
                className="header__buttons-elise-image"
                alt="img"
              />
            </div>
          </>
        ) : (
          <>
            <div className="header__buttons">
              <button className="header__buttons-homeButton" type="button">
                Home
              </button>
              <button
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
}

export default Header;
