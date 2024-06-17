<!-- eslint-disable -->
<template>
  <div class="faq">
    <accordion class="accordion">
      <accordion-item>
        <!-- This slot will handle the title/header of the accordion and is the part you click on -->
        <template v-slot:accordion-trigger>
          <h3>How can I reserve a Taxi?</h3>
        </template>
        <!-- This slot will handle all the content that is passed to the accordion -->
        <template v-slot:accordion-content>
          <span
            >You can call on +30 694 843 7799 or send us an email on
            herakliontaxiservice@something.com</span
          >
        </template>
      </accordion-item>

      <accordion-item>
        <!-- This slot will handle the title/header of the accordion and is the part you click on -->
        <template v-slot:accordion-trigger>
          <h3>Can I book a taxi service before my arrival?</h3>
        </template>
        <!-- This slot will handle all the content that is passed to the accordion -->
        <template v-slot:accordion-content>
          <span
            >Yes you can. Send us your name,the date and time of your arrival
            and the flight number. We will wait for you with a sign even if the
            flight is delayed.</span
          >
        </template>
      </accordion-item>

      <accordion-item>
        <!-- This slot will handle the title/header of the accordion and is the part you click on -->
        <template v-slot:accordion-trigger>
          <h3>Do I have to pay an extra fee for the reservation?</h3>
        </template>
        <!-- This slot will handle all the content that is passed to the accordion -->
        <template v-slot:accordion-content>
          <span>No, you are only getting charged for the trip</span>
        </template>
      </accordion-item>
      <accordion-item>
        <!-- This slot will handle the title/header of the accordion and is the part you click on -->
        <template v-slot:accordion-trigger>
          <h3>When can I make the reservation?</h3>
        </template>
        <!-- This slot will handle all the content that is passed to the accordion -->
        <template v-slot:accordion-content>
          <span
            >The sooner the better. You can make the reservation from when you
            have booked the flight to a couple of hours before your
            flight.</span
          >
        </template>
      </accordion-item>
      <accordion-item>
        <!-- This slot will handle the title/header of the accordion and is the part you click on -->
        <template v-slot:accordion-trigger>
          <h3>Can I cancel my reservation?</h3>
        </template>
        <!-- This slot will handle all the content that is passed to the accordion -->
        <template v-slot:accordion-content>
          <span
            >Yes, you can do so by letting us know a couple of hours before your
            flight. No extra fee is added</span
          >
        </template>
      </accordion-item>
      <accordion-item>
        <!-- This slot will handle the title/header of the accordion and is the part you click on -->
        <template v-slot:accordion-trigger>
          <h3>I will be having a child with me. How can I make the trip?</h3>
        </template>
        <!-- This slot will handle all the content that is passed to the accordion -->
        <template v-slot:accordion-content>
          <span
            >If you have a child let us know and we will make sure to have a
            child seat so you can travel safely.</span
          >
        </template>
      </accordion-item>
      <accordion-item>
        <!-- This slot will handle the title/header of the accordion and is the part you click on -->
        <template v-slot:accordion-trigger>
          <h3>We are more than four people how can we use the service?</h3>
        </template>
        <!-- This slot will handle all the content that is passed to the accordion -->
        <template v-slot:accordion-content>
          <span
            >If you are more than four people let us know so we can bring
            another taxi for you and your friends and family.</span
          >
        </template>
      </accordion-item>
      <accordion-item>
        <!-- This slot will handle the title/header of the accordion and is the part you click on -->
        <template v-slot:accordion-trigger>
          <h3>How can I pay?</h3>
        </template>
        <!-- This slot will handle all the content that is passed to the accordion -->
        <template v-slot:accordion-content>
          <span
            >You will pay upon the arrival of your destination by cash, credit
            or debit card</span
          >
        </template>
      </accordion-item>
    </accordion>
  </div>
</template>

<script>
import Accordion from "../utils/Accordion.vue";
import AccordionItem from "../utils/AccordionItem.vue";

export default {
  name: "App",
  components: {
    Accordion,
    AccordionItem,
  },
};
</script>

<style lang="scss" scoped>
@import '../../styles/homepage.scss'
</style>