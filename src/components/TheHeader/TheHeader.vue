<template>
  <header class="header flex px-4 items-center justify-between">
    <div>
      <h2 class="text-3xl">Przepiśnik</h2>
    </div>
    <div class="flex items-center">
      <nav>
        <ul class="flex">
          <li class="text-white mx-2 text-xl">Śniadania</li>
          <li class="text-white mx-2 text-xl">Obiady</li>
          <li class="text-white mx-2 text-xl">Kolacje</li>
        </ul>
      </nav>
      <search-input additionalClasses="bg-gray-600" />
      <the-button>Dodaj Przepis</the-button>
    </div>
  </header>
</template>

<script>
import SearchInput from "../SearchInput/SearchInput.vue";
import TheButton from "../shared/TheButton/TheButton.vue";

export default {
  name: "TheHeader",
  components: { SearchInput, TheButton }
};
</script>

<style lang="scss" scoped>
.header {
  height: 80px;
}
</style>
