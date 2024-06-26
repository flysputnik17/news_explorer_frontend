import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";

const Main = ({ isLoggedIn, handleNewsSearch }) => {
  return (
    <main className="main">
      {isLoggedIn ? (
        <>
          <SearchForm handleNewsSearch={handleNewsSearch} />
          <NewsCardList isLoggedIn={isLoggedIn} />
          <About />
        </>
      ) : (
        <>
          <SearchForm handleNewsSearch={handleNewsSearch} />
          <NewsCardList isLoggedIn={isLoggedIn} />
          <About />
        </>
      )}
    </main>
  );
};

export default Main;
