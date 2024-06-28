import { useEffect, useState } from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

const NewsCardList = ({ isLoggedIn, newsData, emptySearch }) => {
  return (
    <>
      {emptySearch ? (
        <div className="searchResult">
          <div className="searchResult__notfound-img"></div>
          <h2 className="searchResult__notfound-title">Nothing found</h2>
          <p className="searchResult__notfound">
            Sorry, but nothing matched
            <br /> your search terms.
          </p>
        </div>
      ) : (
        <div className="searchResult">
          <h2 className="searchResult__title">Search results</h2>
          <section className="searchResult__section">
            <ul className="searchResult__cards">
              <NewsCard isLoggedIn={isLoggedIn} newsData={newsData} />
            </ul>
            <button type="button" className="searchResult__section-button">
              Show more
            </button>
          </section>
        </div>
      )}
    </>
  );
};
export default NewsCardList;
