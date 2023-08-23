<template>
  <div class="header">
    <div class="container">
      <div class="header__container">
        <xNav />
      </div>
      <p class="header__text" v-if="currentBrowser !== 'Chrome'">
        Create an interior
        <br />
        of your dreram
        <br />
        with us
      </p>
      <p class="header__text" v-if="currentBrowser === 'Chrome'">
        Create an interior of your
        <br />
        dreram with us
        <br />
      </p>
      <XButton text="Shop now" />
    </div>
  </div>
  <section class="store">
    <h1 class="title title--font">Store of stylish and modern furniture</h1>
    <div class="store__container container">
      <div class="store__logo">
        <img src="../../assets/lamp.png" alt="" class="store__logo-img" />
      </div>
      <div class="store__slider">
        <div class="store__slider-container">
          <div class="store__slider-wrapper">
            <p class="store__slider-title">About us</p>
            <p class="store__slider-text">
              Loft Space is Belarusian quality brand of tables, chairs, sun loungers and custom cabinets.
              <br />
            </p>
            <p class="store__slider-text">
              We also ensure that Loft Space can offer bespoke craftsmanship and are always looking for improvements to expand our brand.
              <br />
            </p>
            <p class="store__slider-text">
              We create our furniture from all kinds of materials, including Eco materials, hypoallergenic, etc.
            </p>
          </div>
          <a href="/about">
            <XButton text="Read more" :isGreen="true" />
          </a>
        </div>
        <div class="store__slider-buttons">
          <SliderButton />
        </div>
      </div>
    </div>
  </section>
  <products :isMainPage="true" :productsCard="products" />
  <collections />
  <articles />
  <Footer />
</template>

<script>
import Products from '@/pages/sections/products.vue';
import Collections from '@/pages/sections/collections.vue';
import Articles from '@/pages/sections/articles.vue';
import XButton from '@/components/xButton/xButton.vue';
import SliderButton from '@/components/SliderButton.vue';
import Footer from '@/pages/sections/footer.vue';
import XNav from '@/components/xNav.vue';
import products from '@/data.json';

export default {
  name: 'mainPage',
  components: { XNav, XButton, Articles, SliderButton, Products, Collections, Footer },
  data() {
    return {
      currentBrowser: '',
      products,
    };
  },
  methods: {
    detectBrowser() {
      const agent = window.navigator.userAgent.toLowerCase();
      switch (true) {
        case agent.indexOf('edge') > -1:
          return 'MS Edge';
        case agent.indexOf('edg/') > -1:
          return 'Edge ( chromium based)';
        case agent.indexOf('opr') > -1 && !!window.opr:
          return 'Opera';
        case agent.indexOf('chrome') > -1 && !!window.chrome:
          return 'Chrome';
        case agent.indexOf('trident') > -1:
          return 'MS IE';
        case agent.indexOf('firefox') > -1:
          return 'Mozilla Firefox';
        case agent.indexOf('safari') > -1:
          return 'Safari';
        default:
          return 'other';
      }
    },
  },
  mounted() {
    this.currentBrowser = this.detectBrowser();
  },
};
</script>

<style scoped lang="scss" src="./main.scss"></style>
