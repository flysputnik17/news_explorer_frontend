import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import Preloader from "../Preloader/Preloader";

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
  loading,
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
      {loading ? <Preloader /> : <></>}
      <About />
    </main>
  );
};

export default Main;
