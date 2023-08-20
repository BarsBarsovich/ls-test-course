<template>
  <nav class="nav" v-bind:class="{ nav__container: isInnerPage }">
    <div class="nav__list">
      <div class="nav__item" v-if="currentBrowser === 'Chrome'">
        <router-link to="/" class="logo">Loft Space</router-link>
      </div>
      <div class="nav__list nav__list-wrapper">
        <div class="nav__item">
          <router-link to="#" class="nav__item-link" :class="{ active: this.$route.path === '/catalog' }">Catalog</router-link>
        </div>
        <div class="nav__item">
          <router-link to="/page" class="nav__item-link" :class="{ active: this.$route.path === '/collections' }">Collections</router-link>
        </div>
        <div class="nav__item">
          <router-link to="/page" class="nav__item-link" :class="{ active: this.$route.path === '/gallery' }">Gallery</router-link>
        </div>
      </div>
      <div class="nav__item" v-if="currentBrowser === 'Safari'">
        <router-link to="" class="logo">Loft Space</router-link>
      </div>

      <div class="nav__list nav__list-wrapper">
        <div class="nav__item">
          <router-link to="/about" class="nav__item-link" :class="{ active: this.$route.path === '/about' }">About us</router-link>
        </div>
        <div class="nav__item">
          <router-link to="/contacts" class="nav__item-link" :class="{ active: this.$route.path === '/contacts' }">Contacts</router-link>
        </div>
        <div class="nav__item">
          <router-link to="/faq" class="nav__item-link" :class="{ active: this.$route.path === '/faq' }">FAQ</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'xNav',
  data() {
    return {
      currentBrowser: '',
    };
  },
  props: {
    isInnerPage: {
      type: Boolean,
    },
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

<style scoped lang="scss">
.nav {
  &__container {
    padding: 14px 0;
  }

  &__list {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &-wrapper {
      gap: 48px;
    }
  }

  &__item-link {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.16px;
    color: #fff;
    font-family: 'Jost', sans-serif;
    cursor: pointer;

    &:hover {
      border-bottom: 1px solid #fff;
      transition: 2ms all ease-in-out;
    }
  }
}

.active {
  border-bottom: 1px solid #fffaf3;
}
</style>
