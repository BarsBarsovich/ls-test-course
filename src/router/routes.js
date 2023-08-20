import mainPage from '@/pages/mainPage.vue';
import aboutPage from '@/pages/aboutPage.vue';
import pageNotFound from '@/pages/pageNotFound.vue';
import contactsPage from '@/pages/contactsPage.vue';
import faq from '@/pages/faq.vue';
import catalogPage from '@/pages/catalog/catalogPage.vue';
import collectionsPage from '@/pages/collectionsPage.vue';
import galleryPage from '@/pages/galleryPage.vue';
import detailPage from '@/pages/detailPage/detailPage.vue';

export default [
  {
    path: '/',
    component: mainPage,
    exact: true,
  },
  {
    path: '/about',
    component: aboutPage,
  },
  {
    path: '/contacts',
    component: contactsPage,
  },
  {
    path: '/faq',
    component: faq,
  },
  {
    path: '/catalog',
    component: catalogPage,
    exact: true,
  },
  {
    path: '/catalog/:id',
    component: detailPage,
  },
  {
    path: '/collections',
    component: collectionsPage,
  },
  {
    path: '/gallery',
    component: galleryPage,
  },
  {
    path: '/page',
    component: pageNotFound,
  },
];
