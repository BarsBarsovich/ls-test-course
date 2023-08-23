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

<style scoped lang="scss" src="./catalog.scss"></style>
