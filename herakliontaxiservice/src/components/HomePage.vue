<template>
    <basic-card>
        <hp-teaser></hp-teaser>
    </basic-card>
    <basic-card class="faq-slider">
        <homepage-bullets></homepage-bullets>
        <homepage-faq></homepage-faq>
    </basic-card>
</template>
<script>
import HpTeaser from "./homepage/HpTeaser.vue"
import HomepageBullets from "./homepage/HomepageBullets.vue";
import HomepageFaq from "./homepage/HomepageFaq.vue";
export default {
    components: {
        HpTeaser,
        HomepageBullets,
        HomepageFaq
    }
}
</script>
<style lang="scss" scoped>
@import "../styles/homepage.scss"
</style>