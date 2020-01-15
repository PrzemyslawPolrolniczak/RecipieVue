<template>
  <div id="app">
    <the-header></the-header>
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader/TheHeader.vue";
export default {
  components: { TheHeader }
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
