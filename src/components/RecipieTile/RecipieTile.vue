<template>
  <div
    class="recipie-tile border rounded-lg flex flex-col w-64 shadow-md mx-4 my-4"
  >
    <div class="h-1/2">
      <img
        class="object-cover w-full h-full rounded-t-lg"
        :src="image"
        :alt="name"
      />
    </div>
    <div class="h-1/2 p-4 text-gray-700">
      <h3 class="text-xl font-bold pb-4 leading-none truncate">
        {{ name }}
      </h3>
      <div>
        <div class="flex justify-between text-sm">
          <span>
            Kaloryczność:
            <strong>{{ info.kcal }} kcal</strong>
          </span>
          <span>
            B:
            <strong>{{ macro.protein }}g</strong>
          </span>
        </div>
        <div class="flex justify-between text-sm">
          <span>
            Czas:
            <strong>{{ info.time }} min</strong>
          </span>
          <span>
            T:
            <strong>{{ macro.fat }}g</strong>
          </span>
        </div>
        <div class="flex justify-between text-sm">
          <span>
            Trudność:
            <strong>{{ info.difficulty }}</strong>
          </span>
          <span>
            W:
            <strong>{{ macro.carb }}g</strong>
          </span>
        </div>
      </div>
      <div class="flex text-xs pt-4">
        <div
          class="border border-gray-600 rounded text-center px-2 mt-1 mr-2 capitalize"
          v-for="tag in tags"
          :key="tag"
        >
          {{ tag }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecipieTile",
  props: {
    image: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    info: {
      validator: ({ kcal, time, difficulty }) =>
        typeof kcal === "number" &&
        typeof time === "number" &&
        typeof difficulty === "string",
      required: true
    },
    macro: {
      validator: ({ protein, fat, carb }) =>
        typeof protein === "number" &&
        typeof fat === "number" &&
        typeof carb === "number",
      required: true
    },
    tags: {
      type: Array,
      validator: tags => tags.length <= 3,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
.recipie-tile {
  height: 23rem;
}
</style>
