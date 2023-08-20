<template>
  <div class="layout">
    <div class="layout__header">
      <xHeader />
    </div>
    <div class="layout__content">
      <div class="container">
        <div class="faq">
          <h1 class="title">Frequently asked questions</h1>
        </div>
      </div>
    </div>
    <div class="layout__footer">
      <xFooter />
    </div>
  </div>
</template>

<script>
import XHeader from '@/components/xHeader.vue';
import XFooter from '@/pages/sections/footer.vue';

export default {
  name: 'faq',
  components: { XFooter, XHeader },
};
</script>
<style scoped lang="scss">
.faq {
  margin-top: 80px;
}
</style>
