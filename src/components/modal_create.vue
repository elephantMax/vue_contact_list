<template>
  <Modal :title="'Добавить пользователя'" @close="closeModal">
    <template #body>
      <form class="form">
        <div class="form__group">
          <label class="form__label">
            Имя
          </label>
          <input class="form__input input" type="text" />
        </div>
        <div class="form__group">
          <label class="form__label">
            Телефон
          </label>
          <input class="form__input input" type="text" />
        </div>
        <div class="form__group">
          <label class="form__label">
            Начальник
          </label>
          <select class="form__input select">
            <option class="select__option">Test</option>
            <option class="select__option">Test 2</option>
          </select>
        </div>
        <button class="btn btn--primary">Сохранить</button>
      </form>
    </template>
  </Modal>
</template>

<script>
import Modal from '@/components/app/modal'
export default {
  components: { Modal },
  methods: {
    closeModal() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  &__group {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &__label {
    flex: 0 0 15%;
    min-width: 100px;
  }

  &__input {
    flex: 1 1 70%;
  }
}
</style>
