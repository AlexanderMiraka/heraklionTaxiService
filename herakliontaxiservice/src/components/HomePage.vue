<template>
  <hp-teaser></hp-teaser>
  <basic-card class="faq-slider">
    <homepage-bullets></homepage-bullets>
    <homepage-faq></homepage-faq>
  </basic-card>
  <basic-card>
    <homepage-carousel></homepage-carousel>
  </basic-card>
</template>
<script>
import HpTeaser from "./homepage/HpTeaser.vue";
import HomepageBullets from "./homepage/HomepageBullets.vue";
import HomepageFaq from "./homepage/HomepageFaq.vue";
import HomepageCarousel from "./homepage/HomepageCarousel.vue";
export default {
  components: {
    HpTeaser,
    HomepageBullets,
    HomepageFaq,
    HomepageCarousel,
  },
};
</script>
<style lang="scss" scoped>
@import "../styles/homepage.scss";
</style>
