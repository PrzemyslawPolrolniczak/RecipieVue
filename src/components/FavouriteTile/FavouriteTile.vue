<template>
  <div
    class="favourite-tile rounded-lg border border-gray-500 flex h-12 mb-4 cursor-pointer relative"
  >
    <div class="w-1/4">
      <img
        class="object-cover h-full rounded-l-lg"
        src="https://akademiasmaku.pl/upload/recipes/2752/big/owsianka-na-wodzie-czyli-pelnowartosciowe-sniadanie-2752.jpg"
        alt="zarcie"
      />
    </div>
    <div class="w-3/4 flex flex-col justify-center px-4">
      <div class="text-xs font-bold">Owsianka</div>
      <div class="flex">
        <div class="w-1/2 text-xs">750 kcal</div>
        <div class="w-1/2 text-xs">10 min</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FavouriteTile"
};
</script>

<style lang="scss" scoped>
.favourite-tile::after {
  content: "";
  @apply absolute inset-0 opacity-0 rounded-lg;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  transition: opacity 0.2s ease-in-out;
}

.favourite-tile:hover::after {
  opacity: 1;
}
</style>
