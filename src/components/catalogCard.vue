<template>
  <div class="catalog-card">
    <img :src="require('@/assets' + imgUrl)" alt="" class="catalog-card__img" />
    <p class="catalog-card__price">{{ price }}&nbsp; $</p>
    <p class="catalog-card__title">{{ title }}</p>
    <p class="catalog-card__category">{{ category }}</p>
  </div>
</template>

<script>
export default {
  name: 'catalogCard',
  props: {
    imgUrl: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.catalog-card {
  position: relative;

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    min-height: 323px;
    max-height: 323px;
    border-radius: 10px;
  }

  &__price {
    position: absolute;
    left: 15px;
    top: 255px;
    color: #fffaf3;
    font-family: 'Montserrat', sans-serif;
    font-size: 28px;
    font-weight: 500;
  }

  &__title {
    position: absolute;
    left: 15px;
    bottom: 15px;
    color: #fffaf3;
    font-size: 16px;
    font-weight: 400;
  }

  &__category {
    position: absolute;
    bottom: 15px;
    right: 10px;
    color: #f9f9f9;
    font-size: 16px;
    font-weight: 400;
  }
}
</style>
