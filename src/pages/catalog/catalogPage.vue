<template>
  <div class="layout">
    <div class="layout__header">
      <xHeader />
    </div>
    <div class="layout__content">
      <div class="container">
        <div class="catalog">
          <div class="catalog__filters">
            <h1 class="title title--left title--mt">Catalog</h1>
            <div class="catalog__filters-wrapper">
              <form class="catalog__form" @submit="onSubmit" @reset="onReset">
                <div class="catalog__form-categories">
                  <p class="form-title">Categories</p>
                  <div class="catalog__form-wrapper">
                    <xCheckbox :item="category" v-for="(category, index) in categories" :key="index" @onChange="getValue" />
                  </div>
                </div>
                <div class="catalog__form-prices">
                  <p class="form-title">Price, $</p>
                  <xRange :maxPrice="maxPrice" @changePrice="onChangePrice" />
                </div>
                <div class="catalog__form-collections">
                  <p class="form-title">Colors</p>
                  <div class="catalog__form-wrapper">
                    <xCheckbox :item="category" v-for="(category, index) in colors" :key="index" @onChange="getValue" />
                  </div>
                </div>
                <div class="catalog__form-materials">
                  <p class="form-title">Materials</p>
                  <div class="catalog__form-wrapper">
                    <xCheckbox :item="category" v-for="(category, index) in materials" :key="index" @onChange="getValue" />
                  </div>
                </div>
                <div class="catalog__form-collections">
                  <p class="form-title">Collections</p>
                  <div class="catalog__form-wrapper">
                    <xCheckbox :item="category" v-for="(category, index) in collections" :key="index" @onChange="getValue" />
                  </div>
                </div>
                <div class="catalog__form-sizes">
                  <p class="form-title">Sizes, cm</p>
                  <p class="form-subtitle">Height</p>
                  <xRange :maxPrice="800" />
                  <p class="form-subtitle">Width</p>
                  <xRange :maxPrice="3000" />
                  <p class="form-subtitle">Length</p>
                  <xRange :maxPrice="1500" />
                </div>
                <div class="catalog__form-button">
                  <xButton text="SAVE" buttonType="submit" :isWide="true" :isSmall="true" />
                  <xButton text="RESET" :isReset="true" buttonType="reset" />
                </div>
              </form>
            </div>
          </div>
          <div class="catalog__content">
            <div class="catalog__sort">
              <ul class="catalog__sorts-list">
                <li class="catalog__sorts-list-item" @click="sortByAsc">Low to High $</li>
                <li class="catalog__sorts-list-item" @click="sortByDesc">High to Low $</li>
                <li class="catalog__sorts-list-item">Newest to Oldest</li>
                <li class="catalog__sorts-list-item">Oldest to Newest</li>
                <li class="catalog__sorts-list-item catalog__sorts-list-item--active" @click="sortByPopular">Popular</li>
              </ul>
              <div class="catalog__search">
                <input type="text" class="input" />
                <img src="../../assets/magnifier.svg" alt="" class="catalog__search-logo" />
                <span class="catalog__search-label">search</span>
              </div>
            </div>
            <div class="wrapper" v-if="!wasSorted">
              <div class="catalog__row">
                <div class="catalog__card" v-for="card in firstRow" :key="card.id" @click="navigateTo(card.id)">
                  <catalogCard :imgUrl="card.catalogImage" :price="card.price" :title="card.name" :category="card.category" />
                </div>
              </div>
              <div class="catalog__row">
                <div class="catalog__card" v-for="card in secondRow" :key="card.id" @click="navigateTo(card.id)">
                  <catalogCard :imgUrl="card.catalogImage" :price="card.price" :title="card.name" :category="card.category" />
                </div>
              </div>
              <div class="catalog__row">
                <div class="catalog__card" v-for="card in thirdRow" :key="card.id" @click="navigateTo(card.id)">
                  <catalogCard :imgUrl="card.catalogImage" :price="card.price" :title="card.name" :category="card.category" />
                </div>
              </div>
              <div class="catalog__row">
                <div class="catalog__card" v-for="card in fourthRow" :key="card.id" @click="navigateTo(card.id)">
                  <catalogCard :imgUrl="card.catalogImage" :price="card.price" :title="card.name" :category="card.category" />
                </div>
              </div>
            </div>
            <div class="wrapper" v-if="wasSorted">
              <div class="catalog__row">
                <div class="catalog__card" v-for="card in sortedCards" :key="card.id" @click="navigateTo(card.id)">
                  <catalogCard :imgUrl="card.catalogImage" :price="card.price" :title="card.name" :category="card.category" />
                </div>
              </div>
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
import db from '../../data.json';
import lodash from 'lodash';
import CatalogCard from '@/components/catalogCard.vue';
import XCheckbox from '@/components/xCheckbox/xCheckbox.vue';
import XRange from '@/components/xRange/xRange.vue';
import XButton from '@/components/xButton/xButton.vue';

export default {
  name: 'catalogPage',
  components: { XButton, XRange, XCheckbox, CatalogCard, XHeader, XFooter },
  data() {
    return {
      firstRow: db.filter(item => [12, 11, 10].includes(item.id)),
      secondRow: db.filter(item => [9, 8, 7].includes(item.id)),
      thirdRow: [db.find(item => item.id === 3), db.find(item => item.id === 1), db.find(item => item.id === 2)],
      fourthRow: db.filter(item => [4, 5, 6].includes(item.id)),
      sortedCards: null,
      wasSorted: false,
      catalog: db,
      leftPercent: '0',
      rightPercent: '0',
    };
  },
  computed: {
    categories: () => {
      return Array.from(new Set(db.map(i => i.category)));
    },
    colors: () => {
      const _colors = [];
      db.map(i => _colors.push(i.colors.map(i => i)));
      return Array.from(new Set(_colors.flat()));
    },
    materials: () => {
      return Array.from(new Set(db.map(i => i.material)));
    },
    collections: () => {
      return Array.from(new Set(db.map(i => i.collections)));
    },
    maxPrice: () => {
      return parseInt(lodash.maxBy(db.map(i => i.price)));
    },
  },
  methods: {
    sortByDesc(e) {
      this.removeClass();
      e.target.classList.add('catalog__sorts-list-item--active');
      // тут сортировка по убыванию происходить неправильно, поэтому перевернем массив
      this.sortedCards = lodash.sortBy(this.sortedCards || db, obj => parseInt(obj.price, 10), 'desc').reverse();
      this.wasSorted = true;
    },
    sortByAsc(e) {
      this.removeClass();
      e.target.classList.add('catalog__sorts-list-item--active');
      this.sortedCards = lodash.sortBy(this.sortedCards || db, obj => parseInt(obj.price, 10), 'asc').map(i => i);
      this.wasSorted = true;
    },
    sortByPopular(e) {
      this.removeClass();
      e.target.classList.add('catalog__sorts-list-item--active');
      this.wasSorted = false;
      this.sortedCards = null;
    },
    removeClass() {
      Array.from(document.querySelectorAll('.catalog__sorts-list-item--active')).forEach(item =>
        item.classList.remove('catalog__sorts-list-item--active'),
      );
    },
    navigateTo(id) {
      if (id !== 1) {
        return;
      }
      this.$router.push(`/catalog/${id}`);
    },
    getValue(e, state) {
      console.log(e, state);
    },
    onSubmit(e) {
      e.preventDefault();
    },
    onReset() {
      this.$router.go('/catalog');
    },
    onChangePrice(minValue, maxValue = this.maxPrice) {
      debugger;
      this.sortedCards = db.filter(item => parseInt(item.price) >= parseInt(minValue) && parseInt(item.price) <= parseInt(maxValue));
      this.wasSorted = true;
    },
  },
};
</script>

<style scoped lang="scss" src="./catalog.scss"></style>
