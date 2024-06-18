import "./Main.css";

function Main({ isLoggedIn }) {
  return (
    <main className="main">
      {isLoggedIn ? (
        <></>
      ) : (
        <>
          <div className="main__unsinged">
            <div className="main__unsinged-text">
              <h2 className="main__unsinged-title">
                What's going on in the world?
              </h2>
              <p className="main__unsinged-paragraph">
                Find the latest news on any topic and save them in your personal
                account.
              </p>
            </div>
            <div className="main__unsinged-searchBar">
              <input
                type="text"
                className="main__unsinged-searchBar-input"
                placeholder="Enter topic"
              ></input>
              <button type="button" className="main__unsinged-searchBar-button">
                Search
              </button>
            </div>
          </div>
        </>
      )}
    </main>
  );
}

export default Main;
