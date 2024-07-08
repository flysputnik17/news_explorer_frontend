import "./SavedNews.css";
import NewsCardList from "../NewsCardList/NewsCardList";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const SavedNews = ({
  isLoggedIn,
  newsData,
  mainRoute,
  keywords,
  handleDeleteArticle,
  savedArticles,
  currKeyword,
}) => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="saved">
      <div className="saved__title">
        <h2 className="saved__articals">Saved articles</h2>
        <h3 className="saved__username">
          {currentUser.name}, you have {savedArticles.length} saved articles
        </h3>
        {savedArticles.length > 1 ? (
          <h4 className="saved__cate">
            By keywords: {keywords[0]}, {keywords[1]}, and {keywords.length - 1}{" "}
            other
          </h4>
        ) : (
          <></>
        )}
      </div>
      {savedArticles.length > 0 ? (
        <NewsCardList
          isLoggedIn={isLoggedIn}
          newsData={newsData}
          mainRoute={mainRoute}
          savedArticles={savedArticles}
          handleDeleteArticle={handleDeleteArticle}
          currKeyword={currKeyword}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default SavedNews;
