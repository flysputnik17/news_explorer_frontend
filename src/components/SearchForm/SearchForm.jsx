import { useState, useContext } from "react";
import NewsCardList from "../NewsCardList/NewsCardList";
import "./SearchForm.css";
import LoadingContext from "../../contexts/LoadingContext";

const SearchForm = ({
  handleNewsSearch,
  searchClicked,
  handleSaveArticle,
  handleDeleteArticle,
  savedArticles,
}) => {
  const [keyWord, setKeyWord] = useState("");

  const loading = useContext(LoadingContext);

  const newsInput = (e) => {
    setKeyWord(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    handleNewsSearch(keyWord);
  };

  return (
    <div className="search">
      <div className="search__text">
        <h1 className="search__text-title">What's going on in the world?</h1>
        <p className="search__text-paragraph">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
      </div>
      <form className="search__searchBar">
        <label htmlFor="topic" className="search__searchBar-label"></label>
        <input
          type="text"
          className="search__searchBar-input"
          placeholder="Enter topic"
          onChange={newsInput}
          name="keyWord"
          id="keyWord"
        ></input>
        <button
          type="button"
          className={`${"search__searchBar-button"} ${
            loading ? "search__searchBar-button-click" : ""
          } `}
          onClick={submitSearch}
        >
          Search
        </button>
      </form>
      {searchClicked ? (
        <NewsCardList
          handleSaveArticle={handleSaveArticle}
          handleDeleteArticle={handleDeleteArticle}
          savedArticles={savedArticles}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default SearchForm;
