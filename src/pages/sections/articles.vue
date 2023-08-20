<template>
  <section class="articles">
    <div class="container">
      <h1 class="title">Gallery & Articles</h1>
      <div class="articles__wrapper">
        <div class="articles__description">
          <h2 class="articles__title">Check out our products in our gallery</h2>
          <router-link to="/about">
            <XButton text="Learn more" :isGreen="true" />
          </router-link>
        </div>
        <div class="articles__icons">
          <div class="articles__icons-wrapper">
            <img src="@/assets/chair.png" alt="chair" />
            <img src="@/assets/pillow.png" alt="pillow" />
          </div>
          <div class="articles__icons-wrapper">
            <img src="@/assets/chair-2.png" alt="chair" />
            <img src="@/assets/bad.png" alt="bad" />
          </div>
        </div>
      </div>
      <div class="articles__wrapper articles__wrapper--reversed">
        <div class="articles__description">
          <h2 class="articles__title">Читайте наши статьи, чтобы быть в курсе последних новостей</h2>
          <router-link to="/page">
            <XButton text="Read all" />
          </router-link>
        </div>
        <div class="articles__icons">
          <div class="articles__icons-wrapper articles__icons-wrapper--reversed">
            <img src="@/assets/chair.png" alt="chair" />
            <img src="@/assets/pillow.png" alt="pillow" />
          </div>
          <div class="articles__icons-wrapper articles__icons-wrapper--reversed">
            <img src="@/assets/chair-2.png" alt="chair" />
            <img src="@/assets/bad.png" alt="bad" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import XButton from '@/components/xButton/xButton.vue';

export default {
  name: 'articles',
  components: { XButton },
};
</script>

<style scoped lang="scss">
.articles {
  margin-top: 79px;

  &__description {
    padding-left: 40px;
  }

  &__title {
    padding: 40px 0 30px 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 40px;
    font-weight: 300;
    max-width: 494px;
  }

  &__wrapper {
    margin-top: 21px;
    width: 100%;
    background: #dde1d8;
    border-radius: 10px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    &--reversed {
      flex-direction: row-reverse;
      margin-top: 8px;
      justify-content: flex-end;
    }
  }

  &__icons-wrapper {
    display: flex;
    gap: 8px;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 10px 10px 0 0;

    &:last-child {
      padding-bottom: 10px;
    }

    &--reversed {
      padding-left: 10px;
    }
  }
}
</style>
