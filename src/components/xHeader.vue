<template>
  <header class="header">
    <div class="container header__container">
      <xNav :isInnerPage="isInnerPage" />
    </div>
  </header>
</template>

<script>
import XNav from '@/components/xNav.vue';

export default {
  name: 'xHeader',
  components: { XNav },
  props: {
    isInnerPage: {
      type: Boolean,
    },
  },
};
</script>

<style scoped lang="scss">
.header {
  border-radius: 10px;
  background: #836142;

  &__continer {
    padding: 50px 30px;
  }
}
</style>
