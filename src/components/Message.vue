<template>
  <div>
    <div class="message" v-if="message.type === 'notFind'">
      {{ this.message.text }}
    </div>
    <div class="message" v-if="message.type === 'error'">
      {{ this.message.text }}
    </div>
    <div class="message" v-if="message.type === 'loading'">
      {{ this.message.text }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['message'],
};
</script>

<style lang="scss">
@import '../variables';
.message {
  font-size: $font-size-xl;
  text-align: center;
}
</style>
