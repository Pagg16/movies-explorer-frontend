const BASE_URL = "https://api.nomoreparties.co/beatfilm-movies";

export function moviesLoad() {
  return fetch(`${BASE_URL}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res) {
      return res.json();
    }
    return Promise.reject(res.status);
  });
}
