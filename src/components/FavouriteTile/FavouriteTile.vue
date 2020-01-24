<template>
  <router-link to="/recipie/:id">
    <div
      class="favourite-tile rounded-lg border border-gray-500 flex h-12 mb-4 cursor-pointer relative"
    >
      <div class="w-1/4">
        <img
          class="object-cover h-full rounded-l-lg"
          :src="image"
          :alt="name"
        />
      </div>
      <div class="w-3/4 flex flex-col justify-center px-4">
        <div class="text-xs font-bold">{{ name }}</div>
        <div class="flex">
          <div class="w-1/2 text-xs">{{ kcal }} kcal</div>
          <div class="w-1/2 text-xs">{{ time }} min</div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "FavouriteTile",
  props: {
    name: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    kcal: {
      type: Number,
      required: true
    },
    time: {
      type: Number,
      required: true
    }
  }
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
