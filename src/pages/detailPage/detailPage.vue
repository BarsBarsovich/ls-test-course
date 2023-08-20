<template>
  <div class="layout">
    <div class="layout__header">
      <XHeader :isInnerPage="false" />
    </div>
    <div class="layout__content">
      <div class="container">
        <div class="detail-page">
          <div class="detail-page__photo">
            <img v-if="currentProduct.image" :src="require('@/assets' + currentProduct.detailImage)" alt="" class="detail-page__img" />
            <div class="detail-page__slider">
              <div class="slider">
                <div class="slider__arrow"></div>
                <div class="slider__list">
                  <div class="slider__item">
                    <img src="" alt="" />
                  </div>
                </div>
                <div class="slider__arrow"></div>
              </div>
            </div>
          </div>
          <div class="detail-page__description">
            <p class="detail-page__card-title" v-if="currentProduct.name">{{ getTitle() }}"</p>
            <p class="detail-page__description" v-if="currentProduct.description">{{ currentProduct.description }}"</p>
            <p class="detail-page__price">{{ currentProduct.price }}&nbsp;$"</p>
            <p class="detail-page__card-subtitle">Colors:</p>
            <div class="colors-list">
              <div
                class="colors-list__item"
                v-for="(color, index) in currentProduct.colors"
                :key="index"
                :style="{ background: color }"
              ></div>
            </div>
            <p class="detail-page__card-subtitle">Sizes H-W-L cm:</p>
            <div class="sizes-list">
              <div class="sizes-list__card">
                <span>80-40-40</span>
              </div>
            </div>
            <div class="wrapper" v-if="false">
              <p class="detail-page__card-subtitle">About this product:</p>
              <div class="detail-page__additional-text">
                {{ currentProduct.additional_description }}
              </div>
            </div>
            <div class="detail-page__buttons">
              <xButton text="Buy now" :isWide="true" />
              <xButton text="Basket" :isWhite="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="layout__footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import products from '@/data.json';
import XHeader from '@/components/xHeader.vue';
import Footer from '@/pages/sections/footer.vue';
import XButton from '@/components/xButton/xButton.vue';

export default {
  name: 'detailPage',
  components: { XButton, XHeader, Footer },
  data() {
    return {
      currentProduct: {},
      products,
    };
  },
  mounted() {
    this.currentProduct = this.products.find(x => x.id === +this.$route.params.id);
  },
  methods: {
    getTitle() {
      const arrName = this.currentProduct.name.split(' ');
      if (arrName.length === 1) {
        return this.currentProduct.name;
      } else {
        return `${arrName[0]} "${arrName[1]}`;
      }
    },
  },
};
</script>

<style scoped lang="scss" src="./detail.scss"></style>
