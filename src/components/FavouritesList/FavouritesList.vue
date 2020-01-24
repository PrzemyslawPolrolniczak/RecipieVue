<template>
  <div class="my-4 bg-white rounded-lg flex flex-col">
    <div class="p-4 text-center border-b">Ulubione</div>
    <div class="p-4 overflow-y-auto h-30vh">
      <favourite-tile
        v-for="{ name, image, kcal, time } in favouriteRecipies"
        :key="name"
        :name="name"
        :image="image"
        :kcal="kcal"
        :time="time"
      />
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/composition-api";

import FavouriteTile from "../FavouriteTile/FavouriteTile.vue";

export default {
  name: "FavouritesList",
  components: { FavouriteTile },
  setup(props, { root: { $store } }) {
    const favouriteRecipies = computed(() => $store.state.favourites.recipies);
    console.log(favouriteRecipies.value[0].image);
    return { favouriteRecipies };
  }
};
</script>
