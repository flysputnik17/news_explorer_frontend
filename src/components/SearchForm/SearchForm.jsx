import { useState } from "react";
import PropTypes from "prop-types";
import NewsCardList from "../NewsCardList/NewsCardList";
import "./SearchForm.css";

const SearchForm = ({
  isLoggedIn,
  handleNewsSearch,
  newsData,
  searchClicked,
  emptySearch,
}) => {
  const [keyWord, setKeyWord] = useState("");

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
        <h2 className="search__text-title">
          What's going on in
          <br /> the world?
        </h2>
        <p className="search__text-paragraph">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
      </div>
      <div className="search__searchBar">
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
          className="search__searchBar-button"
          onClick={submitSearch}
        >
          Search
        </button>
      </div>
      {searchClicked ? (
        <NewsCardList
          isLoggedIn={isLoggedIn}
          newsData={newsData}
          emptySearch={emptySearch}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

SearchForm.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  newsData: PropTypes.array.isRequired,
  handleNewsSearch: PropTypes.func.isRequired,
  searchClicked: PropTypes.bool.isRequired,
  emptySearch: PropTypes.bool.isRequired,
};

export default SearchForm;
