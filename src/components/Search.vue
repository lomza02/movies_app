<template>
  <form class="search" @submit="searchMovie">
    <input
      class="search__input"
      id="movie"
      type="text"
      placeholder="Wpisz nazwę filmu"
      v-model="movie"
      name="movie"
    />
    <p class="search__error" v-if="error" v-bind:key="error">{{ error }}</p>
    <input class="search__button" type="submit" value="Szukaj" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      error: null,
      movie: null,
    };
  },
  methods: {
    searchMovie: async function(e) {
      e.preventDefault();
      this.error = null;
      if (!this.movie) {
        return (this.error = 'Nazwa filmu wymagana.');
      }
      this.$emit('searchMovie', this.movie);
    },
  },
};
</script>

<style lang="scss">
@import '../variables';
.search {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  min-height: 100px;
  margin: $margin;
  &__input {
    font-size: $font-size-xl;
    padding: 5px 10px;
    width: $width-mobile;
    border: 2px solid $accent-color;
    margin: $margin;
    @include tablet {
      width: $width-tablet;
      font-size: $font-size-xxxl;
    }
    @include desktop {
      font-size: $font-size-xl;
    }
  }
  &__error {
    color: red;
    font-size: $font-size-xs;
    font-weight: 600;
    letter-spacing: 1px;
    margin-bottom: $margin-bottom;
    @include tablet {
      font-size: $font-size-xl;
    }
    @include desktop {
      font-size: $font-size-xm;
    }
  }
  &__button {
    background-color: $accent-color;
    color: white;
    text-transform: uppercase;
    width: $width-mobile;
    font-weight: 600;
    font-size: $font-size-xm;
    padding: 10px 15px;
    border: none;
    cursor: pointer;
    @include tablet {
      margin-bottom: $margin-bottom;
      width: $width-tablet;
      font-size: $font-size-xxxl;
    }
    @include desktop {
      font-size: $font-size-xl;
    }
  }
}
</style>
