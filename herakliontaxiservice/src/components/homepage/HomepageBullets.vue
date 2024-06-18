<template>
  <swiper
    :grabCursor="false"
    :loop="true"
    :direction="'vertical'"
    :autoplay="{
      delay: 2000,
      disableOnInteraction: false,
    }"
    :modules="modules"
    :allowTouchMove="false"
    class="swiperBullets"
  >
    <swiper-slide class="bulletPanel">
      <h3>Professional Service</h3>
      <h4>
        Our driver is always on time and we guarantee your safety during and
        after using our service
      </h4>
    </swiper-slide>
    <swiper-slide class="bulletPanel">
      <h3>Not located in Crete yet</h3>
      <h4>
        Contact us and we’ll wait for you at the airport or port with a sign
      </h4>
    </swiper-slide>
    <SwiperSlide class="bulletPanel">
      <h3>Prepayment</h3>
      <h4>
        There is no need to prepay anything for your trip. Hop on and pay
        afterwards.
      </h4>
    </SwiperSlide>
    <swiper-slide class="bulletPanel">
      <h3>Possibility of waiting</h3>
      <h4>
        We can wait for you while you visit waterparks, museums, the aquarium or
        the dinosaur park for a special price
      </h4>
    </swiper-slide>
    <swiper-slide class="bulletPanel">
      <h3>Guided tours</h3>
      <h4>We can provide you with tours to various locations</h4>
    </swiper-slide>
    <swiper-slide class="bulletPanel">
      <h3>Child friendly transportation</h3>
      <h4>
        Travel safely with our baby seats with up to four passengers per taxi
      </h4>
    </swiper-slide>
    <swiper-slide class="bulletPanel">
      <h3>I want this experience. Where do I start?</h3>
      <h4>
        Call us on +30 694 843 7799(kitrino) or email us on
        taxiservice@something.gr(kitrino)
      </h4>
    </swiper-slide>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/effect-cards";
import "swiper/css";
import { Autoplay } from "swiper/modules";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../../styles/header.scss";
@import "../../styles/homepage.scss";
</style>
