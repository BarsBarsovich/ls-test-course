<template>
  <label class="checkbox">
    <input
      type="checkbox"
      class="custom-checkbox"
      id="filterItem"
      :value="item"
      v-model="toggle"
      @change="$emit('onChange', item, toggle)"
    />
    <span>{{ item }}</span>
  </label>
</template>

<script>
export default {
  name: 'xCheckbox',
  props: {
    item: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      toggle: false,
      data: this.item,
    };
  },
};
</script>

<style scoped lang="scss" src="./checkbox.scss"></style>
