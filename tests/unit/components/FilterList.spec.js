import { createLocalVue, shallowMount } from "@vue/test-utils";
import VueCompositionApi from "@vue/composition-api";

import { $store } from "../mocks/store";
import {
  UPDATE_FILTERS,
  MAX_KCAL
} from "@/store/modules/filter/mutations-types";

import FilterList from "@/components/FilterList/FilterList.vue";

const localVue = createLocalVue();
localVue.use(VueCompositionApi);

const propsData = {
  type: MAX_KCAL,
  name: "test name",
  values: [
    { text: "1 kcal", value: 1 },
    { text: "10 kcal", value: 10 },
    { text: "100 kcal", value: 100 },
    { text: "1000 kcal", value: 1000 }
  ],
  field: "maxKcal"
};

describe("FilterList.vue", () => {
  const wrapper = shallowMount(FilterList, {
    localVue,
    mocks: {
      $store
    },
    propsData
  });

  const name = wrapper.find('[data-test="name"]');
  const values = wrapper.findAll('[data-test="value"]');

  test("Render name correctly", () => {
    expect(name.text()).toBe(propsData.name);
  });

  test("Render values correctly", () => {
    expect(values.length).toBe(propsData.values.length);
    expect(values.at(2).text()).toBe(propsData.values[2].text);
    expect(values.at(3).classes()).toContain("font-bold");
  });

  test("Activate filter on click", () => {
    values.at(1).trigger("click");

    expect($store.commit).toBeCalledWith(UPDATE_FILTERS, {
      type: MAX_KCAL,
      payload: propsData.values[1].value
    });
  });

  test("Deactivate filter on click", () => {
    values.at(3).trigger("click");

    expect($store.commit).toBeCalledWith(UPDATE_FILTERS, {
      type: MAX_KCAL,
      payload: null
    });
  });
});
