<template>
  <div class="table-row">
    <div class="table-row__data">
      <div class="table-row__cell table-row__cell--name">
        <span
          v-if="!!userChildren.length"
          class="btn"
          @click="userChildrenIsVisible = !userChildrenIsVisible"
          >{{ userChildrenIsVisible ? '-' : '+' }}</span
        >
        {{ user.name }}
      </div>
      <span class="table-row__cell table-row__cell--number">
        {{ user.number }}
      </span>
    </div>
    <div
      v-if="!!userChildren.length && userChildrenIsVisible"
      class="table-row__children"
    >
      <Table-Row v-for="child in userChildren" :key="child.id" :user="child" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
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
      userChildrenIsVisible: false,
    }
  },
  computed: {
    ...mapGetters(['users']),
    userChildren() {
      return this.users.filter(user => user.boss === this.user.id)
    },
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

    &--number {
      font-weight: 600;
    }
  }
}
</style>
