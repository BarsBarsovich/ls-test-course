<template>
  <div class="layout">
    <div class="layout__header">
      <xHeader />
    </div>
    <div class="layout__content">
      <div class="error">
        <div class="error__title">
          <h1 class="title">Page Not Found (Error 404)</h1>
          <p class="error__text">
            Unfortunately, the page you are looking for cannot be found. It may have been moved, deleted, or temporarily unavailable.
          </p>
        </div>
        <div class="error__steps">
          <p>What can you do next?</p>
          <ul class="error__list">
            <li class="error__list-item">
              1. Check the correctness of the URL you entered. Make sure you haven't made any typos or errors.
            </li>
            <li class="error__list-item">
              2. Return to the homepage of our online furniture store and use the navigation menu or search to find the furniture or
              information you're looking for.
            </li>
            <li class="error__list-item">
              3. Contact our customer support if you need additional assistance or if you believe this is an error.
            </li>
          </ul>
          <p class="error__text">
            We apologize for any inconvenience caused by this error. We are continuously working to improve our online furniture store to
            provide you with the best shopping experience. Thank you for your understanding and interest in our furniture products!
          </p>
        </div>
      </div>
    </div>
    <div class="layout__footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import XHeader from '@/components/xHeader.vue';
import Footer from '@/pages/sections/footer.vue';

export default {
  name: 'pageNotFound',
  components: { XHeader, Footer },
};
</script>

<style scoped lang="scss">
@import 'src/media';

.error {
  width: 100%;
  height: 100%;

  &__title {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 50%;
    @include tablet {
      height: 29%;
    }
  }

  &__text {
    margin-top: 15px;
    max-width: 80%;
    text-align: center;
  }

  &__steps {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    margin-top: 30px;
    margin-left: 35px;
  }

  &__list {
    margin-top: 30px;
  }
}
</style>
