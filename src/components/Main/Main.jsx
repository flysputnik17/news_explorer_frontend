import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import Preloader from "../Preloader/Preloader";

const Main = ({
  handleNewsSearch,
  searchClicked,
  emptySearch,
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
        emptySearch={emptySearch}
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
