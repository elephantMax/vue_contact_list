<template>
  <div class="app">
    <div class="container">
      <Table />
    </div>
  </div>
</template>

<script>
import Table from '@/components/table.vue'

export default {
  name: 'App',
  components: {
    Table,
  },
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 900px;
  width: 90%;
  margin: 50px auto;
}
</style>
