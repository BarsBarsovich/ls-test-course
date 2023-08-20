<template>
  <products title="Same collection" :productsCard="fakeCatalog" />
</template>

<script>
import Products from '@/pages/sections/products.vue';
import fakeCatalog from '../fake.json';

export default {
  name: 'xWrapper',
  components: { Products },
  data() {
    return {
      fakeCatalog,
    };
  },
};
</script>

<style scoped lang="scss"></style>
