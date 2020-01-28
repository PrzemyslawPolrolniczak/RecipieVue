<template>
  <div id="app" class="h-screen pt-20">
    <the-header></the-header>
    <div class="h-full">
      <left-sidebar />
      <div class="app__content h-full bg-white overflow-y-auto">
        <router-view />
      </div>
      <right-sidebar />
    </div>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader/TheHeader.vue";
import LeftSidebar from "./components/LeftSidebar/LeftSidebar.vue";
import RightSidebar from "./components/RightSidebar/RightSidebar.vue";

export default {
  components: { TheHeader, LeftSidebar, RightSidebar }
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

.app__content {
  margin-left: 80px;
  margin-right: 320px;
}
</style>
