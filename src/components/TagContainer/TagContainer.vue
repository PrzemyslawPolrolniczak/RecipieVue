<template>
  <div class="mt-4 p-2 h-20vh bg-white rounded-lg">
    <base-tag
      v-for="tag in tagsList"
      :value="tag"
      :onTagClick="onTagClick"
      :icon="tagIcon"
      :key="tag"
    />
  </div>
</template>

<script>
import BaseTag from "../BaseTag/BaseTag.vue";

export default {
  name: "TagContainer",
  components: { BaseTag },
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
