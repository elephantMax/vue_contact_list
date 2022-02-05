<template>
  <div class="table-row">
    <div class="table-row__data">
      <div class="table-row__cell table-row__cell--name">
        <span
          v-if="userChildren.length > 0"
          class="table-row__btn btn"
          @click="userChildrenIsVisible = !userChildrenIsVisible"
          >{{ userChildrenIsVisible ? '-' : '+' }}</span
        >
        {{ user.name }}
      </div>
      <span class="table-row__cell table-row__cell--number">
        {{ user.number }}
      </span>
    </div>
    <transition name="children">
      <div
        v-if="userChildren.length > 0 && userChildrenIsVisible"
        class="table-row__children"
      >
        <Table-Row
          v-for="child in userChildren"
          :key="child.id"
          :user="child"
        />
      </div>
    </transition>
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
    ...mapGetters(['sortedUsers']),
    userChildren() {
      return this.sortedUsers.filter(user => user.boss === this.user.id)
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
    position: relative;
    z-index: 0;
    @include table-cell;

    &--number {
      font-weight: 600;
    }
  }

  &__btn {
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
    padding: 10px 10px;
  }
}

.children-enter-active,
.children-leave-active {
  transition: transform 0.5s, opacity 0.3s;
}
.children-enter,
.children-leave-to {
  transform: translateX(-50%);
  opacity: 0;
}
</style>
