<template>
  <div class="mt-4 p-2 h-56 bg-white rounded-lg">
    <the-tag
      v-for="tag in tagsList"
      :value="tag"
      :onTagClick="onTagClick"
      :icon="tagIcon"
      :key="tag"
    />
  </div>
</template>

<script>
import TheTag from "../TheTag/TheTag.vue";

export default {
  name: "TagContainer",
  components: { TheTag },
  props: {
    tagsList: Array,
    onTagClick: {
      type: Function,
      required: true
    },
    tagIcon: {
      type: String,
      required: true
    }
  }
};
</script>
