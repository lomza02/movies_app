import * as data from '../assets/countries.json';
const countries = data.default;
export async function fetchDetails(id) {
  try {
    let type = null;
    let text = null;
    const movie = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.VUE_APP_API_KEY}&language=pl-PL`
    );
    const parsedMovie = await movie.json();
    if (movie.status !== 200) {
      type = 'error';
      text = parsedMovie.status_message;
      return { type, text };
    }
    const productionCountries = getProductionCountries(
      parsedMovie.production_countries,
      parsedMovie
    );
    const overview =
      parsedMovie.overview === '' ? 'brak opisu' : parsedMovie.overview;
    const genres = getGenres(parsedMovie.genres);
    const imdbLink = 'https://www.themoviedb.org/movie/' + parsedMovie.id;
    return {
      imdbLink,
      genres,
      productionCountries,
      overview,
      type,
      text,
    };
  } catch {
    return { type: 'error', text: 'Błąd serwera' };
  }
}

const getGenres = (genres) => {
  let genresStringPl = '';
  genres.forEach((genre, index) =>
    genres.length - 1 === index
      ? (genresStringPl += `${genre.name}`)
      : (genresStringPl += `${genre.name}, `)
  );
  if (genresStringPl === '') {
    return 'brak danych';
  }
  return genresStringPl;
};

const getProductionCountries = (productionCountries, parsedMovie) => {
  let countriesStringPl = '';
  productionCountries.forEach((country, index) => {
    const countryPL = countries.find((c) => c.code === country.iso_3166_1);
    index === parsedMovie.production_countries.length - 1
      ? (countriesStringPl += countryPL.name_pl)
      : (countriesStringPl += countryPL.name_pl + ', ');
  });
  if (countriesStringPl === '') {
    return 'brak danych';
  }
  return countriesStringPl;
};
