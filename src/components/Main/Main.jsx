import "./Main.css";
import SearchSection from "../Search/Search";
import About from "../About/About";
import SearchResults from "../SearchResults/SearchResults";

const Main = ({ isLoggedIn }) => {
  return (
    <main className="main">
      {isLoggedIn ? (
        <>
          <SearchSection />
          <SearchResults isLoggedIn={isLoggedIn} />
          <About />
        </>
      ) : (
        <>
          <SearchSection />
          <SearchResults isLoggedIn={isLoggedIn} />
          <About />
        </>
      )}
    </main>
  );
};

export default Main;
