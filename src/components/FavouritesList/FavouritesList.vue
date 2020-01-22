<template>
  <div class="my-4 bg-white h-full rounded-lg overflow-y-auto">
    <div class="p-4 text-center border-b">Ulubione</div>
    <div class="p-4">
      <favourite-tile />
      <favourite-tile />
      <favourite-tile />
      <favourite-tile />
    </div>
  </div>
</template>

<script>
import FavouriteTile from "../FavouriteTile/FavouriteTile.vue";

export default {
  name: "FavouritesList",
  components: { FavouriteTile }
};
</script>
