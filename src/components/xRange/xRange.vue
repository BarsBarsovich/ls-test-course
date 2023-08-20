<template>
  <div class="range">
    <div class="range__row">
      <div class="range__input">
        <input type="number" :placeholder="minValue" class="range__input-control" :value="minValue" @input="inputMinChange" />
        <span>from</span>
      </div>
      <div class="range__input">
        <input
          type="number"
          :placeholder="maxPrice"
          :max="maxPrice"
          class="range__input-control"
          :value="maxValue"
          @input="inputMaxChange"
        />
        <span>to</span>
      </div>
    </div>
    <div class="range-slider">
      <input type="range" min="0" value="0" :max="maxPrice - 1" name="" id="" @input="minValueChange" ref="minValue" />
      <input type="range" min="1" :value="maxPrice" :max="maxPrice" name="" id="" @input="maxValueChange" ref="maxValue" />

      <div class="track-wrapper">
        <div class="track"></div>
        <div class="range-between" ref="rangeBetween"></div>
        <div class="thumb left" ref="thumbLeft"></div>
        <div class="thumb right" ref="thumbRight"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'xRange',
  props: {
    maxPrice: {
      type: Number,
      required: true,
    },
    currentMaxValue: {
      type: Number,
    },
    currentMinValue: {
      type: Number,
    },
  },
  data() {
    return {
      minValue: this.currentMinValue || 0,
      maxValue: this.currentMaxValue || null,
    };
  },
  methods: {
    minValueChange() {
      const maximum = Math.min(parseInt(this.$refs.minValue.value), parseInt(this.$refs.maxValue.value) - 1);
      this.$refs.thumbLeft.style.left =
        ((maximum - this.$refs.minValue.min) / (this.$refs.maxValue.max - this.$refs.minValue.min)) * 100 + '%';

      this.minValue = maximum;
      this.$emit('changePrice', this.minValue, this.maxValue);
    },
    maxValueChange() {
      const minimum = Math.max(parseInt(this.$refs.maxValue.value), parseInt(this.$refs.minValue.value) + 1);
      const percent = 100 - ((minimum - this.$refs.minValue.min) / (this.$refs.maxValue.max - this.$refs.maxValue.min)) * 100 + '%';
      this.$refs.thumbRight.style.right = percent;
      if (parseInt(percent) === 0) {
        this.maxValue = this.maxPrice;
        return;
      }

      this.maxValue = minimum;
      this.$emit('changePrice', this.minValue, this.maxValue);
    },
    inputMinChange(e) {
      this.minValue = e.target.value;
      const maximum = Math.min(parseInt(e.target.value), parseInt(this.$refs.maxValue.value) - 1);
      this.$refs.thumbLeft.style.left =
        ((maximum - this.$refs.minValue.min) / (this.$refs.maxValue.max - this.$refs.minValue.min)) * 100 + '%';
      this.$emit('changePrice', e.target.value, this.maxValue || this.maxPrice);
    },
    inputMaxChange(e) {
      this.maxValue = e.target.value;
      const minimum = Math.max(parseInt(e.target.value), parseInt(this.$refs.minValue.value) + 1);
      this.$refs.thumbRight.style.right =
        100 - ((minimum - this.$refs.minValue.min) / (this.$refs.maxValue.max - this.$refs.maxValue.min)) * 100 + '%';
      this.$emit('changePrice', this.minValue, e.target.value);
    },
  },
};
</script>

<style scoped lang="scss" src="./range.scss"></style>
