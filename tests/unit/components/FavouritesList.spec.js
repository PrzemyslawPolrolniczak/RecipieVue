import { createLocalVue, shallowMount } from "@vue/test-utils";
import VueCompositionApi from "@vue/composition-api";

import { $store } from "../mocks/store";
import { STATE } from "../mocks/consts";

import FavouritesList from "@/components/FavouritesList/FavouritesList.vue";

const localVue = createLocalVue();
localVue.use(VueCompositionApi);

const {
  FAVOUTIRES: { RECIPIES }
} = STATE;

describe("FavouritesList.vue", () => {
  const wrapper = shallowMount(FavouritesList, {
    localVue,
    mocks: {
      $store
    }
  });

  const favouriteTiles = wrapper.findAll('[data-test="favourite-tile"]');

  test("Renders proper number of tiles", () => {
    expect(favouriteTiles.length).toBe(RECIPIES.length);
  });
});
