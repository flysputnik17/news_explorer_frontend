import "./SavedNews.css";
import NewsCardList from "../NewsCardList/NewsCardList";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import SavedArticles from "../../contexts/SavedArticles";

const SavedNews = ({ handleDeleteArticle }) => {
  const currentUser = useContext(CurrentUserContext);
  const savedArticles = useContext(SavedArticles);

  return (
    <div className="saved">
      <div className="saved__title">
        <h2 className="saved__articals">Saved articles</h2>
        <h3 className="saved__username">
          {currentUser.username}, you have {savedArticles.length} saved articles
        </h3>
        {savedArticles.length > 2 ? (
          <h4 className="saved__cate">
            By keywords: {savedArticles[0].keyword}, {savedArticles[1].keyword},
            and {savedArticles.length - 2} other
          </h4>
        ) : (
          <></>
        )}
      </div>
      {savedArticles.length > 0 ? (
        <NewsCardList handleDeleteArticle={handleDeleteArticle} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default SavedNews;
