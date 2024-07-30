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

  addArticle(
    keyword,
    { title, description, publishedAt, source, url, urlToImage }
  ) {
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
        description,
        publishedAt,
        source,
        url,
        urlToImage,
      }),
    }).then(this.checkResponse);
  }

  deleteArticle(id) {
    const jwt = localStorage.getItem("jwt");
    console.log("articles :", `${this.baseUrl}/articles`);
    return fetch(`${this.baseUrl}/articles/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    }).then(this.checkResponse);
  }
}
