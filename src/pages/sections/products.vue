<template>
  <section class="products" v-if="isMainPage">
    <div class="container">
      <div class="products__title">
        <div class="arrow" @click="movePrev()">
          <img src="@/assets/expand-left.svg" alt="" class="arrow-icon" />
        </div>
        <h1 class="title title--centered">Our featured products</h1>
        <div class="arrow arrow--right" @click="moveNext()">
          <img src="@/assets/expand-right.svg" alt="" class="arrow-icon" />
        </div>
      </div>
      <div class="products__content">
        <div class="card-list" :style="{ transform: 'translateX(-' + currentPosition + 'px)' }">
          <div class="card" v-for="(productCard, index) in productsCard" :key="productCard.id">
            <div class="div" v-if="index <= 7" @click="navigate(index, productCard.id)">
              <img
                :src="
                  isMobile && (index === 1 || index === 3)
                    ? 'https://materialyinfo.ru/wp-content/uploads/2017/12/Derevyannyie-stulya-84.jpg'
                    : require('@/assets' + productCard.image)
                "
                alt=""
                class="card__icon"
              />
              <div class="card__info">
                <p class="card__info-name">{{ productCard.name }}</p>
                <p class="card__info-cost">{{ changePrice(index, productCard.price) }} $</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="products" v-if="!isMainPage">
    <div class="products__title">
      <div class="arrow" @click="movePrev()">
        <img src="@/assets/expand-left.svg" alt="" class="arrow-icon" />
      </div>
      <h1 class="title" v-bind:class="{ 'title--centered': isCentered }">{{ title }}</h1>
      <div class="arrow arrow--right" @click="moveNext()">
        <img src="@/assets/expand-right.svg" alt="" class="arrow-icon" />
      </div>
    </div>
    <div class="products__content">
      <div class="card-list" :style="{ transform: 'translateX(-' + currentPosition + 'px)' }">
        <div class="card" v-for="(productCard, index) in productsCard" :key="productCard.id">
          <div class="div" v-if="index <= 7" @click="navigate(index, productCard.id)">
            <img
              :src="
                isMobile && (index === 1 || index === 3)
                  ? 'https://materialyinfo.ru/wp-content/uploads/2017/12/Derevyannyie-stulya-84.jpg'
                  : require('@/assets' + productCard.image)
              "
              alt=""
              class="card__icon"
            />

            <div class="card__info">
              <p class="card__info-name">{{ productCard.name }}</p>
              <p class="card__info-cost">{{ changePrice(index, productCard.price) }} $</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'products',
  data() {
    return {
      sliderWith: 0,
      currentPosition: 0,
      containerWidth: 0,
      isMobile: false,
    };
  },
  props: {
    isMainPage: {
      type: Boolean,
    },
    title: {
      type: String,
    },
    productsCard: {
      type: Array,
    },
    isCentered: {
      type: Boolean,
    },
  },
  methods: {
    movePrev() {
      if (this.currentPosition > 0) {
        this.currentPosition -= this.containerWidth;
      }
    },
    moveNext() {
      let tempPosition = this.currentPosition;
      tempPosition += this.containerWidth;

      if (tempPosition < this.sliderWith) {
        this.currentPosition += this.containerWidth;
      }
    },
    changePrice(index, price) {
      if (index === 0 || index === 3) {
        return 2 * price;
      }
      return price;
    },
    navigate(index, id) {
      // если это первая карточка, то переходим в деталку
      if (index === 0) {
        this.$router.push({
          path: '/catalog',
          query: {
            id: id,
          },
        });
      } else if (index === 1) {
        // при нажатии на карточку дивана переходим на страницу с ошибкой
        this.$router.push('/page');
      }
    },
  },
  mounted() {
    this.sliderWith = document.querySelector('.card-list').clientWidth;
    this.containerWidth = document.querySelector('.products__content').clientWidth;
    this.isMobile = document.querySelector('#app').clientWidth < 1200;
    console.log(this.isMobile);
  },
};
</script>

<style scoped lang="scss">
@import '/src/media';

.products {
  margin-top: 71px;

  &__title {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  &__content {
    margin-top: 30px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 10px;
    overflow: hidden;
  }
}

.arrow {
  margin-right: 190px;
  margin-left: 171px;
  cursor: pointer;
  @include desktop {
    display: none;
  }

  &--right {
    margin-left: 190px;
    @include desktop {
      display: none;
    }
  }
}

.card {
  width: 33%;
  @include desktop {
    width: 100%;
  }

  &-list {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 10px;
    width: auto;
    transition: 1s all ease-in-out;
    @include desktop {
      flex-wrap: wrap;
    }
  }

  &__icon {
    max-width: 430px;
    max-height: 600px;
    min-width: 430px;
    min-height: 600px;
    object-fit: cover;
    border-radius: 10px;
    @include desktop {
      max-width: unset;
      max-height: unset;
      min-width: unset;
      min-height: unset;
      width: 100%;
    }
  }

  &__info {
    margin-top: 10px;
    border-radius: 10px;
    background: #c3aa92;
    text-align: center;
    color: #f2f0ea;
    padding: 15px 0;

    &-name {
      font-size: 16px;
      font-weight: 400;
    }

    &-cost {
      font-family: 'Montserrat', sans-serif;
      font-size: 28px;
      font-weight: 500;
    }
  }
}
</style>
