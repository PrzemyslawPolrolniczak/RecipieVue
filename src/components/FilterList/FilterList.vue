<template>
  <ul class="my-8">
    <li class="text-xl mb-4 pl-4">{{ name }}</li>
    <li
      :class="[
        'text-sm my-2 pl-4 cursor-pointer border-l-4 border-transparent',
        activeFilter === value ? 'font-bold border-gray-600' : 'text-gray-600'
      ]"
      v-for="{ text, value } in values"
      :key="value"
      @click="activeFilter === value ? resetFilter() : changeFilter(value)"
    >
      {{ text }}
    </li>
  </ul>
</template>

<script>
import { computed } from "@vue/composition-api";

import { UPDATE_FILTERS } from "@/store/modules/filter/mutations-types";

export default {
  name: "FilterList",
  props: {
    type: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    values: {
      type: Array,
      required: true
    },
    field: {
      type: String,
      required: true
    }
  },
  setup({ type, field }, { root: { $store } }) {
    const activeFilter = computed(() => {
      return $store.state.filter[field];
    });

    const changeFilter = value => {
      $store.commit(UPDATE_FILTERS, { type, payload: value });
    };

    const resetFilter = () => {
      $store.commit(UPDATE_FILTERS, { type, payload: null });
    };

    return { activeFilter, changeFilter, resetFilter };
  }
};
</script>
