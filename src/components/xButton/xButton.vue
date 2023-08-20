<template>
  <button
    class="button"
    v-bind:class="{ button_green: isGreen, button_wide: isWide, button_reset: isReset, button_smal: isSmall, button_white: isWhite }"
    v-bind:type="btnType"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'xButton',
  props: {
    text: {
      type: String,
      required: true,
    },
    buttonType: {
      text: String,
    },
    isGreen: {
      type: Boolean,
    },
    isSimple: {
      type: Boolean,
    },
    isWide: {
      type: Boolean,
    },
    isReset: {
      type: Boolean,
    },
    isSmall: {
      type: Boolean,
    },
    isWhite: {
      type: Boolean,
    },
  },
  data() {
    return {
      btnType: '',
    };
  },
  mounted() {
    this.btnType = this.buttonType ? this.buttonType : 'button';
  },
};
</script>

<style scoped lang="scss" src="./button.scss"></style>
