import PropTypes from "prop-types";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

const NewsCardList = ({ isLoggedIn, newsData, emptySearch }) => {
  return (
    <>
      {emptySearch ? (
        <div className="searchResult">
          <div className="searchResult__notfound-img"></div>
          <h2 className="searchResult__notfound-title">Nothing found</h2>
          <p className="searchResult__notfound">
            Sorry, but nothing matched
            <br /> your search terms.
          </p>
        </div>
      ) : (
        <div className="searchResult">
          <h2 className="searchResult__title">Search results</h2>
          <section className="searchResult__section">
            <ul className="searchResult__cards">
              {newsData.slice(0, 100).map((news, index) => (
                <li key={index}>
                  <NewsCard isLoggedIn={isLoggedIn} news={news} />
                </li>
              ))}
            </ul>
            <button type="button" className="searchResult__section-button">
              Show more
            </button>
          </section>
        </div>
      )}
    </>
  );
};

NewsCardList.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  newsData: PropTypes.array.isRequired,
  emptySearch: PropTypes.bool.isRequired,
};

export default NewsCardList;
