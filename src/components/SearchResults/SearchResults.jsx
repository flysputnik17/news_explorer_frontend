import "./SearchResults.css";
import NewsCard from "../NewsCard/NewsCard";

const SearchResults = ({ isLoggedIn }) => {
  return (
    <>
      <div className="searchResult">
        <h2 className="searchResult__title">Search results</h2>
        <section className="searchResult__section">
          <ul className="searchResult__cards">
            <NewsCard isLoggedIn={isLoggedIn} />
            <NewsCard isLoggedIn={isLoggedIn} />
            <NewsCard isLoggedIn={isLoggedIn} />
          </ul>
          <button type="button" className="searchResult__section-button">
            Show more
          </button>
        </section>
      </div>
    </>
  );
};
export default SearchResults;
