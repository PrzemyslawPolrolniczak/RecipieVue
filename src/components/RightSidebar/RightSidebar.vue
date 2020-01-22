<template>
  <div class="right-sidebar p-8 flex flex-col">
    <the-input class="w-full" />
    <tag-container
      :onTagClick="addFilterTag"
      :tagsList="availableTags"
      tagIcon="plus"
    />
    <tag-container
      :onTagClick="removeFilterTag"
      :tagsList="selectedTags"
      tagIcon="minus"
    />
    <favourites-list />
  </div>
</template>

<script>
import { computed } from "@vue/composition-api";

import TheInput from "../shared/TheInput/TheInput.vue";
import TagContainer from "../TagContainer/TagContainer.vue";
import FavouritesList from "../FavouritesList/FavouritesList.vue";

import {
  UPDATE_FILTERS,
  ADD_TAGS,
  REMOVE_TAGS
} from "../../store/modules/filter/mutations-types";

export default {
  name: "RightSidebar",
  components: { TheInput, TagContainer, FavouritesList },
  setup(props, { root: { $store } }) {
    const availableTags = computed(() => {
      return $store.state.filter.availableTags;
    });

    const selectedTags = computed(() => {
      return $store.state.filter.selectedTags;
    });

    const addFilterTag = value => {
      $store.commit(UPDATE_FILTERS, { type: ADD_TAGS, payload: value });
    };

    const removeFilterTag = value => {
      $store.commit(UPDATE_FILTERS, { type: REMOVE_TAGS, payload: value });
    };

    return { availableTags, selectedTags, addFilterTag, removeFilterTag };
  }
};
</script>

<style lang="scss" scoped>
.right-sidebar {
  width: 320px;
}
</style>
