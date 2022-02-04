<template>
  <transition name="fade">
    <div class="backdrop" @click="closeModal">
      <div class="modal" @click.stop>
        <div class="modal__header">
          <span class="modal__title">
            {{ title }}
          </span>
          <button class="modal__button btn" @click="closeModal">
            &times;
          </button>
        </div>
        <div class="modal__body">
          <slot name="body" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    title: String,
  },
  methods: {
    closeModal() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss" scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(104, 104, 104, 0.438);
  display: flex;
}

.modal {
  max-width: 600px;
  width: 90%;
  min-width: 300px;
  min-height: 150px;
  margin: auto;
  border-radius: 5px;
  background-color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  padding: 10px;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    font-weight: 600;
  }

  &__button {
    padding: 10px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
