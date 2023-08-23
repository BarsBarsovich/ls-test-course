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
            <img src="@/assets/chair.png" alt="chair" class="articles__icons-img" />
            <img src="@/assets/pillow.png" alt="pillow" class="articles__icons-img" />
          </div>
          <div class="articles__icons-wrapper">
            <img src="@/assets/chair-2.png" alt="chair" class="articles__icons-img" />
            <img src="@/assets/bad.png" alt="bad" class="articles__icons-img" />
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
            <img src="@/assets/chair.png" alt="chair" class="articles__icons-img" />
            <img src="@/assets/pillow.png" alt="pillow" class="articles__icons-img" />
          </div>
          <div class="articles__icons-wrapper articles__icons-wrapper--reversed">
            <img src="@/assets/chair-2.png" alt="chair" class="articles__icons-img" />
            <img src="@/assets/bad.png" alt="bad" class="articles__icons-img" />
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
@import 'src/media';

.articles {
  margin-top: 79px;
  @include tablet {
    margin-top: 120px;
  }

  &__description {
    padding-left: 40px;
    @include tablet {
      padding: 40px 10px;
    }
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
    @include tablet {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    &--reversed {
      flex-direction: row-reverse;
      margin-top: 8px;
      justify-content: flex-end;
      @include tablet {
        flex-direction: column-reverse;
      }
    }
  }

  &__icons-wrapper {
    display: flex;
    gap: 8px;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 10px 10px 0 0;
    @include tablet {
      padding: 10px;
    }

    &:last-child {
      padding-bottom: 10px;
    }

    &--reversed {
      padding-left: 10px;
    }
  }

  &__icons-img {
    @include tablet {
      width: 50%;
    }
  }
}
</style>
