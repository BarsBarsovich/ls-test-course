<template>
  <div class="layout">
    <div class="layout__header">
      <xHeader />
    </div>
    <div class="layout__content">
      <div class="container">
        <div class="faq">
          <h1 class="title">Frequently asked questions</h1>
          <div class="faq__content">
            <p>
              We have compiled some frequently asked questions from our customers to help provide you with additional information about our
              online furniture store in Minsk. If you have any other questions not listed here, please feel free to contact us.
            </p>
            <p class="question">1. How do I place an order?</p>
            <p>
              To place order, simply select the furniture you like from our website add it to your cart. Then, follow the instructions to
              complete your order, including providing necessary contact information and the delivery address.
            </p>
            <p class="question">2. What payment methods do you accept?</p>
            <p>
              We accept the following payment methods: credit cards (Visa, Mastercard, etc.), electronic payments, and bank transfers.
              Choose the most convenient payment method for you during the checkout процесс.
            </p>
            <p class="question">3. What are the available delivery options?</p>
            <p class="question">
              Мы offer convenient delivery options for your order. We work with reliable delivery services that will deliver the furniture
              directly to your address in Minsk. Choose the suitable delivery option during the order placement.
            </p>
            <p class="question">4. Can I return or exchange a product?</p>
            <p class="question">
              Yes, we have a return and exchange policy in place. If you are not completely satisfied with your purchase, you can return the
              product within a specified period or exchange it for another item. Detailed information about our return and exchange policy
              can be found on website or by contacting our customer support.
            </p>
            <p class="question">5. How can I contact your customer support?</p>
            <p class="question">
              We are always here to assist you. You can contact our customer support via phone, email, or by filling out the contact form on
              our website. Our friendly team will be happy to answer all your questions and help resolve any issues you may encounter.
            </p>

            <p>
              We hope that these answers provide you with the necessary information about our online furniture store in Minsk. If you have
              any further questions, please do not hesitate to reach out to us. We strive to provide you with high-quality products and
              excellent further questions, please do not hesitate to reach out to us. We strive to provide you with high-quality products
              and excellent service.
            </p>
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

export default {
  name: 'faq',
  components: { XFooter, XHeader },
};
</script>
<style scoped lang="scss">
.faq {
  margin-top: 80px;

  &__container {
    text-align: center;
    max-width: 100%;
  }

  &__content {
    margin-top: 30px;
    max-width: 80%;
  }
}

.question {
  font-weight: 800;
}
</style>
