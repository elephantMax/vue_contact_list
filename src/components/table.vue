<template>
  <div class="table">
    <div class="table__body">
      <div class="table__header">
        <span
          class="table__cell table__cell--name table__cell--clickable"
          :class="{ 'table__cell--active': sortBy === 'name' }"
          @click="setSortBy('name')"
        >
          Имя
        </span>
        <span
          class="table__cell table__cell--number table__cell--clickable"
          :class="{ 'table__cell--active': sortBy === 'number' }"
          @click="setSortBy('number')"
        >
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
import { mapGetters, mapMutations } from 'vuex'

import TableRow from '@/components/table_row'

export default {
  components: {
    TableRow,
  },
  computed: {
    ...mapGetters(['sortedUsers', 'sortBy']),
    parentUsers() {
      return this.sortedUsers.filter(user => user.boss === null)
    },
  },
  methods: {
    ...mapMutations(['setUsers', 'setSortBy']),
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/mixins.scss';
@import '../assets/variables.scss';

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

    &--clickable {
      cursor: pointer;
      user-select: none;
    }

    &--active {
      background-color: $light-blue;
    }
  }
}
</style>
