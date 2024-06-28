import { useState } from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

const NewsCardList = ({ isLoggedIn, newsData, emptySearch }) => {
  const [visibleCardsCount, setVisibleCardsCount] = useState(3);

  const handleShowMore = () => {
    setVisibleCardsCount((prevCount) => prevCount + 3);
  };

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
              {newsData.slice(0, visibleCardsCount).map((news, index) => (
                <NewsCard key={index} isLoggedIn={isLoggedIn} news={news} />
              ))}
            </ul>
            {visibleCardsCount < newsData.length && (
              <button
                type="button"
                className="searchResult__section-button"
                onClick={handleShowMore}
              >
                Show more
              </button>
            )}
          </section>
        </div>
      )}
    </>
  );
};

export default NewsCardList;
