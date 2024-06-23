import "./Main.css";
import SearchSection from "../SearchForm/SearchForm";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";

const Main = ({ isLoggedIn }) => {
  return (
    <main className="main">
      {isLoggedIn ? (
        <>
          <SearchSection />
          <NewsCardList isLoggedIn={isLoggedIn} />
          <About />
        </>
      ) : (
        <>
          <SearchSection />
          <NewsCardList isLoggedIn={isLoggedIn} />
          <About />
        </>
      )}
    </main>
  );
};

export default Main;
