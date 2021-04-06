<template>
  <div class="movie">
    <div class="movie__img-container">
      <img
        class="movie__img"
        v-if="movie.poster_path"
        :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
      />
    </div>
    <div class="movie__info-container">
      <h4 class="movie__title">{{ movie.title }}</h4>
      <p class="movie__info">
        <span class="movie__info-bold">Popularność:</span>
        {{ movie.popularity }}
      </p>
      <p class="movie__info">
        <span class="movie__info-bold">Liczba głosów:</span>
        {{ movie.vote_count }}
      </p>
      <button class="movie__button" @click="showDetails(movie.id)">
        Szczegóły
      </button>
    </div>
    <Details v-if="detailsAreVisible" :id="id" />
  </div>
</template>

<script>
import Details from './Details';
export default {
  components: {
    Details,
  },
  props: ['movie'],
  data() {
    return {
      id: null,
      detailsAreVisible: false,
    };
  },
  methods: {
    showDetails(id) {
      this.id = id;
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
};
</script>

<style lang="scss">
@import '../variables';
.movie {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: $main-color-light;
  margin: $margin;
  &__img-container {
    width: 300px;
    height: 450px;
    object-fit: cover;
    background-image: url('../assets/placeholder.png');
    background-position: center;
    background-size: cover;
  }
  &__img {
    width: 100%;
    height: 100%;
  }
  &__info-container {
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    min-height: 200px;
  }
  &__title {
    font-size: $font-size-xl;
    font-weight: 600;
  }
  &__info {
    font-size: $font-size-xm;
    line-height: 20px;
    padding: 5px 0;
    &-bold {
      font-weight: 600;
    }
  }
  &__button {
    background-color: $main-color-dark;
    color: white;
    text-transform: uppercase;
    font-weight: 600;
    font-size: $font-size-xm;
    width: 50%;
    padding: 10px 0;
    border: none;
    cursor: pointer;
    &:hover {
      background-color: $main-color-normal;
    }
  }
}
</style>
