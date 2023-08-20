<template>
  <div class="layout">
    <div class="layout__header">
      <xHeader />
    </div>
    <div class="layout__content">
      <div class="container">
        <div class="about">
          <h1 class="title about__title">Store of stylish and modern furniture in Minsk</h1>
          <div class="about__gallery">
            <div class="about__gallery-logo">
              <img src="@/assets/about-gallery-logo.png" alt="" />
            </div>
            <div class="about__gallery-description">
              <h2 class="about__subtitle">Our story</h2>
              <p class="about__text">
                Loft Space is an industrial design brand which in one year we have grown from a small company to one of the most
                recognizable and popular brands in our country and have 4 points throughout Belarus.
              </p>
              <p class="about__text">We creates bespoke classic and contemporary furniture in all types of materials.</p>
              <p class="about__text">The company monitors quality and focuses on uniqueness, but at the same time preserving traditions.</p>
              <p class="about__text">Основной уклон в работе – минимализм и продуманные решения с целью экономии вашего пространства.</p>
            </div>
          </div>
        </div>
        <div class="benefits">
          <div class="benefits__list">
            <div class="benefits__item">
              <p class="benefits__item-title">It's Style</p>
              <p class="benefits__item-desc">
                Let’s face it: you’re not going to buy a piece of furniture you don’t like the look of. You’ll be buying furniture that
                suits your unique tastes and compliments your space. Consider buying furniture with a simple, clean-cut aesthetic.
              </p>
              <img src="@/assets/about-benefits-1.png" class="benefits__item-logo" alt="" />
            </div>
            <div class="benefits__item">
              <p class="benefits__item-title">It is Сomfor</p>
              <p class="benefits__item-desc benefits__item-desc--wide">
                Also, one of the main goals of furniture is not just to emphasize your design, and be comfortable to use, to bring you
                pleasure and peace of mind. Our furniture is not deprived of this, you can come to our showrooms and see for yourself by
                testing our exhibited products.
              </p>
              <img src="@/assets/about-benefits-2.png" class="benefits__item-logo benefits__item-logo--wide" alt="" />
            </div>
            <div class="benefits__item">
              <p class="benefits__item-title">It's Quality</p>
              <p class="benefits__item-desc">
                Quality is what makes our customers come to us again and again. We not only guarantee that your furniture will serve you for
                many years, but we also provide a guarantee for some of our products.
              </p>
              <img src="@/assets/about-benefits-3.png" class="benefits__item-logo" alt="" />
            </div>
          </div>
        </div>
        <div class="visit-us">
          <h3 class="title">Better to see live than in the photo</h3>
          <div class="visit-us__container">
            <div class="visit-us__description">
              <p class="visit-us__title">Visit our showrooms</p>
              <p class="visit-us__subtitle">
                We invite you to visit our showrooms to get to know our furniture better and test it, we will be glad to see you.
              </p>
              <div class="visit-us__btn-wrapper">
                <router-link to="/page">
                  <xButton text="Our showrooms" />
                </router-link>
              </div>
            </div>
            <div class="visit-us__gallery">
              <img src="@/assets/visit-us-1.png" alt="" class="visit-us__gallery-logo" />
              <img src="@/assets/visit-us-2.png" alt="" class="visit-us__gallery-logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="layout__footer">
      <xFooter />
    </div>
  </div>
</template>

<script>
import XFooter from '@/pages/sections/footer.vue';
import XHeader from '@/components/xHeader.vue';
import XButton from '@/components/xButton/xButton.vue';

export default {
  name: 'aboutPage',
  components: { XButton, XHeader, XFooter },
};
</script>

<style scoped lang="scss">
.about {
  &__gallery {
    display: grid;
    grid-template-columns: [logo] 2fr [desc]1fr;
    gap: 10px;
    margin-top: 30px;

    &-logo {
      grid-area: logo;

      & img {
        width: 100%;
        object-fit: contain;
      }
    }

    &-description {
      grid-area: desc;
      //width: 40%;
      border-radius: 10px;
      background: #dde1d8;
      padding: 40px 40px 121px 40px;
      height: 439px;
    }
  }

  &__subtitle {
    color: #2f675f;
    font-family: 'Montserrat', sans-serif;
    font-size: 40px;
    font-weight: 300;
  }

  &__text {
    margin-top: 10px;
    color: #2f675f;
    /* All text */
    font-size: 16px;
    font-weight: 400;
  }
}

.benefits {
  &__list {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 30px;
  }

  &__item {
    max-width: 30%;

    &-title {
      color: rgba(10, 10, 10, 0.89);
      font-family: 'Montserrat', sans-serif;
      font-size: 40px;
      font-weight: 300;
    }

    &-desc {
      color: rgba(10, 10, 10, 0.89);
      font-size: 16px;
      font-weight: 400;
      margin-top: 10px;
      max-width: 322px;
      min-height: 138px;
      text-align: justify;

      &--wide {
        max-width: unset;
        text-align: justify;
      }
    }

    &-logo {
      margin-top: 30px;
      border-radius: 10px;
      height: 306px;

      &--wide {
        max-width: 396px;
      }
    }
  }
}

.visit-us {
  margin-top: 71px;

  &__container {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
    margin-top: 30px;
  }

  &__title {
    color: rgba(10, 10, 10, 0.89);
    font-family: 'Montserrat', sans-serif;
    font-size: 40px;
    font-weight: 300;
  }

  &__subtitle {
    color: rgba(10, 10, 10, 0.89);
    font-size: 16px;
    font-weight: 400;
    margin-top: 10px;
  }

  &__btn-wrapper {
    margin-top: 73px;
  }

  &__description {
    border-radius: 10px;
    background: #f2f0ea;
    padding: 37px;
  }

  &__gallery {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
  }
}
</style>
