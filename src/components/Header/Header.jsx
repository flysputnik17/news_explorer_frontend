// import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ isLoggedIn }) => {
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
              <div className="header__elise">
                <p className="header__elise-title">Elise</p>
                <button className="header__elise-button" type="button"></button>
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
