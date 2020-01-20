<template>
  <div class="right-sidebar p-8">
    <the-input class="w-full" />
    <tag-container />
    <tag-container />
    <favourites-list />
  </div>
</template>

<script>
import TheInput from "../shared/TheInput/TheInput.vue";
import TagContainer from "../TagContainer/TagContainer.vue";
import FavouritesList from "../FavouritesList/FavouritesList.vue";

export default {
  name: "RightSidebar",
  components: { TheInput, TagContainer, FavouritesList }
};
</script>

<style lang="scss" scoped>
.right-sidebar {
  width: 320px;
}
</style>
