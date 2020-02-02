<template>
  <div>
    <div class="flex flex-wrap -m-4 overflow-y-auto">
      <recipie-tile
        v-for="{ image, name, info, macro, tags } in recipies"
        :key="name"
        :image="image"
        :name="name"
        :info="info"
        :macro="macro"
        :tags="tags"
      />
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/composition-api";

import RecipieTile from "../RecipieTile/RecipieTile.vue";

export default {
  name: "RecipieList",
  components: { RecipieTile },
  setup(props, { root: { $store } }) {
    const recipies = computed(() => $store.getters.filteredAndSortedRecipies);

    return { recipies };
  }
};
</script>
