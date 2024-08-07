import { useState, useContext } from "react";
import IsLoggedInContext from "../../contexts/IsLoggedInContext";
import "./NewsCard.css";
import MainRouteContext from "../../contexts/MainRouteContext";
import CurrentKeyWordContext from "../../contexts/CurrentKeyWordContext";

const NewsCard = ({
  news,
  handleSaveArticle,
  handleDeleteArticle,
  isSaved,
  handleUnsaveArticle,
}) => {
  const isLoggedIn = useContext(IsLoggedInContext);
  const mainRoute = useContext(MainRouteContext);
  const currKeyword = useContext(CurrentKeyWordContext);
  const handleDateConversion = (date) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    return new Date(date).toLocaleDateString("en-US", options);
  };

  const [saveArticalClass, setSaveArticalClass] = useState(
    "newsCard__saveBlock-hidden"
  );
  const [deleteArticalClass, setDeleteArticalClass] = useState(
    "newsCard__deleteBlock-hidden"
  );

  const [likedCard, setLikedCard] = useState("newsCard__saveButton");
  const handleLikedCard = () => {
    if (isLoggedIn === false) {
      return;
    } else if (isLoggedIn && likedCard === "newsCard__saveButton") {
      setLikedCard("newsCard__saveButton-liked");
    } else {
      setLikedCard("newsCard__saveButton");
    }
  };

  return (
    <div className="newsCard">
      <img className="newsCard-img" src={news.urlToImage} alt="img"></img>
      {mainRoute ? (
        <>
          <button
            type="button"
            className={
              isSaved ? "newsCard__saveButton-liked" : "newsCard__saveButton"
            }
            onClick={() => {
              if (isSaved) {
                handleUnsaveArticle(news);
              } else {
                handleLikedCard();
                handleSaveArticle(news, currKeyword);
              }
            }}
            onMouseEnter={() => {
              if (!isLoggedIn)
                setSaveArticalClass("newsCard__saveBlock-visible");
            }}
            onMouseLeave={() => {
              setSaveArticalClass("newsCard__saveBlock-hidden");
            }}
          ></button>
          <div className={saveArticalClass}>
            <p className="newsCard__saveArtical">Sign in to save articles</p>
          </div>
        </>
      ) : (
        <>
          <div className="newsCard-keyword">{news.keyword}</div>
          <button
            type="button"
            className="newsCard__deleteButton"
            onClick={() => {
              handleDeleteArticle(news);
            }}
            onMouseEnter={() => {
              if (isLoggedIn)
                setDeleteArticalClass("newsCard__deleteBlock-visible");
            }}
            onMouseLeave={() => {
              setDeleteArticalClass("newsCard__deleteBlock-hidden");
            }}
          ></button>
          <div className={deleteArticalClass}>
            <p className="newsCard__deleteArtical">Remove from saved</p>
          </div>
        </>
      )}
      <div className="newsCard__content">
        <p className="newsCard__content-date">
          {handleDateConversion(news.publishedAt)}
        </p>
        <h2 className="newsCard__content-title">{news.title}</h2>
        <p className="newsCard__content-text">{news.description}</p>
        <a
          href={news.url}
          target="_blank"
          rel="noopener noreferrer"
          className="newsCard__content-source"
        >{`${mainRoute ? news.source.name : news.source}`}</a>
      </div>
    </div>
  );
};

export default NewsCard;
