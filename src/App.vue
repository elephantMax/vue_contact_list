<template>
  <div class="app">
    <button class="app__btn">Test</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
}
</script>

<style lang="scss" scoped>
.app {
  &__btn {
    transform: rotate(90deg);
  }
}
</style>
