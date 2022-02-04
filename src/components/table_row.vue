<template>
  <div class="table-row">
    <div class="table-row__data">
      <span
        class="table-row__cell table-row__cell--name"
        @click="userChildrenIsVisible = !userChildrenIsVisible"
      >
        {{ user.name }}
      </span>
      <span class="table-row__cell table-row__cell--phone">
        {{ user.phone }}
      </span>
    </div>
    <div
      v-if="user.children.length && userChildrenIsVisible"
      class="table-row__children"
    >
      <Table-Row v-for="child in user.children" :key="child.id" :user="child" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Table-Row',
  props: {
    user: {
      required: true,
      type: Object,
    },
  },
  data() {
    return {
      userChildrenIsVisible: true,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/mixins.scss';

.table-row {
  &__data {
    display: flex;
  }

  &__cols {
    display: flex;
  }

  &__children {
    margin-left: 20px;
  }

  &__cell {
    @include table-cell;

    &--phone {
      font-weight: 600;
    }
  }
}
</style>
