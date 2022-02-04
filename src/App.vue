<template>
  <div class="home">
    <div class="container">
      <div class="home__content">
        <button class="btn btn--primary" @click="openModal">
          Добавить пользователя
        </button>
        <Table class="home__table" />
      </div>
    </div>
    <ModalCreate v-show="modalIsVisible" @close="closeModal" />
  </div>
</template>

<script>
import Table from '@/components/table.vue'
import ModalCreate from '@/components/modal_create.vue'

export default {
  name: 'App',
  components: {
    Table,
    ModalCreate,
  },
  data() {
    return {
      modalIsVisible: false,
    }
  },
  methods: {
    openModal() {
      this.modalIsVisible = true
    },
    closeModal() {
      this.modalIsVisible = false
    },
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
