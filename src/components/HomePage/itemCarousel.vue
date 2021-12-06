<template>
  <div class="d-flex flex-column justify-content-start align-items-center">
    <div class="mt-5">
      <h4>{{ title }}</h4>
    </div>
    <Carousel class="custom-container mt-2" :settings="settings" :breakpoints="breakpoints">
      <Slide v-for="slide in 100" :key="slide">
        <item
          :style="{ width: itemCarouselsettings.itemWidth }"
          @click="goToItemPage()"
          class="pointer"
        />
      </Slide>

      <template #addons>
        <Navigation class="rounded custom-navigation" />
      </template>
    </Carousel>
    <div class="mt-5 mb-5 w-25" v-if="itemCarouselsettings.buttonVisible">
      <input class="custom-carousel-button w-75 p-3" type="button" value="Tümünü Gör" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Navigation, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import Item from '../Shared/appItems/item.vue';
export default defineComponent({
  name: 'ExamplePagination',
  components: {
    Carousel,
    Slide,
    Navigation,
    Item,
  },
  props: {
    itemCarouselsettings: {
      type: Object,
      default: () => ({
        itemWidth: '17rem',
        mobile: 2,
        tablet: 3,
        desktop: 5,
        buttonVisible: true,
      }),
    },
    title: {
      type: String,
      default: '',
    },
  },
  data: (instance) => ({
    // carousel settings
    settings: {
      itemsToShow: instance.itemCarouselsettings.mobile,
      snapAlign: 'center',
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: instance.itemCarouselsettings.tablet,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: instance.itemCarouselsettings.desktop,
        snapAlign: 'start',
      },
    },
  }),
  methods: {
    goToItemPage() {
      this.$router.push({ name: 'ItemDetailPage' });
    }
  }
});
</script>
<style>
.custom-carousel-button {
  color: rgb(82, 82, 82);
  background-color: transparent;
  border: 1px solid rgb(82, 82, 82);
  font-weight: bold;
  font-size: 15px;
}
.custom-carousel-button:hover {
  color: rgb(161, 161, 161);
  border: 1px solid rgb(161, 161, 161);
}
.custom-navigation {
  color: black !important;
  width: 45px !important;
  height: 45px !important;
  font-size: 35px !important;
  border: 1px solid black;
  background-color: transparent;
  margin-left: -20px;
  margin-right: -20px;
}
</style>