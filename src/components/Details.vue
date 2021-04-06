<template>
  <div class="movie__info-container">
    <div v-if="message.type === 'loading'">{{ message.text }}</div>
    <p v-if="genres" class="movie__info">
      <span class="movie__info-bold">Gatunek:</span> {{ genres }}
    </p>
    <p v-if="imdbLink" class="movie__info">
      <span class="movie__info-bold">Link IMDB:</span>
      <a :href="imdbLink">{{ imdbLink }}</a>
    </p>
    <p v-if="overview" class="movie__info">
      <span class="movie__info-bold">Opis:</span> {{ overview }}
    </p>
    <p v-if="productionCountries" class="movie__info">
      <span class="movie__info-bold">Kraj produkcji:</span>
      {{ productionCountries }}
    </p>
  </div>
</template>

<script>
import { fetchDetails } from '../methods/fetchDetails';
export default {
  props: ['id'],
  data() {
    return {
      message: {
        type: null,
        text: null,
      },
      genres: null,
      imdbLink: null,
      overview: null,
      productionCountries: null,
      detailsAreVisible: false,
    };
  },
  async mounted() {
    this.message = {
      type: 'loading',
      text: 'Ładowanie informacji...',
    };
    this.genres = null;
    this.imdbLink = null;
    this.overview = null;
    this.productionCountries = null;
    const data = await fetchDetails(this.id);
    this.genres = data.genres;
    this.productionCountries = data.productionCountries;
    this.overview = data.overview;
    this.imdbLink = data.imdbLink;
    this.message = {
      type: null,
      text: null,
    };
  },
};
</script>
