<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__container">
        <div class="footer__form-wrapper">
          <p class="footer__title">Follow us to be the first to know about the latest updates:</p>
          <form class="footer__form">
            <div class="footer__form-row">
              <input type="text" class="input" placeholder="Email address" />
              <XButton text="send" />
            </div>
            <div class="footer__form-row">
              <input type="checkbox" class="checkbox" />
              <span class="footer__form-text">
                I agree with the
                <router-link to="#" class="footer__form-link">Privacy & Cookie Policy</router-link>
                of Loft Space
              </span>
            </div>
          </form>
        </div>
        <div class="footer__links">
          <div class="footer__links-container">
            <ul class="footer__links-list">
              <li class="footer__links-item">
                <router-link to="#">Collections</router-link>
              </li>
              <li class="footer__links-item">
                <router-link to="/catalog">Catalog</router-link>
              </li>
              <li class="footer__links-item">
                <router-link to="/gallery">Gallery</router-link>
              </li>
              <li class="footer__links-item">
                <router-link to="/page">Articles</router-link>
              </li>
            </ul>
            <ul class="footer__links-list">
              <li class="footer__links-item">
                <router-link to="/about">About us</router-link>
              </li>
              <li class="footer__links-item">
                <router-link to="/contacts">Contacts</router-link>
              </li>
              <li class="footer__links-item">
                <router-link to="/faq">FAQ</router-link>
              </li>
            </ul>
            <ul class="footer__links-list">
              <li class="footer__links-item">
                <router-link to="/page">Terms</router-link>
              </li>
              <li class="footer__links-item">
                <router-link to="/page">Privacy</router-link>
              </li>
              <li class="footer__links-item">
                <router-link to="/page">
                  Shipping &
                  <br />
                  Returns
                </router-link>
              </li>
            </ul>
            <ul class="footer__links-list">
              <li class="footer__links-item">
                <div class="wrapper">
                  <img src="@/assets/inst.svg" alt="instagram logo" class="social-icon" />
                  <a href="https://instagram.com" target="_blank">Instagram</a>
                </div>
              </li>
              <li class="footer__links-item">
                <div class="wrapper">
                  <img src="@/assets/fb.svg" alt="facebook logo" class="social-icon" />
                  <a href="https://facebook.com/" target="_blank">Facebook</a>
                </div>
              </li>
              <li class="footer__links-item">
                <div class="wrapper">
                  <img src="@/assets/pinterest.svg" alt="pinterest logo" class="social-icon social-icon--big-margin" />
                  <a href="https://pinterest.com" target="_blank">Pinterest</a>
                </div>
              </li>
              <li class="footer__links-item">
                <div class="wrapper">
                  <img src="@/assets/youtube.svg" alt="youtube logo" class="social-icon social-icon--big-margin" />
                  <a href="https://www.youtube.com/" target="_blank">Youtube</a>
                </div>
              </li>
            </ul>
          </div>
          <div class="footer__contact-info">
            <div class="footer__contacts">
              <img src="@/assets/user-card.svg" alt="" class="user-card" />
              <div class="footer__contacts-personal-info">
                <a href="tel:+375291469822" class="link">+375-29 146 98 22</a>
                <a href="mailto:peace@example.com" class="link">peace@example.com</a>
              </div>
            </div>
            <div class="footer__address">
              <span class="footer__address-location">
                Belarus, Minsk
                <br />
                Golden Hill str.1
              </span>
            </div>
            <div class="footer__logo">
              <router-link to="/" class="footer__logo-link">Loft space</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import XButton from '@/components/xButton/xButton.vue';

export default {
  name: 'xFooter',
  components: { XButton },
};
</script>

<style scoped lang="scss">
@import 'src/media';

.footer {
  margin-top: 60px;
  min-height: 264px;
  padding-bottom: 60px;

  &__container {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    @include tablet {
      flex-direction: column;
    }
    @include desktop {
      flex-direction: column;
    }
  }

  &__title {
    font-family: 'Montserrat', sans-serif;
    font-size: 40px;
    font-style: normal;
    font-weight: 300;
    max-width: 403px;
    @include desktop {
      max-width: unset;
    }
  }

  &__form {
    margin-top: 50px;

    &-wrapper {
      width: 30%;
      @include tablet {
        width: 100%;
      }
      @include desktop {
        width: 100%;
      }
    }

    &-row {
      display: flex;

      &:first-child {
        margin-bottom: 5px;
      }
    }

    &-text {
      padding-left: 5px;
      font-size: 12px;
      font-weight: 400;
      color: rgba(10, 10, 10, 0.89);
    }

    &-link {
      text-decoration: underline;
      color: rgba(10, 10, 10, 0.89);
    }
  }

  &__links {
    margin-left: 154px;

    width: 70%;
    @include tablet {
      width: 100%;
      margin-left: 0;
      margin-top: 20px;
    }

    @include desktop {
      width: 100%;
      margin-left: 0;
      margin-top: 20px;
    }

    &-item {
      margin-bottom: 20px;

      & a {
        color: rgba(10, 10, 10, 0.89);
      }

      &:last-child {
        margin-bottom: 0;
      }
    }

    &-container {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
  }

  &__contact-info {
    display: flex;
    align-items: center;
    margin-top: 34px;
    justify-content: flex-end;
    @include tablet {
      flex-direction: column;
      justify-content: center;
    }
  }

  &__contacts {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    &-personal-info {
      margin-left: 5px;
    }
  }

  &__address {
    margin-left: 30px;

    &-location {
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      color: rgba(10, 10, 10, 0.89);
    }
  }

  &__logo {
    margin-left: 30px;

    &-link {
      text-transform: uppercase;
      font-family: 'Raleway', sans-serif;
      font-size: 48px;
      font-weight: 300;
      color: #836142;
    }
  }
}

.input {
  padding: 15px;
  border-radius: 10px;
  border: 1px solid rgba(10, 10, 10, 0.89);
  background: #f9f9f9;
  margin-right: 15px;
  width: 283px;
  max-width: 283px;
  @include desktop {
    max-width: unset;
    width: 100%;
  }
}

.checkbox {
  margin: 0;
}

.social-icon {
  width: 24px;
  height: 24px;
  margin-right: 5px;

  &--big-margin {
    margin-right: 13px;
  }
}

.wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}

.link {
  color: rgba(10, 10, 10, 0.89);
  font-size: 16px;
  display: block;
}
</style>
