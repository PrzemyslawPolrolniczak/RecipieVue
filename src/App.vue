<template>
  <div id="app" class="h-screen overflow-hidden">
    <the-header></the-header>
    <div class="flex h-full">
      <left-sidebar />
      <router-view />
    </div>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader/TheHeader.vue";
import LeftSidebar from "./components/LeftSidebar/LeftSidebar.vue";

export default {
  components: { TheHeader, LeftSidebar }
};
</script>

<style lang="scss">
#app {
  background: linear-gradient(
    90deg,
    rgba(185, 185, 185, 1) 0%,
    rgba(163, 163, 163, 1) 5%,
    rgba(129, 129, 129, 1) 20%,
    rgba(71, 71, 71, 1) 45%,
    rgba(39, 39, 39, 1) 85%,
    rgba(0, 0, 0, 1) 100%
  );
}

* {
  box-sizing: border-box;
}
</style>
