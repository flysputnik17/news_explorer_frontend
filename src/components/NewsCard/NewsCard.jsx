import { useEffect, useState } from "react";
import "./NewsCard.css";

const NewsCard = ({ isLoggedIn, newsData }) => {
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
        setSaveArticalClass("newsCard__saveBlock - visibal");
      } else {
        setSaveArticalClass("newsCard__saveBlock-hidden");
      }
    };
    document.addEventListener("mousedown", hoverSaveButton);
    return () => document.removeEventListener("mousedown", hoverSaveButton);
  }, [isLoggedIn]);

  return (
    <div className="newsCard">
      <img className="newsCard-img" src={newsData.urlToImage} alt="img"></img>

      <button
        type="button"
        className={likedCard}
        onClick={handleLikedCard}
      ></button>
      <div className={saveArticalClass}>
        <p className="newsCard__saveArtical">Sign in to save articles</p>
      </div>

      <p className="newsCard-date">{newsData.publishedAt}</p>
      <h2 className="newsCard-title">{newsData.title}</h2>
      <p className="newsCard-text">{newsData.description}</p>
      <p className="newsCard-sorce">{newsData.source}</p>
    </div>
  );
};
export default NewsCard;
