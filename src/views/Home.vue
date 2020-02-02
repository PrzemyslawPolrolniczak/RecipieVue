<template>
  <div class="p-8 relative pt-0">
    <content-top-bar />
    <recipie-list />
  </div>
</template>

<script>
import ContentTopBar from "@/components/ContentTopBar/ContentTopBar.vue";
import RecipieList from "@/components/RecipieList/RecipieList.vue";

export default {
  name: "home",
  components: {
    RecipieList,
    ContentTopBar
  }
};
</script>
