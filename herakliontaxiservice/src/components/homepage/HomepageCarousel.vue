<template>
  <div class="famousDestinations">
    <h2>Famous Destinations</h2>
    <swiper
      :loop="true"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      :modules="modules"
      :slides-per-view="6"
      :space-between="16"
    >
      <swiper-slide class="destinationCard">
        <div class="destinationWrapper">
          <img
            src="../../assets/destinations/heraklion.jpg"
            alt="heraklion-photo"
            class="carouselImg"
          />
          <h5>Heraklion</h5>
        </div>
      </swiper-slide>
      <swiper-slide class="destinationCard">
        <div class="destinationWrapper">
          <img
            src="../../assets/destinations/Chania.jpg"
            alt="chania-photo"
            class="carouselImg"
          />
          <h5>Chania</h5>
        </div>
      </swiper-slide>
      <swiper-slide class="destinationCard">
        <div class="destinationWrapper">
          <img
            src="../../assets/destinations/Rethymno.jpg"
            alt="rethymno-photo"
            class="carouselImg"
          />
          <h5>Rethymnon</h5>
        </div>
      </swiper-slide>
      <swiper-slide class="destinationCard">
        <div class="destinationWrapper">
          <img
            src="../../assets/destinations/Agios-Nikolaos.jpg"
            alt="AgiosNikolaos-photo"
            class="carouselImg"
          />
          <h5>Agios Nikolaos</h5>
        </div>
      </swiper-slide>
      <swiper-slide class="destinationCard">
        <div class="destinationWrapper">
          <img
            src="../../assets/destinations/Chersonysos.jpg"
            alt="chersonysos-photo"
            class="carouselImg"
          />
          <h5>Chersonissos</h5>
        </div>
      </swiper-slide>
      <swiper-slide class="destinationCard">
        <div class="destinationWrapper">
          <img
            src="../../assets/destinations/elafonisi.jpg"
            alt="elafonisi-photo"
            class="carouselImg"
          />
          <h5>Elafonisi</h5>
        </div>
      </swiper-slide>
      <swiper-slide class="destinationCard">
        <div class="destinationWrapper">
          <img
            src="../../assets/destinations/elounda.jpg"
            alt="elounda-photo"
            class="carouselImg"
          />
          <h5>Elounda</h5>
        </div>
      </swiper-slide>
      <swiper-slide class="destinationCard">
        <div class="destinationWrapper">
          <img
            src="../../assets/destinations/Falasarna.jpg"
            alt="falasarna-photo"
            class="carouselImg"
          />
          <h5>Falasarna</h5>
        </div>
      </swiper-slide>
      <swiper-slide class="destinationCard">
        <div class="destinationWrapper">
          <img
            src="../../assets/destinations/loutro.jpg"
            alt="loutro-photo"
            class="carouselImg"
          />
          <h5>Loutro</h5>
        </div>
      </swiper-slide>
    </swiper>
  </div>
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
