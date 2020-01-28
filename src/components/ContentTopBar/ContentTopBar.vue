<template>
  <div
    class="bg-white sticky top-0 left-0 right-0 py-4 px-8 -mx-8 text-xs text-gray-700"
  >
    <span
      class="sorting mr-8 cursor-pointer select-none relative hover:underline"
      @click="toggleSortingExpanded()"
    >
      Sorting: {{ selectedSorting }}
      <font-awesome-icon
        :class="[
          'sorting__icon',
          data.sortingExpanded && 'sorting__icon--rotate'
        ]"
        icon="chevron-down"
      />
      <div
        :class="[
          'absolute top-auto left-0 right-0',
          !data.sortingExpanded && 'hidden'
        ]"
      >
        <ul class="border border-b-0 text-right bg-white">
          <li
            v-for="option in sortingOptions"
            :key="option.text"
            class="border-b pr-3 py-1 hover:underline"
            @click="changeSortingOption(option)"
          >
            {{ option.text }}
          </li>
        </ul>
      </div>
    </span>
    <span>Total: 1450</span>
  </div>
</template>

<script>
import { reactive, computed } from "@vue/composition-api";

import {
  UPDATE_RECIPIES,
  SET_SORTING
} from "../../store/modules/recipies/mutations-types";

export default {
  name: "ContentTopBar",
  setup(props, { root: { $store } }) {
    const data = reactive({
      sortingExpanded: false
    });

    const selectedSorting = computed(() => $store.state.recipies.sorting.text);

    const sortingOptions = computed(() => [
      { by: "name", direction: "asc", text: "A-z" },
      { by: "name", direction: "desc", text: "z-A" },
      { by: "kcal", direction: "asc", text: "Kcal+" },
      { by: "kcal", direction: "desc", text: "Kcal-" },
      { by: "time", direction: "asc", text: "Time+" },
      { by: "time", direction: "desc", text: "Time-" }
    ]);

    const toggleSortingExpanded = () => {
      data.sortingExpanded = !data.sortingExpanded;
    };

    const changeSortingOption = option => {
      $store.commit(UPDATE_RECIPIES, { type: SET_SORTING, payload: option });
    };

    return {
      data,
      selectedSorting,
      toggleSortingExpanded,
      sortingOptions,
      changeSortingOption
    };
  }
};
</script>

<style lang="scss" scoped>
.sorting__icon {
  transition: transform 0.2s;

  &--rotate {
    transform: rotate(180deg);
  }
}
</style>
