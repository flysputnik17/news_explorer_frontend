import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./NewsCard.css";

const NewsCard = ({ isLoggedIn, news }) => {
  const [saveArticalClass, setSaveArticalClass] = useState(
    "newsCard__saveBlock-hidden"
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
    document.addEventListener("mousedown", hoverSaveButton);
    return () => document.removeEventListener("mousedown", hoverSaveButton);
  }, [isLoggedIn]);

  return (
    <div className="newsCard">
      <img className="newsCard-img" src={news.urlToImage} alt="img"></img>
      <button
        type="button"
        className={likedCard}
        onClick={handleLikedCard}
      ></button>
      <div className={saveArticalClass}>
        <p className="newsCard__saveArtical">Sign in to save articles</p>
      </div>
      <p className="newsCard-date">{news.publishedAt}</p>
      <h2 className="newsCard-title">{news.title}</h2>
      <p className="newsCard-text">{news.description}</p>
      <p className="newsCard-source">{news.source.name}</p>
    </div>
  );
};

NewsCard.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  news: PropTypes.object.isRequired,
};

export default NewsCard;
