import { useEffect, useState } from "react";

import "./NewsCard.css";

const NewsCard = ({ isLoggedIn, news, mainRoute }) => {
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

  useEffect(() => {
    const hoverSaveButton = (evt) => {
      if (
        evt.target.classList.contains("newsCard__saveButton") &&
        isLoggedIn === false
      ) {
        setSaveArticalClass("newsCard__saveBlock-visible");
      } else {
        setSaveArticalClass("newsCard__saveBlock-hidden");
      }
    };
    document.addEventListener("mouseover", hoverSaveButton);
    return () => document.removeEventListener("mouseover", hoverSaveButton);
  }, [isLoggedIn]);

  useEffect(() => {
    const hoverDelete = (evt) => {
      if (evt.target.classList.contains("newsCard__deleteButton")) {
        setDeleteArticalClass("newsCard__deleteBlock-visible");
      } else {
        setDeleteArticalClass("newsCard__deleteBlock-hidden");
      }
    };
    document.addEventListener("mouseover", hoverDelete);
    return () => document.removeEventListener("mouseover", hoverDelete);
  }, []);

  return (
    <div className="newsCard">
      <img className="newsCard-img" src={news.urlToImage} alt="img"></img>
      {mainRoute ? (
        <>
          <button
            type="button"
            className={likedCard}
            onClick={handleLikedCard}
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
            onClick={handleLikedCard}
          ></button>
          <div className={deleteArticalClass}>
            <p className="newsCard__deleteArtical">Remove from saved</p>
          </div>
        </>
      )}

      <p className="newsCard-date">{news.publishedAt}</p>
      <h2 className="newsCard-title">{news.title}</h2>
      <p className="newsCard-text">{news.description}</p>
      <p className="newsCard-source">{news.source.name}</p>
    </div>
  );
};

export default NewsCard;
