const BASE_URL = "https://autoscreener.nomoredomains.xyz";
// const BASE_URL = "http://localhost:3000";
let tokenDate = "";

export function register(name, email, password) {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  }).then(result);
}

export function login(email, password) {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(result);
}

export function userInform(token) {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      tokenDate = token;
      return data;
    });
}

export function userInformSet(data) {
  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${tokenDate}`,
    },
    body: JSON.stringify(data),
  }).then(result);
}

export function savedMovies(data) {
  return fetch(`${BASE_URL}/movies`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${tokenDate}`,
    },
    body: JSON.stringify(data),
  }).then(result);
}

export function downloadSavedMovies(data) {
  return fetch(`${BASE_URL}/movies`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${tokenDate}`,
    },
    body: JSON.stringify(data),
  }).then(result);
}

export function deleteMovies(id) {
  return fetch(`${BASE_URL}/movies/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${tokenDate}`,
    },
  }).then(result);
}

function result(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.status);
}
