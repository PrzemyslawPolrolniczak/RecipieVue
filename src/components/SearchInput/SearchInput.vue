<template>
  <div class="relative">
    <div class="input__icon pointer-events-none absolute h-full flex items-center pl-5">
      <font-awesome-icon class="text-white" icon="search" />
    </div>
    <input
      :class="['rounded-full text-white mx-2 pl-8 block leading-loose', additionalClasses]"
      type="text"
    />
  </div>
</template>

<script>
export default {
  name: "SearchInput",
  props: {
    additionalClasses: {
      type: String
    }
  }
};
</script>