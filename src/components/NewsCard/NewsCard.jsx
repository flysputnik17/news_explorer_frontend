import { useEffect, useState } from "react";
import "./NewsCard.css";

const NewsCard = ({ isLoggedIn }) => {
  // const needSignInClass = ` ${
  //   isLoggedIn ? "newsCard__saveBlock - visibal" : "newsCard__saveBlock-hidden"
  //   }`;
  const [saveArticalClass, setSaveArticalClass] = useState(
    "newsCard__saveBlock-hidden"
  );

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
      <div className="newsCard-img"></div>

      <button type="button" className="newsCard__saveButton"></button>
      <div className={saveArticalClass}>
        <p className="newsCard__saveArtical">Sign in to save articles</p>
      </div>

      <p className="newsCard-date">November 4, 2020</p>
      <h2 className="newsCard-title">
        Everyone Needs a Special
        <br /> 'Sit Spot' in Nature
      </h2>
      <p className="newsCard-text">
        Ever since I read Richard Louv's influential book, "Last Child in the
        Woods," the idea of having a special "sit spot" has stuck with me. This
        advice, which Louv attributes to nature educator Jon Young, is for both
        adults and children to find...
      </p>
      <p className="newsCard-sorce">Treehugger</p>
    </div>
  );
};
export default NewsCard;
