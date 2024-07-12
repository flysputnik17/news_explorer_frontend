import { useContext } from "react";
import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import Preloader from "../Preloader/Preloader";
import LoadingContext from "../../contexts/LoadingContext";

const Main = ({
  handleNewsSearch,
  searchClicked,
  handleSaveArticle,
  handleDeleteArticle,
  savedArticles,
}) => {
  const loading = useContext(LoadingContext);
  return (
    <main className="main">
      <SearchForm
        handleNewsSearch={handleNewsSearch}
        searchClicked={searchClicked}
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
