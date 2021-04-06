<template>
  <div id="app">
    <h1 class="title">Wyszukiwarka filmów</h1>
    <Search @searchMovie="searchMovie" />
    <Message :message="message" />
    <Pagination
      :movies="movies"
      :currentPage="currentPage"
      :lastPage="lastPage"
      @handlePagination="handlePagination"
    />
    <MovieItem v-for="movie in movies" v-bind:key="movie.id" :movie="movie" />
    <Pagination
      :movies="movies"
      :currentPage="currentPage"
      :lastPage="lastPage"
      @handlePagination="handlePagination"
    />
  </div>
</template>

<script>
import Search from './components/Search';
import Message from './components/Message';
import MovieItem from './components/MovieItem';
import Pagination from './components/Pagination';
import { fetchMovies } from './methods/fetchMovies';
import { sortMoviesBy } from './methods/sortMoviesBy';
export default {
  components: {
    Search,
    Message,
    MovieItem,
    Pagination,
  },
  data() {
    return {
      sortMoviesBy: null,
      movies: [],
      clicked: false,
      currentPage: 1,
      message: {
        type: null,
        text: null,
      },
      lastPage: 1,
      movie: null,
    };
  },
  methods: {
    handlePagination: async function(currentPage) {
      this.movies = [];
      this.message = {
        type: 'loading',
        text: 'Ładowanie filmów...',
      };
      const { results, type, text } = await fetchMovies(
        currentPage,
        this.movie
      );
      this.message = {
        type: type,
        text: text,
      };
      this.movies = sortMoviesBy(this.sortMoviesBy, results);
      this.currentPage = currentPage;
    },
    searchMovie: async function(movie) {
      this.currentPage = 1;
      this.movies = [];
      this.message = {
        type: 'loading',
        text: 'Ładowanie filmów...',
      };
      this.sortMoviesBy = null;
      const { results, total_pages, type, text } = await fetchMovies(
        this.currentPage,
        movie
      );
      this.message = {
        type: type,
        text: text,
      };
      this.movie = movie;
      this.movies = results;
      this.lastPage = total_pages;
      this.clicked = true;
    },
  },
};
</script>

<style lang="scss">
@import './variables';
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: $accent-color;
  margin: 30px 0;
}
.title {
  width: 100%;
  font-size: $font-size-xl;
  text-align: center;
  text-transform: uppercase;
}
</style>
