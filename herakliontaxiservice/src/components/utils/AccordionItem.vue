<template>
  <li class="accordion__item">
    <div 
      class="accordion__trigger"
      :class="{'accordion__trigger_active': visible}"
      @click="open">

      <!-- This slot will handle the title/header of the accordion and is the part you click on -->
      <slot name="accordion-trigger"></slot>
    </div>

    <transition 
      name="accordion"
      @enter="start"
      @after-enter="end"
      @before-leave="start"
      @after-leave="end">

      <div class="accordion__content"
        v-show="visible">
        <ul class="accordion-content">
          <!-- This slot will handle all the content that is passed to the accordion -->
          <slot name="accordion-content"></slot>
        </ul>
      </div>
    </transition>
  </li>
</template>


<script>
export default {
  props: {},
  inject: ["Accordion"],
  data() {
    return {
      index: null
    };
  },
  computed: {
    visible() {
      return this.index == this.Accordion.active;
    }
  },
  methods: {
    open() {
      if (this.visible) {
        this.Accordion.active = null;
      } else {
        this.Accordion.active = this.index;
      }
    },
    start(el) {
      el.style.height = el.scrollHeight + "px";
    },
    end(el) {
      el.style.height = "";
    }
  },
  created() {
    this.index = this.Accordion.count++;
  }
};
</script>

<style lang="scss" scoped>
.accordion__item {
  cursor: pointer;
  border: 2px solid #000;
  position: relative;
  margin: 16px 0;
  padding-bottom: 8px;
}

.accordion__trigger {
  display: flex;
  justify-content: space-between;
  padding-top: 8px;
  &::after {
    background: url('../../assets/arrow-down.svg') center no-repeat;
    height: 16px;
    width: 16px;
    background-size: contain;
    padding-right: 16px;
    content: "";
    transition: 0.3s all ease-in-out;
  }
}
.accordion__trigger_active {
  border-bottom: 2px solid #000;
  padding-bottom: 8px;
  background: #eee;
  &::after {
    transform: rotate(180deg);
  }
}
.accordion-enter-active,
.accordion-leave-active {
  will-change: height, opacity;
  transition: height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
}

.accordion-enter,
.accordion-leave-to {
  height: 0 !important;
  opacity: 0;
}
@import "../../styles/homepage.scss"
</style>
