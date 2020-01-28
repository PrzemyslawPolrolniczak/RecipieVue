<template>
  <div>
    <div class="flex flex-wrap -m-4 overflow-y-auto">
      <recipie-tile />
      <recipie-tile />
      <recipie-tile />
      <recipie-tile />
      <recipie-tile />
      <recipie-tile />
      <recipie-tile />
      <recipie-tile />
    </div>
  </div>
</template>

<script>
import { reactive, computed } from "@vue/composition-api";

import RecipieTile from "../RecipieTile/RecipieTile.vue";

import {
  UPDATE_RECIPIES,
  SET_SORTING
} from "../../store/modules/recipies/mutations-types";

export default {
  name: "RecipieList",
  components: { RecipieTile },
  setup(props, { root: { $store } }) {
    return {};
  }
};
</script>
