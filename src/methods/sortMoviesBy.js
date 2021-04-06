export const sortMoviesBy = (sortBy, movies) => {
  if (sortBy === 'title a-z') {
    const sortedMovies = movies.sort((a, b) => a.title.localeCompare(b.title));
    return sortedMovies;
  }
  if (sortBy === 'title z-a') {
    const sortedMovies = movies.sort((a, b) => b.title.localeCompare(a.title));
    return sortedMovies;
  }
  if (sortBy === 'popularity asc') {
    const sortedMovies = movies.sort((a, b) => a.popularity - b.popularity);
    return sortedMovies;
  }
  if (sortBy === 'popularity desc') {
    const sortedMovies = movies.sort((a, b) => b.popularity - a.popularity);
    return sortedMovies;
  }
  return movies;
};
