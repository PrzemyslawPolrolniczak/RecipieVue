<template>
  <div
    class="rounded-full border border-gray-700 mr-1 h-7 mb-1 inline-flex cursor-pointer"
    @click="onTagClick(value)"
  >
    <div
      class="rounded-full py-1 border-r border-gray-700 w-7 text-xxs flex items-center justify-center"
    >
      <font-awesome-icon :icon="icon" />
    </div>
    <div class="flex items-center justify-center pl-1 pr-2 uppercase text-xxs font-bold">{{ value }}</div>
  </div>
</template>

<script>
export default {
  name: "BaseTag",
  props: {
    value: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    onTagClick: {
      type: Function,
      required: true
    }
  }
};
</script>
