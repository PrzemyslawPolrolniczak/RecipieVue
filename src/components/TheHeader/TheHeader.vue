<template>
  <header class="header flex px-4 items-center justify-between">
    <div>
      <h2 class="text-3xl">Przepiśnik</h2>
    </div>
    <div class="h-full flex items-center">
      <nav class="h-full">
        <ul class="h-full flex">
          <li class="h-full flex items-center text-white mx-2 text-xl">
            Śniadania
          </li>
          <li
            class="h-full flex items-center text-white mx-2 text-xl text-gray-500"
          >
            Obiady
          </li>
          <li
            class="h-full flex items-center text-white mx-2 text-xl text-gray-500"
          >
            Kolacje
          </li>
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
