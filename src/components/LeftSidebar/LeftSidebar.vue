<template>
  <div class="left-sidebar">
    <filter-list
      v-for="{ type, storeField, name, values } in state.filtersList"
      :type="type"
      :name="name"
      :values="values"
      :field="storeField"
      :key="name"
    />
  </div>
</template>

<script>
import { reactive } from "@vue/composition-api";
import FilterList from "../FilterList/FilterList.vue";
import { MAX_KCAL, MAX_TIME } from "../../store/modules/filter/mutations-types";

export default {
  name: "LeftSidebar",
  components: { FilterList },
  setup() {
    const state = reactive({
      filtersList: [
        {
          type: MAX_KCAL,
          storeField: "maxKcal",
          name: "Kcal",
          values: [
            { text: "< 500", value: 500 },
            { text: "< 1000", value: 1000 },
            { text: "< 1500", value: 1500 },
            { text: "< 2000", value: 2000 }
          ]
        },
        {
          type: MAX_TIME,
          storeField: "maxTime",
          name: "Czas",
          values: [
            { text: "10 min", value: 10 },
            { text: "20 min", value: 20 },
            { text: "30 min", value: 30 },
            { text: "40 min", value: 40 },
            { text: "60 min", value: 60 }
          ]
        }
      ]
    });

    return { state };
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
