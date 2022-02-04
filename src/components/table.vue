<template>
  <div class="table">
    <div class="table__body">
      <div class="table__header">
        <span class="table__cell table__cell--name">
          Имя
        </span>
        <span class="table__cell table__cell--number">
          Телефон
        </span>
      </div>
      <div class="table__rows">
        <TableRow v-for="user in parentUsers" :key="user.id" :user="user" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import TableRow from '@/components/table_row'

export default {
  components: {
    TableRow,
  },
  computed: {
    ...mapGetters(['users']),
    parentUsers() {
      return this.users.filter(user => user.boss === null)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/mixins.scss';

.table {
  overflow: auto;
  max-height: 700px;
  box-shadow: 0px 0px 4px rgba(#000, 0.5);

  &__body {
    width: 100%;
    min-width: 600px;
  }

  &__rows {
    display: flex;
    flex-direction: column;
  }

  &__header {
    display: flex;
  }

  &__cell {
    font-weight: 600;
    color: #fff;
    background-color: rgba(#333, 0.6);
    @include table-cell;
  }
}
</style>
