import "./SavedNews.css";
import NewsCardList from "../NewsCardList/NewsCardList";

const SavedNews = ({ isLoggedIn, newsData, mainRoute }) => {
  return (
    <div className="saved">
      <div className="saved__title">
        <h2 className="saved__articals">Saved articles</h2>
        <h3 className="saved__username">Elise, you have 5 saved articles</h3>
        <h4 className="saved__cate">Elise, you have 5 saved articles</h4>
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
