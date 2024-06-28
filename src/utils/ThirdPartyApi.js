import { APIkey, to, from } from "./constants";

export const getSearchResults = (keyWord) => {
  const checkResponse = (res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  };

  return fetch(
    `https://newsapi.org/v2/everything?q=${keyWord}&from=${from}&to=${to}&sortBy=popularity&apiKey=${APIkey}`
  ).then(checkResponse);
};
