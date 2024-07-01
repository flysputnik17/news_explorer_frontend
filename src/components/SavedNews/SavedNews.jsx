import "./SavedNews.css";
import NewsCardList from "../NewsCardList/NewsCardList";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const SavedNews = ({ isLoggedIn, newsData, mainRoute }) => {
  const currentUser = useContext(CurrentUserContext);
  return (
    <div className="saved">
      <div className="saved__title">
        <h2 className="saved__articals">Saved articles</h2>
        <h3 className="saved__username">
          {currentUser.name}, you have 5 saved articles
        </h3>
        <h4 className="saved__cate">
          {currentUser.name}, you have 5 saved articles
        </h4>
      </div>
      <NewsCardList
        isLoggedIn={isLoggedIn}
        newsData={newsData}
        mainRoute={mainRoute}
      />
    </div>
  );
};

export default SavedNews;
