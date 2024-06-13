<template>
    <basic-card>
        <hp-teaser></hp-teaser>
    </basic-card>
    <basic-card>
        <homepage-bullets></homepage-bullets>
    </basic-card>
</template>
<script>
import HpTeaser from "./homepage/HpTeaser.vue"
import HomepageBullets from "./homepage/HomepageBullets.vue";
export default {
    components: {
        HpTeaser,
        HomepageBullets
    }
}
</script>