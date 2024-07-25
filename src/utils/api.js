import { baseUrl } from "./constants";

export default class Api {
  constructor({ headers }) {
    this.headers = headers;
    this.baseUrl = baseUrl;
  }

  checkResponse(res) {
    if (res.ok) {
      return res.json(); //returning the JSON objet in case the res is ok
    }
    console.error(res.status);
    return Promise.reject(`Error:${res.status}`); //returning Error status
  }

  getArticles() {
    const jwt = localStorage.getItem("jwt");
    return fetch(`${this.baseUrl}/articles`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    }).then(this.checkResponse);
  }

  addArticle({ keyword, title, text, date, source, link, Image }) {
    const jwt = localStorage.getItem("jwt");
    return fetch(`${this.baseUrl}/articles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify({
        keyword,
        title,
        text,
        date,
        source,
        link,
        Image,
      }),
    }).then(this.checkResponse);
  }

  deleteArticle() {
    return fetch(`${this.baseUrl}/articles/articleId`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).catch(this.checkResponse);
  }
}
