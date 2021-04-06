<template>
  <div class="sort" v-if="movies && movies.length > 0">
    <select class="sort__select" name="sort" @change="sortMovies">
      <option
        class="sort__option"
        :selected="sortMoviesBy === null"
        disabled
        value
      >
        -- sortuj filmy --
      </option>
      <option
        class="sort__option"
        :selected="sortMoviesBy === 'title a-z'"
        value="title a-z"
        >tytuł a-z</option
      >
      <option
        class="sort__option"
        :selected="sortMoviesBy === 'title z-a'"
        value="title z-a"
        >tytuł z-a</option
      >
      <option
        class="sort__option"
        :selected="sortMoviesBy === 'popularity asc'"
        value="popularity asc"
        >popularność rosnąco</option
      >
      <option
        class="sort__option"
        :selected="sortMoviesBy === 'popularity desc'"
        value="popularity desc"
        >popularność malejąco</option
      >
    </select>
  </div>
</template>

<script>
export default {
  props: ['movies', 'sortMoviesBy'],
  methods: {
    sortMovies(e) {
      this.$emit('handleSort', e.target.value);
    },
  },
};
</script>

<style lang="scss">
@import '../variables';
.sort {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  &__select {
    width: $width-mobile;
    font-size: $font-size-xm;
    padding: 5px 10px;
    margin-bottom: $margin-bottom;
    border: 1px solid $accent-color;
    background-color: white;
    @include tablet {
      margin-bottom: $margin-bottom;
      width: $width-tablet;
      font-size: $font-size-xxl;
    }
    @include desktop {
      font-size: $font-size-xm;
    }
  }
}
</style>
