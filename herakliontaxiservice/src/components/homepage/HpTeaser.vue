<template>
    <div class="homepageTeaser">
        <div class="homepageTeaserPhoto">
            <img src="../../assets/taxi-photo.png" alt="taxi-photo" class="homepageTeaserPhotoImage" @mouseenter="mouseEnterOnImage" @mouseleave="mouseLeaveOnImage"/>
            <h2 class="homepageTeaserPhotoText" id="taxiPhotoText">Taxi services all over Crete</h2>
        </div>
        <div class="homepageTeaserText">
            <h3>High class transportation services</h3>
            <h3>Book now your next trip, excursion, escapade</h3>
            <button class="button-primary">Contact</button>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        mouseEnterOnImage() {
            document.getElementById('taxiPhotoText').style.visibility = "visible";
        },
        mouseLeaveOnImage() {
            document.getElementById('taxiPhotoText').style.visibility = "hidden";
        },
    }
}
</script>
<style lang="scss" scoped>
    @import "../../styles/header.scss";
    @import "../../styles/homepage.scss";
</style>
