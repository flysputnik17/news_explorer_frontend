const APIkey = "f70c070134b4424f93001cea21cc05c0";
let to = new Date().toISOString().slice(0, 10);
let from = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
  .toISOString()
  .slice(0, 10);

const pageSize = 100;

export { APIkey, to, from, pageSize };
