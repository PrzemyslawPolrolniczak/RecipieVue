<template>
  <header
    class="header flex px-4 items-center justify-between absolute left-0 right-0 top-0"
  >
    <div>
      <h2 class="text-3xl">Staging deployed!</h2>
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
      <base-button>Dodaj Przepis</base-button>
    </div>
  </header>
</template>

<script>
import SearchInput from "../SearchInput/SearchInput.vue";
import BaseButton from "../shared/BaseButton/BaseButton.vue";

export default {
  name: "TheHeader",
  components: { SearchInput, BaseButton }
};
</script>

<style lang="scss" scoped>
.header {
  height: 80px;
}
</style>
