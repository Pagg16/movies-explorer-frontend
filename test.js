const textFiltering = /[^a-zа-яё]/gi;
let searchFormMovies = [];
let transformativeSearchMoviesArr = "123пр ";

transformativeSearchMoviesArr = transformativeSearchMoviesArr
  .replace(textFiltering, "")
  .toLowerCase();

const moviesArr = [
  "привет как",
  "вавпр",
  "ваxcxcxвпрxcxcxcxпрпр",
  //   "вчвав вс в всвсввуав",
  //   "вчвав с блои",
  //   "вчвав ащзщшор пр о р",
];

for (let i = 0; i < moviesArr.length; i++) {
  let mociesName = moviesArr[i].replace(textFiltering, "").toLowerCase();

  for (
    let d = 0;
    d < mociesName.length - transformativeSearchMoviesArr.length + 1;
    d++
  ) {
    let strin = "";

    for (let a = 0; a < transformativeSearchMoviesArr.length; a++) {
      strin += mociesName[a + d];
    }

    if (transformativeSearchMoviesArr === strin) {
      searchFormMovies[searchFormMovies.length] = moviesArr[i];
      break;
    }
  }
}

console.log(searchFormMovies);
