import "./Search.css";

const SearchSection = () => {
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
        ></input>
        <button type="button" className="search__searchBar-button">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchSection;
