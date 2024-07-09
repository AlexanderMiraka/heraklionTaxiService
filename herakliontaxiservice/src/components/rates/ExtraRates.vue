<template>
  <basic-card class="extraRates">
    <div class="tourRate">
      <h2>Tour</h2>
      <h4>
        Cost is 50 &euro; /hour. This cost depends on the specifications. To
        learn the exact amount feel free to call us on
      </h4>
      <router-link to="/contact" class="button-primary"
          >Contact us</router-link
        >
    </div>
    <div class="waitingRate">
      <h2>Waiting for you</h2>
      <h4>
        The driver can wait for you at your arrived destination</h4>
      <h5>
        Notify the driver
      </h5>
    </div>
    <div class="specialPrices">
      <h2>Special Prices</h2>
      <h4>
        Ask us about daily offers and special prices on tours and destinations</h4>
        <router-link to="/contact" class="button-primary"
          >Contact us</router-link
        >
    </div>
    <div class="anythingElse">
      <h2>Ask about anything</h2>
      <h4>
        Didn't you find what you're looking for? Feel free to call us and ask
        about a destination
      </h4>
      <router-link to="/contact" class="button-primary">Contact us</router-link>
    </div>
  </basic-card>
</template>
<style lang="scss" scoped>
@import "../../styles/rates.scss";
@import "../../styles/header.scss";
</style>
