import { useEffect, useState } from "react";

import "./NewsCard.css";

const NewsCard = ({
  isLoggedIn,
  news,
  mainRoute,
  handleSaveArticle,
  handleDeleteArticle,
  isSaved,
}) => {
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
    } else if (isLoggedIn === true && likedCard === "newsCard__saveButton") {
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
              handleLikedCard();
              handleSaveArticle(news);
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

      <p className="newsCard-date">{handleDateConversion(news.publishedAt)}</p>
      <h2 className="newsCard-title">{news.title}</h2>
      <p className="newsCard-text">{news.description}</p>
      <p className="newsCard-source">{news.source.name}</p>
    </div>
  );
};

export default NewsCard;
