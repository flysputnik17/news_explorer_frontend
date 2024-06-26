export default class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  checkResponse(res) {
    if (res.ok) {
      return res.json(); //returning the JSON objet in case the res is ok
    }
    console.error(res.status);
    return Promise.reject(`Error:${res.status}`); //returning Error status
  }

  getNews({ keyword, APIkey, from, to, pageSize }) {
    return fetch(
      `${this.baseUrl}/everything/${keyword}/${APIkey}/${from}/${to}/${pageSize}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(this.checkResponse);
  }
}
