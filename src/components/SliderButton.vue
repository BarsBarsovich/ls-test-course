<template>
  <button
    class="slider-button slider-button--top-border store__slider-button--active"
    v-for="button in sliderButtons"
    :key="button.id"
    v-bind:class="{
      active: button.id === 0,
      'slider-button--top-border': button.id === 0,
      'slider-button--bottom-border': button.id === 4,
    }"
  >
    <img :src="button.imgUrl" :alt="button.title" class="store__slider-icon" />
    <span>{{ button.title }}</span>
  </button>
</template>

<script>
export default {
  name: 'SliderButton',
  data() {
    return {
      sliderButtons: [
        {
          id: 0,
          imgUrl: require('@/assets/about.svg'),
          title: 'About us',
        },
        {
          id: 1,
          imgUrl: require('@/assets/modern-design.svg'),
          title: 'Modern design',
        },
        {
          id: 2,
          imgUrl: require('@/assets/smart-solutions.svg'),
          title: 'Smart solutions',
        },
        {
          id: 3,
          imgUrl: require('@/assets/eco-material.svg'),
          title: 'Eco materials',
        },
        {
          id: 4,
          imgUrl: require('@/assets/best-prices.svg'),
          title: 'Best prices',
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.slider-button {
  width: 130px;
  height: 105px;
  background: #dde1d8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: none;
  text-align: center;
  margin-top: 1px;
  border-bottom: 1px solid #f9f9f9;
  border-left: 1px solid #f9f9f9;
  cursor: pointer;
  color: #2f675f;
  font-size: 16px;
  font-weight: 600;

  &--top-border {
    border-top-right-radius: 10px;
  }

  &--bottom-border {
    border-bottom-right-radius: 10px;
  }

  &:hover {
    background: #bad6c5;
  }
}

.active {
  background: #2f675f;
  color: #fff;
}
</style>
