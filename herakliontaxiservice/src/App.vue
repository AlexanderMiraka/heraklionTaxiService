<template>
  <GlobalHeader></GlobalHeader>
  <home-page></home-page>
</template>

<script>
import HomePage from './components/HomePage.vue';
export default {
  name: 'App',
  components: {
    HomePage,
  }
}
</script>

<style lang="scss" scoped>
@import url('./styles/global.scss');
</style>
