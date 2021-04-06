<template>
  <div class="movie">
    <div class="movie__img-container">
      <img
        class="movie__img"
        v-if="movie.poster_path"
        :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
      />
    </div>
    <div class="movie__info-containers">
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
  padding: 20px 0;
  @include desktop {
    flex-direction: row;
    align-items: flex-start;
    width: 1024px;
  }
  &__img-container {
    width: $width-mobile;
    object-fit: cover;
    background-image: url('../assets/placeholder.png');
    background-position: center;
    background-size: cover;
    min-height: 450px;
    @include tablet {
      width: $width-tablet;
      min-height: 675px;
    }
    @include desktop {
      width: $width-mobile;
    }
  }
  &__img {
    width: 100%;
    height: 100%;
  }
  &__info-containers {
    @include desktop {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      min-height: 450px;
      margin: 0 30px;
    }
  }
  &__info-container {
    width: $width-mobile;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    min-height: 200px;
    @include tablet {
      letter-spacing: 0.85px;
      margin-bottom: $margin-bottom;
      width: $width-tablet;
    }
  }
  &__title {
    font-size: $font-size-xl;
    font-weight: 600;
    @include tablet {
      font-size: $font-size-xxxxl;
      margin: $margin;
    }
    @include desktop {
      font-size: $font-size-xxl;
      margin: $margin / 2;
    }
  }
  &__info {
    font-size: $font-size-xm;
    line-height: 20px;
    padding: 5px 0;
    @include tablet {
      font-size: $font-size-xxxl;
      line-height: $font-size-xxxl * 1.5;
      margin-bottom: $margin-bottom;
    }
    @include desktop {
      font-size: $font-size-xl;
      line-height: $font-size-xl * 1.6;
      margin-bottom: 0;
    }
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
    @include tablet {
      margin: $margin;
      font-size: $font-size-xxxl;
    }
    @include desktop {
      font-size: $font-size-xl;
      margin-bottom: $margin-bottom / 2;
    }
  }
}
</style>
