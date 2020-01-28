<template>
  <div
    class="recipie-tile border rounded-lg flex flex-col w-64 shadow-md mx-4 my-4"
  >
    <div class="h-1/2">
      <img
        class="object-cover w-full h-full rounded-t-lg"
        src="https://assets.tmecosys.com/image/upload/t_web600x528/img/recipe/ras/Assets/F837F322-3C97-48AD-9A80-B4FE3E30215A/Derivates/B5EBFC12-24E4-4BBF-B8AE-76F51A5CD242.jpg"
        alt="owsianka"
      />
    </div>
    <div class="h-1/2 p-4 text-gray-700">
      <h3 class="text-xl font-bold pb-4 leading-none truncate">
        Owsianka z malinami
      </h3>
      <div>
        <div class="flex justify-between text-sm">
          <span>Kaloryczność: <strong>750 kcal</strong></span>
          <span>B: <strong>15g</strong></span>
        </div>
        <div class="flex justify-between text-sm">
          <span>Czas: <strong>10 min</strong></span>
          <span>T: <strong>15g</strong></span>
        </div>
        <div class="flex justify-between text-sm">
          <span>Trudność: <strong>Bardzo łatwa</strong></span>
          <span>W: <strong>15g</strong></span>
        </div>
      </div>
      <div class="flex text-xs pt-4">
        <div class="border border-gray-600 rounded text-center px-2 mt-1 mr-2">
          Redukcja
        </div>
        <div class="border border-gray-600 rounded text-center px-2 mt-1 mr-2">
          Węgle
        </div>
        <div class="border border-gray-600 rounded text-center px-2 mt-1 mr-2">
          Słodkie
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecipieTile"
};
</script>

<style lang="scss" scoped>
.recipie-tile {
  height: 23rem;
}
</style>
