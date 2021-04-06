<template>
  <div class="pagination" v-if="movies && movies.length > 0">
    <button
      class="pagination__button"
      v-if="currentPage > 1"
      @click="handlePagination('first')"
    >
      &lt;&lt;
    </button>
    <button
      class="pagination__button"
      v-if="currentPage > 1"
      @click="handlePagination('decrease')"
    >
      &lt;
    </button>
    <div class="pagination__display">{{ currentPage }} z {{ lastPage }}</div>
    <button
      class="pagination__button"
      v-if="currentPage < lastPage"
      @click="handlePagination('increase')"
    >
      &gt;
    </button>
    <button
      class="pagination__button"
      v-if="currentPage < lastPage"
      @click="handlePagination('last')"
    >
      &gt;&gt;
    </button>
  </div>
</template>

<script>
export default {
  props: ['movies', 'currentPage', 'lastPage'],
  methods: {
    handlePagination: async function(action) {
      if (action === 'increase') {
        const currentPage = this.currentPage + 1;
        this.$emit('handlePagination', currentPage);
      } else if (action === 'decrease') {
        const currentPage = this.currentPage - 1;
        this.$emit('handlePagination', currentPage);
      } else if (action === 'first') {
        this.$emit('handlePagination', 1);
      } else if (action === 'last') {
        this.$emit('handlePagination', this.lastPage);
      }
    },
  },
};
</script>

<style lang="scss">
@import '../variables';
.pagination {
  width: 100%;
  display: flex;
  justify-content: center;
  &__display {
    font-size: $font-size-xl;
    line-height: 30px;
    padding: 0 15px;
    @include tablet {
      font-size: $font-size-xxxl;
    }
    @include desktop {
      font-size: $font-size-xl;
    }
  }
  &__button {
    min-width: 30px;
    height: 30px;
    padding: 0 5px;
    border: none;
    background-color: white;
    font-size: $font-size-xl;
    font-weight: 600;
    cursor: pointer;
    &:hover {
      background-color: $main-color-light;
    }
    @include tablet {
      font-size: $font-size-xxxl;
    }
    @include desktop {
      font-size: $font-size-xl;
    }
  }
}
</style>
