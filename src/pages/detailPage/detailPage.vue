<template>
  <div class="layout">
    <div class="layout__header">
      <XHeader :isInnerPage="false" />
    </div>
    <div class="layout__content">
      <div class="container">
        <div class="detail-page">
          <div class="detail-page__photo">
            <img
              v-if="currentProduct.image"
              :src="require('@/assets' + currentProduct.detailImage)"
              alt=""
              class="detail-page__img"
              @click="movePrev"
            />
            <div class="detail-page__slider">
              <div class="slider">
                <img
                  src="@/assets/detail-page/slider/expand-right.svg"
                  alt=""
                  class="slider__arrow slider__arrow--left"
                  @click="movePrev"
                />
                <div class="slider__list">
                  <div class="slider__list-container">
                    <div class="slider__wrapper" ref="sliderContainer">
                      <div class="wrapper" ref="allSlidesContainer" :style="{ transform: 'translateX(-' + currentSliderPosition + 'px)' }">
                        <div class="slider__item" v-for="n in 5" :key="n">
                          <img :src="require('@/assets/detail-page/slider/slider-photo-' + n + '.png')" alt="" />
                        </div>
                        <div class="slider__item">
                          <img src="@/assets/detail-page/slider/slider-photo-5.png" alt="" />
                        </div>
                        <div class="slider__item">
                          <img src="@/assets/detail-page/slider/slider-photo-4.png" alt="" />
                        </div>
                        <div class="slider__item">
                          <img src="@/assets/detail-page/slider/slider-photo-3.png" alt="" />
                        </div>
                        <div class="slider__item">
                          <img src="@/assets/detail-page/slider/slider-photo-2.png" alt="" />
                        </div>
                        <div class="slider__item">
                          <img src="@/assets/detail-page/slider/slider-photo-1.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  src="@/assets/detail-page/slider/expand-left.svg"
                  alt=""
                  class="slider__arrow slider__arrow--right"
                  @click="moveNext"
                />
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
        <div class="same-collection">
          <xWrapper />
        </div>
        <products title="Our featured products" :productsCard="data" :isCentered="true" />
      </div>
    </div>
    <div class="layout__footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import products from '@/data.json';
import data from '@/data.json';
import XHeader from '@/components/xHeader.vue';
import Footer from '@/pages/sections/footer.vue';
import XButton from '@/components/xButton/xButton.vue';
import Products from '@/pages/sections/products.vue';
import XWrapper from '@/components/wrapper.vue';

export default {
  name: 'detailPage',
  components: { XWrapper, Products, XButton, XHeader, Footer },
  data() {
    return {
      currentProduct: {},
      products,
      currentSliderPosition: 0,
      data,
    };
  },
  mounted() {
    this.currentProduct = this.products.find(x => x.id === +this.$route.params.id);
    window.scrollTo(0, 0);
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
    movePrev() {
      if (this.currentSliderPosition > 0) {
        this.currentSliderPosition -= this.$refs.sliderContainer.clientWidth;
        this.currentSliderPosition -= 6;
      }
    },
    moveNext() {
      const temp = this.currentSliderPosition + this.$refs.sliderContainer.clientWidth;
      if (temp < this.$refs.allSlidesContainer.clientWidth) {
        this.currentSliderPosition = temp + 6;
      }
    },
  },
};
</script>

<style scoped lang="scss" src="./detail.scss"></style>
