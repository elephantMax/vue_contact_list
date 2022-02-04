<template>
  <div class="home">
    <div class="container">
      <div class="home__content">
        <button class="btn btn--primary">
          Добавить пользователя
        </button>
        <Table class="home__table" />
      </div>
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
.home {
  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  &__table {
    margin-top: 10px;
    width: 100%;
  }
}
</style>
