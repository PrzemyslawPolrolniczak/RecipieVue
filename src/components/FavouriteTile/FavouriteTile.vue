<template>
  <router-link :to="`/recipie/${name}`">
    <div
      class="favourite-tile rounded-lg border border-gray-500 flex h-12 mb-4 cursor-pointer relative"
    >
      <div class="w-1/4">
        <img
          class="object-cover h-full rounded-l-lg"
          :src="image"
          :alt="name"
        />
      </div>
      <div class="w-3/4 flex flex-col justify-center px-4">
        <div class="text-xs font-bold">{{ name }}</div>
        <div class="flex">
          <div class="w-1/2 text-xs">{{ kcal }} kcal</div>
          <div class="w-1/2 text-xs">{{ time }} min</div>
        </div>
      </div>
      <div
        class="favourite-tile__delete absolute"
        @click.prevent="removeFavourite()"
      >
        <font-awesome-icon icon="trash" class="text-gray-700 text-sm" />
      </div>
    </div>
  </router-link>
</template>

<script>
import {
  UPDATE_FAVOURITES,
  REMOVE_FAVOURITE
} from "../../store/modules/favourites/mutations-types";

export default {
  name: "FavouriteTile",
  props: {
    name: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    kcal: {
      type: Number,
      required: true
    },
    time: {
      type: Number,
      required: true
    }
  },
  setup({ name }, { root: { $store } }) {
    const removeFavourite = () => {
      $store.commit(UPDATE_FAVOURITES, {
        type: REMOVE_FAVOURITE,
        payload: name
      });
    };
    return { removeFavourite };
  }
};
</script>

<style lang="scss" scoped>
.favourite-tile {
  &::after {
    content: "";
    @apply absolute inset-0 opacity-0 rounded-lg;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    transition: opacity 0.2s ease-in-out;
  }

  &__delete {
    transition: opacity 0.1s;
    opacity: 0;
    right: 10px;
    top: 1px;
    z-index: 10;
  }

  &:hover {
    .favourite-tile__delete {
      opacity: 1;
    }

    &::after {
      opacity: 1;
    }
  }
}
</style>
