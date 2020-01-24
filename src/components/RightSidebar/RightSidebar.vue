<template>
  <div class="right-sidebar p-8">
    <input
      class="rounded-full px-4 block leading-loose w-full"
      v-model="search"
      type="text"
    />
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
import { computed, ref } from "@vue/composition-api";

import TagContainer from "../TagContainer/TagContainer.vue";
import FavouritesList from "../FavouritesList/FavouritesList.vue";

import {
  UPDATE_FILTERS,
  ADD_TAGS,
  REMOVE_TAGS
} from "../../store/modules/filter/mutations-types";

export default {
  name: "RightSidebar",
  components: { TagContainer, FavouritesList },
  setup(props, { root: { $store } }) {
    const search = ref("");

    const availableTags = computed(() =>
      $store.state.filter.availableTags.filter(tag =>
        tag.toLowerCase().includes(search.value)
      )
    );

    const selectedTags = computed(() => $store.state.filter.selectedTags);

    const addFilterTag = value => {
      $store.commit(UPDATE_FILTERS, { type: ADD_TAGS, payload: value });
    };

    const removeFilterTag = value => {
      $store.commit(UPDATE_FILTERS, { type: REMOVE_TAGS, payload: value });
    };

    return {
      search,
      availableTags,
      selectedTags,
      addFilterTag,
      removeFilterTag
    };
  }
};
</script>

<style lang="scss" scoped>
.right-sidebar {
  width: 320px;
  height: calc(100vh - 80px);
}
</style>
