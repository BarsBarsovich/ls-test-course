<template>
  <section class="collections">
    <div class="container">
      <div class="collections__title">
        <div class="arrow">
          <img src="@/assets/expand-left.svg" alt="" class="arrow-icon" />
        </div>
        <h1 class="title">Our collection</h1>
        <div class="arrow arrow--right">
          <img src="@/assets/expand-right.svg" alt="" class="arrow-icon" />
        </div>
      </div>
      <ul class="collections__list">
        <li class="collections__item">
          <img src="@/assets/collection-1.png" alt="" class="collections__item-logo" />
          <span class="collections__item-text">Urban house</span>
        </li>
        <li class="collections__item">
          <img src="@/assets/collection-2.png" alt="" class="collections__item-logo" />
          <span class="collections__item-text">Modum</span>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
  name: 'collections',
};
</script>

<style scoped lang="scss">
.collections {
  margin-top: 70px;

  &__title {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  &__list {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
    margin-top: 30px;
  }

  &__item {
    width: 50%;
    position: relative;

    &-logo {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    &-text {
      position: absolute;
      left: 25px;
      bottom: 25px;
      font-family: 'Montserrat', sans-serif;
      font-size: 40px;
      font-weight: 300;
      color: #fffaf3;
    }
  }
}

.arrow {
  margin-right: 300px;
  margin-left: 171px;
  cursor: pointer;

  &--right {
    margin-left: 300px;
  }
}
</style>
