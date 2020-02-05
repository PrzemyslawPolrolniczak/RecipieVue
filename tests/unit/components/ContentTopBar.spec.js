import { createLocalVue, shallowMount } from "@vue/test-utils";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueCompositionApi from "@vue/composition-api";

import {
  SET_SORTING,
  UPDATE_RECIPIES
} from "@/store/modules/recipies/mutations-types";
import ContentTopBar from "@/components/ContentTopBar/ContentTopBar.vue";

const localVue = createLocalVue();
localVue.component("font-awesome-icon", FontAwesomeIcon);
localVue.use(VueCompositionApi);

const CONSTS = {
  TEXT: "test",
  SORTING_OPTIONS: [
    { by: "name", direction: "asc", text: "sorting1" },
    { by: "name", direction: "desc", text: "sorting2" },
    { by: "kcal", direction: "asc", text: "sorting3" },
    { by: "kcal", direction: "desc", text: "sorting4" },
    { by: "time", direction: "asc", text: "sorting5" },
    { by: "time", direction: "desc", text: "sorting6" }
  ],
  TOTAL_RECIPIES_COUNT: 99
};

const $store = {
  state: {
    recipies: {
      currentSorting: {
        text: CONSTS.TEXT
      },
      sortingOptions: CONSTS.SORTING_OPTIONS
    }
  },
  getters: {
    totalRecipiesCount: CONSTS.TOTAL_RECIPIES_COUNT
  },
  commit: jest.fn()
};

describe("ContentTopBar.vue", () => {
  const wrapper = shallowMount(ContentTopBar, {
    localVue,
    mocks: {
      $store
    }
  });

  const sorting = wrapper.find("[data-test='sorting']");
  const chevron = wrapper.find("[data-test='chevron']");
  const sortingOptionsWrapper = wrapper.find(
    "[data-test='sorting-options-wrapper']"
  );
  const sortingOptions = wrapper.findAll("[data-test='sorting-option']");
  const recipieCount = wrapper.find("[data-test='recipie-count']");

  test("Renders proper initial sorting value", () => {
    expect(sorting.text()).toMatch(CONSTS.TEXT);
  });

  test("Chevron is not rotated initially", () => {
    expect(chevron.classes()).not.toContain("sorting__icon--rotate");
  });

  test("Sorting options wrapper is hidden initially", () => {
    expect(sortingOptionsWrapper.classes()).toContain("hidden");
  });

  test("Recipies count initial value is rendered properly", () => {
    expect(recipieCount.text()).toBe(`Total: ${CONSTS.TOTAL_RECIPIES_COUNT}`);
  });

  test("Sorting options are rendered correctly", () => {
    expect(sortingOptions.length).toBe(CONSTS.SORTING_OPTIONS.length);
    expect(sortingOptions.at(3).text()).toBe(CONSTS.SORTING_OPTIONS[3].text);
  });

  test("Sorting options expands on click", () => {
    sorting.trigger("click");

    expect(sortingOptionsWrapper.classes()).not.toContain("hidden");
    expect(chevron.classes()).toContain("sorting__icon--rotate");
  });

  test("Clicking sorting option changes sorting", () => {
    sortingOptions.at(2).trigger("click");

    expect(sorting.text()).toMatch(CONSTS.SORTING_OPTIONS[2].text);
    expect($store.commit).toHaveBeenCalledWith(UPDATE_RECIPIES, {
      type: SET_SORTING,
      payload: CONSTS.SORTING_OPTIONS[2]
    });
  });
});
