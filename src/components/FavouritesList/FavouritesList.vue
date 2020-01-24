<template>
  <div class="my-4 bg-white rounded-lg flex flex-col">
    <div class="p-4 text-center border-b">Ulubione</div>
    <div class="p-4 overflow-y-auto h-30vh">
      <favourite-tile />
      <favourite-tile />
      <favourite-tile />
      <favourite-tile />
      <favourite-tile />
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
