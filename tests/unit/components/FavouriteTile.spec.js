import { createLocalVue, shallowMount } from "@vue/test-utils";
import VueCompositionApi from "@vue/composition-api";
import VueRouter from "vue-router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { $store } from "../mocks/store";
import {
  UPDATE_FAVOURITES,
  REMOVE_FAVOURITE
} from "@/store/modules/favourites/mutations-types";

import FavouriteTile from "@/components/FavouriteTile/FavouriteTile.vue";

const localVue = createLocalVue();
localVue.use(VueCompositionApi);
localVue.use(VueRouter);
const router = new VueRouter();
localVue.component("font-awesome-icon", FontAwesomeIcon);

const propsData = {
  image: "test image",
  name: "test name",
  kcal: 1000,
  time: 10
};

describe("FavouriteTile.vue", () => {
  const wrapper = shallowMount(FavouriteTile, {
    localVue,
    router,
    propsData,
    mocks: {
      $store
    }
  });

  const image = wrapper.find('[data-test="image"]');
  const name = wrapper.find('[data-test="name"]');
  const kcal = wrapper.find('[data-test="kcal"]');
  const time = wrapper.find('[data-test="time"]');
  const deleteIcon = wrapper.find('[data-test="delete-icon"]');

  test("Renders image from props", () => {
    expect(image.attributes("src")).toBe(propsData.image);
  });

  test("Renders name from props", () => {
    expect(name.text()).toBe(propsData.name);
  });

  test("Renders kcal from props", () => {
    expect(kcal.text()).toBe(`${propsData.kcal} kcal`);
  });

  test("Renders time from props", () => {
    expect(time.text()).toBe(`${propsData.time} min`);
  });

  test("Deletes favourite tile on trash icon click", () => {
    deleteIcon.trigger("click");

    expect($store.commit).toHaveBeenCalledWith(UPDATE_FAVOURITES, {
      type: REMOVE_FAVOURITE,
      payload: propsData.name
    });
  });
});
