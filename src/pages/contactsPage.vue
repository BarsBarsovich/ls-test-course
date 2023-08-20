<template>
  <div class="layout">
    <div class="layout__header">
      <xHeader />
    </div>
    <div class="layout__content">
      <div class="container">
        <h1 class="title title--left">Contact us</h1>
        <div class="contacts">
          <div class="contacts__map">
            <img src="@/assets/map.png" alt="" class="contacts__map-picture" />
            <img src="@/assets/pin.png" alt="" class="contacts__map-pin" />
          </div>
          <div class="contacts__form">
            <form class="form">
              <div class="form__row">
                <div class="form__row-wrapper">
                  <input type="text" class="form__input" placeholder="First Name" />
                  <span class="form__input-label">First Name *</span>
                </div>
                <div class="form__row-wrapper">
                  <input type="text" class="form__input" placeholder="Last Name" />
                  <span class="form__input-label">Surname</span>
                </div>
              </div>
              <div class="form__row">
                <select class="form__select">
                  <option value="">Select your preferred type of communication</option>
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                  <option value="message">Message</option>
                </select>
              </div>
              <div class="form__row">
                <div class="form__row-wrapper">
                  <input type="text" class="form__input" placeholder="Email address" />
                  <span class="form__input-label">Email address *</span>
                </div>
                <div class="form__row-wrapper">
                  <input type="tel" class="form__input" placeholder="+375 (__) ___-__-__" />
                </div>
              </div>
              <div class="form__row">
                <textarea class="form__input form__input--wide" placeholder="Your message" v-model="message" @keyup="setValue"></textarea>
                <span class="form__counter">{{ counter }} /250</span>
              </div>
              <div class="form__row form__row--mt43">
                <XButton text="Submit message" :isWide="true" />
              </div>

              <label class="form__label">
                <input type="checkbox" />
                <span class="form__label-text">I agree with the Terms & Conditions of Loft Space</span>
              </label>
            </form>
          </div>
        </div>
        <div class="showrooms">
          <h2 class="title">Our showrooms</h2>
          <div class="showrooms__list">
            <div class="showrooms__list-item">
              <img src="@/assets/showroom-1.png" alt="" />
              <div class="showrooms__list-item-info">
                <p class="showrooms__list-item-title">Minsk</p>
                <div class="showrooms__list-item-wrapper">
                  <p>1, Golden Hill st.</p>
                  <p>I-VII 9:00 – 21:30</p>
                  <a href="tel:+375291469822" class="phone">+375 29 146-98-22</a>
                </div>
              </div>
            </div>
            <div class="showrooms__list-item">
              <img src="@/assets/showroom-2.png" alt="" />
              <div class="showrooms__list-item-info">
                <p class="showrooms__list-item-title">Brest</p>
                <div class="showrooms__list-item-wrapper">
                  <p>23, Kiseleva st.</p>
                  <p>I-VII 9:00 – 20:30</p>
                  <a href="tel:+375292469822" class="phone">+375 29 246-98-22</a>
                </div>
              </div>
            </div>
          </div>
          <div class="showrooms__list showrooms__list--no-margin">
            <div class="showrooms__list-item">
              <img src="@/assets/showroom-3.png" alt="" />
              <div class="showrooms__list-item-info">
                <p class="showrooms__list-item-title">Grodno</p>
                <div class="showrooms__list-item-wrapper">
                  <p>102, Korolia st.</p>
                  <p>102, Korolia st.</p>
                  <a href="tel:+375293469822" class="phone">+375 29 346-98-22</a>
                </div>
              </div>
            </div>
            <div class="showrooms__list-item">
              <img src="@/assets/showroom-4.png" alt="" />
              <div class="showrooms__list-item-info">
                <p class="showrooms__list-item-title">Mogilev</p>
                <div class="showrooms__list-item-wrapper">
                  <p>54, Rakovskaya st.</p>
                  <p>I-VII 9:00 – 20:30</p>
                  <a href="tel:+375292469822" class="phone">+375 29 446-98-22</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="info">
          <div class="info__wrapper">
            <div class="info__title-container">
              <p class="info__title">
                contact of main
                <br />
                office
              </p>
            </div>
            <div class="info__address">
              <p>
                Belarus, Minsk 1,
                <br />
                Golden Hill str.
              </p>
              <div class="info__contacts">
                <div class="info__contacts-phone">
                  <img src="@/assets/icon-phone.png" alt="" class="info__contacts-icon" />
                  <a href="tel:+370852002020" class="info__contact">+370 85 200 20 20</a>
                </div>
                <div class="info__contacts-email">
                  <img src="@/assets/icon-mail.svg" alt="" class="info__contacts-icon" />
                  <a href="mailto:peace@example.com" class="info__contact">peace@example.com</a>
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
import XHeader from '@/components/xHeader.vue';
import XFooter from '@/pages/sections/footer.vue';
import XButton from '@/components/xButton/xButton.vue';

export default {
  name: 'contactsPage',
  components: {
    XButton,
    XFooter,
    XHeader,
  },
  data() {
    return {
      counter: 0,
      message: '',
    };
  },
  methods: {
    setValue(v) {
      this.message = v.target.value.replace(/[^0-9]/g, '');
      this.counter = this.message.length;
    },
  },
};
</script>

<style scoped lang="scss">
.contacts {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
  margin-top: 29px;

  &__map {
    width: 50%;
    position: relative;

    &-picture {
      width: 655px;
      height: 565px;
    }

    &-pin {
      position: absolute;
      left: 268px;
      top: 181px;
    }
  }

  &__form {
    width: 50%;
  }
}

.form {
  &__row {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 10px;
    position: relative;

    &--mt43 {
      margin-top: 43px;
    }

    &:first-child {
      margin-top: 0;
    }

    &-wrapper {
      position: relative;
      max-width: 329px;
      height: 49px;
      width: 50%;
      margin-right: 10px;

      &:last-child {
        margin: 0;
      }
    }
  }

  &__input {
    border-radius: 10px;
    border: 1px solid rgba(10, 10, 10, 0.89);
    background: transparent;
    //position: relative;
    max-width: 329px;
    height: 49px;
    width: 100%;
    margin-right: 10px;
    padding: 15px;
    font-family: 'Jost', sans-serif;
    font-size: 16px;

    &--wide {
      width: 100%;
      max-width: unset;
      height: 279px;
      resize: none;
      margin-right: 0;
    }

    &:last-child {
      margin-right: 0;
    }

    &-label {
      position: absolute;
      left: 20px;
      top: -9px;
      padding: 0 5px;
      background: #fff;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      color: rgba(10, 10, 10, 0.89);
    }
  }

  &__counter {
    position: absolute;
    font-size: 12px;
    font-weight: 400;
    color: rgba(10, 10, 10, 0.89);
    right: 15px;
    bottom: 10px;
  }

  &__select {
    border-radius: 10px;
    border: 1px solid rgba(10, 10, 10, 0.89);
    background: #f9f9f9;
    width: 100%;
    height: 49px;
    padding: 15px;
  }

  &__label {
    &-text {
      padding-left: 6px;
      color: rgba(10, 10, 10, 0.89);
      font-size: 12px;
      font-weight: 400;
    }
  }
}

.showrooms {
  margin-top: 79px;

  &__list {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 27px;
    background: #f2f0ea;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    gap: 100px;
    padding: 10px;

    &--no-margin {
      border-radius: 0 0 10px 10px;
      //border-top-left-radius: 0;
      //border-bottom-left-radius: 10px;
      //border-top-right-radius: 0;
      //border-bottom-right-radius: 0;
      margin-top: 0;
    }

    &-item {
      width: 50%;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;

      &-info {
        margin-left: 21px;
      }

      &-title {
        color: #694e35;
        font-family: 'Montserrat', sans-serif;
        font-size: 40px;
        font-weight: 300;
        margin-top: 10px;
      }

      &-wrapper {
        margin-top: 30px;
        color: #694e35;
        font-size: 16px;
        font-weight: 400;
      }
    }
  }
}

.phone {
  color: #694e35;
  font-size: 16px;
  font-weight: 400;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  /* display: none; <- Crashes Chrome on hover */
  -webkit-appearance: none;
  margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

.info {
  margin-top: 33px;

  &__wrapper {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }

  &__title-container {
    //border-right: 2px solid rgba(10, 10, 10, 0.89);
  }

  &__title {
    text-transform: uppercase;
    color: rgba(10, 10, 10, 0.89);
    font-family: 'Montserrat', sans-serif;
    font-size: 40px;
    font-weight: 300;
    line-height: 100%;
    padding-right: 15px;
    border-right: 2px solid rgba(10, 10, 10, 0.89);
  }

  &__address {
    margin-left: 30px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    & p {
      color: rgba(10, 10, 10, 0.89);
      font-size: 28px;
      font-weight: 400;
      line-height: 149.5%;
      margin-top: 4px;
    }
  }

  &__contacts {
    margin-left: 30px;

    &-phone,
    &-email {
      display: flex;
      align-items: center;
    }

    &-icon {
      width: 31px;
      height: 29px;
    }
  }

  &__contact {
    color: rgba(10, 10, 10, 0.89);
    font-size: 28px;
    font-weight: 400;
    padding-left: 9px;
  }
}
</style>
