<template>
  <Modal :title="'Добавить пользователя'" @close="closeModal">
    <template #body>
      <form class="form" @submit.prevent="submit">
        <div class="form__group">
          <label class="form__label">
            Имя
          </label>
          <input v-model="name" class="form__input input" type="text" />
        </div>
        <div class="form__group">
          <label class="form__label">
            Телефон
          </label>
          <input v-model="number" class="form__input input" type="text" />
        </div>
        <div class="form__group">
          <label class="form__label">
            Начальник
          </label>
          <select v-model="boss" class="form__input select">
            <option class="select__option" selected hidden :value="null">
              Выберите пользователя
            </option>
            <option
              v-for="option in options"
              :key="option.id"
              class="select__option"
              :value="option.id"
              >{{ option.name }}</option
            >
          </select>
        </div>
        <button class="btn btn--primary" :disabled="!buttonIsActive">
          Сохранить
        </button>
      </form>
    </template>
  </Modal>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import Modal from '@/components/app/modal'

const getInitState = () => ({
  name: '',
  number: '',
  boss: null,
})

export default {
  components: { Modal },
  data() {
    return getInitState()
  },
  computed: {
    ...mapGetters({
      options: 'users',
    }),
    buttonIsActive() {
      return this.name !== '' && this.number !== ''
    },
  },
  methods: {
    ...mapActions(['createUser']),
    closeModal() {
      this.$emit('close')
      Object.assign(this.$data, getInitState())
    },
    submit() {
      if (this.buttonIsActive) {
        const user = {
          name: this.name,
          number: this.number,
          boss: this.boss,
        }

        this.createUser(user)
        this.closeModal()
      }
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
