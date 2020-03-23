<template>
  <div class="left-sidebar fixed top-0 bottom-0 pt-20">
    <filter-list
      v-for="{ type, storeField, name, values } in filterSections"
      :type="type"
      :name="name"
      :values="values"
      :field="storeField"
      :key="name"
      data-test="filter-section"
    />
  </div>
</template>

<script>
import { computed } from "@vue/composition-api";

import FilterList from "../FilterList/FilterList.vue";

import { leftFilterList } from "@/consts";

export default {
  name: "LeftSidebar",
  components: { FilterList },
  setup() {
    const filterSections = computed(() => leftFilterList);

    return { filterSections };
  }
};
</script>

<style lang="scss" scoped>
.left-sidebar {
  width: 80px;
}
.list__header {
  color: #4e4e4e;
}
</style>
