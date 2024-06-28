import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";

const Main = ({
  isLoggedIn,
  handleNewsSearch,
  newsData,
  searchClicked,
  emptySearch,
}) => {
  return (
    <main className="main">
      <SearchForm
        handleNewsSearch={handleNewsSearch}
        searchClicked={searchClicked}
        isLoggedIn={isLoggedIn}
        newsData={newsData}
        emptySearch={emptySearch}
      />
      <About />
    </main>
  );
};

export default Main;
