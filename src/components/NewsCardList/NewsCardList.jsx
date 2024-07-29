import { useState, useContext } from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import MainRouteContext from "../../contexts/MainRouteContext";
import NewsDataContext from "../../contexts/NewsDataContext";
import EmptySearchContext from "../../contexts/EmptySearchContext";
import SavedArticles from "../../contexts/SavedArticles";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const NewsCardList = ({ handleSaveArticle, handleDeleteArticle, keywords }) => {
  const mainRoute = useContext(MainRouteContext);
  const newsData = useContext(NewsDataContext);
  const emptySearch = useContext(EmptySearchContext);
  const savedArticles = useContext(SavedArticles);
  const currentUser = useContext(CurrentUserContext);
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
          {mainRoute ? (
            <>
              <h2 className="searchResult__title">Search results</h2>
              <div className="searchResult__section">
                {newsData.slice(0, visibleCardsCount).map((news, index) => (
                  <NewsCard
                    key={index}
                    news={news}
                    handleSaveArticle={handleSaveArticle}
                    handleDeleteArticle={handleDeleteArticle}
                    isSaved={savedArticles.some(
                      (savedArticle) => savedArticle.title === news.title
                    )}
                  />
                ))}
              </div>
              {visibleCardsCount < newsData.length && (
                <button
                  type="button"
                  className="searchResult__section-button"
                  onClick={handleShowMore}
                >
                  Show more
                </button>
              )}
            </>
          ) : (
            <>
              <div className="searchResult__section">
                {savedArticles.map((news) => {
                  const isOwn = news.owner === currentUser._id;
                  if (isOwn) {
                    return (
                      <NewsCard
                        key={news._id}
                        news={news}
                        handleDeleteArticle={handleDeleteArticle}
                        keywords={keywords}
                      />
                    );
                  } else {
                    return null;
                  }
                })}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default NewsCardList;
