import { createLocalVue, shallowMount } from "@vue/test-utils";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import BaseTag from "@/components/BaseTag/BaseTag.vue";

const localVue = createLocalVue();
localVue.component("font-awesome-icon", FontAwesomeIcon);

describe("BaseTag.vue", () => {
  const clickHandler = jest.fn();
  const propsData = { value: "test", icon: "plus", onTagClick: clickHandler };

  const wrapper = shallowMount(BaseTag, {
    localVue,
    propsData
  });

  test("Renders props.value when passed", () => {
    expect(wrapper.text()).toMatch(propsData.value);
  });

  test("OnClick works", () => {
    wrapper.trigger("click");
    expect(clickHandler).toBeCalled();
  });
});
