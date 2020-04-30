import { createLocalVue, shallowMount } from "@vue/test-utils";
import VueCompositionApi from "@vue/composition-api";

import LeftSidebar from "@/components/LeftSidebar/LeftSidebar.vue";
import { leftFilterList } from "@/consts";

const localVue = createLocalVue();
localVue.use(VueCompositionApi);

describe("LeftSidebar.vue", () => {
  const wrapper = shallowMount(LeftSidebar, {
    localVue
  });

  const filterSections = wrapper.findAll('[data-test="filter-section"]');

  test("Renders proper number of sections", () => {
    expect(filterSections.length).toBe(leftFilterList.length);
  });
});
