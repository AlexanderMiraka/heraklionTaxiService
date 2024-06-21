<template>
  <basic-card class="rates">
    <h2>All distances are calculated from airport and port of Herakleion</h2>
    <table class="ratesContainer">
      <tr class="ratesHeader">
        <th>Destination</th>
        <th>Perfecture</th>
        <th>Distance</th>
        <th>Approximate Time</th>
        <th>Price</th>
      </tr>
      <tr
        class="ratesDestinations"
        v-for="destination in sortedDestinations"
        :key="destination.destination"
      >
        <td>{{ destination.destination }}</td>
        <td>{{ destination.perfecture }}</td>
        <td>{{ destination.distance }}</td>
        <td>{{ destination.approximateTime }}</td>
        <td>{{ destination.price }}</td>
      </tr>
    </table>
  </basic-card>
  <extra-rates></extra-rates>
</template>
<script>
import { sortedDestinations } from "../destinations.js";
import ExtraRates from "./rates/ExtraRates.vue";
export default {
  data() {
    return {
      sortedDestinations: [],
    };
  },
  created() {
    this.sortedDestinations = sortedDestinations;
    return this.sortedDestinations;
  },
  components: {
        ExtraRates,
    },
};
</script>
<style lang="scss" scoped>
@import "../styles/rates.scss";
</style>
