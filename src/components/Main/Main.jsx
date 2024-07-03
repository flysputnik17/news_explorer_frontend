import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";

const Main = ({
  isLoggedIn,
  handleNewsSearch,
  newsData,
  searchClicked,
  emptySearch,
  mainRoute,
  handleSaveArticle,
  handleDeleteArticle,
  savedArticles,
}) => {
  return (
    <main className="main">
      <SearchForm
        handleNewsSearch={handleNewsSearch}
        searchClicked={searchClicked}
        isLoggedIn={isLoggedIn}
        newsData={newsData}
        emptySearch={emptySearch}
        mainRoute={mainRoute}
        handleSaveArticle={handleSaveArticle}
        handleDeleteArticle={handleDeleteArticle}
        savedArticles={savedArticles}
      />
      <About />
    </main>
  );
};

export default Main;
