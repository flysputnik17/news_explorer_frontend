import "./SavedNews.css";
import NewsCardList from "../NewsCardList/NewsCardList";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const SavedNews = ({ isLoggedIn, newsData, mainRoute, keywords }) => {
  const currentUser = useContext(CurrentUserContext);
  // const [savedArticles, setSavedArticles] = useState(0);
  const savedArticles = keywords.length;

  return (
    <div className="saved">
      <div className="saved__title">
        <h2 className="saved__articals">Saved articles</h2>
        <h3 className="saved__username">
          {currentUser.name}, you have {savedArticles} saved articles
        </h3>
        {keywords.length > 0 ? (
          <h4 className="saved__cate">
            By keywords: {keywords}, and {keywords.length} other
          </h4>
        ) : (
          <></>
        )}
      </div>
      {savedArticles > 0 ? (
        <NewsCardList
          isLoggedIn={isLoggedIn}
          newsData={newsData}
          mainRoute={mainRoute}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default SavedNews;
