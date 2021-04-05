export const fetchMovies = async (pageNumber, movieQuery) => {
  try {
    let type = null;
    let text = null;
    const movies = await fetch(
      `https://api.themoviedb.org/4/search/movie?api_key=${
        process.env.VUE_APP_API_KEY
      }&language=pl-PL&page=${pageNumber}&query=${encodeURI(movieQuery)}`
    );
    const parsedMovies = await movies.json();
    if (movies.status !== 200) {
      (type = 'error'), (text = parsedMovies.status_message);
      return { type, text };
    }
    if (parsedMovies.results.length === 0) {
      type = 'notFind';
      text = 'Nie znaleziono takiego filmu :(';
    }
    return { ...parsedMovies, type, text };
  } catch {
    return { type: 'error', text: 'Błąd serwera' };
  }
};
