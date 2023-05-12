const isDevelopment = process.env.NODE_ENV === "development";

const api = isDevelopment
  ? "http://localhost:3000"
  : "https://the-big-list-backend.herokuapp.com";

export const getItems = (params) => {
  // const {
  //   year,
  //   itemNumber: item_number,
  //   itemText: item_text,
  //   points,
  //   rating,
  // } = params;
  // const query = { year, item_number, item_text, points, rating };
  const query = {};
  // (!parseInt(query.year) || parseInt(query.year) < 1987) && delete query.year;
  return fetch(api + "/items?" + new URLSearchParams(query)).then((res) =>
    res.json()
  );
};
