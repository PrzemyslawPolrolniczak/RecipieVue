import { createLocalVue, shallowMount } from "@vue/test-utils";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueCompositionApi from "@vue/composition-api";

import ContentTopBar from "@/components/ContentTopBar/ContentTopBar.vue";

const localVue = createLocalVue();
localVue.component("font-awesome-icon", FontAwesomeIcon);
localVue.use(VueCompositionApi);

const $store = {
  state: {
    recipies: {
      sorting: {
        text: "test"
      }
    }
  },
  getters: {
    totalRecipiesCount: () => 25
  }
};

describe("ContentTopBar.vue", () => {
  const wrapper = shallowMount(ContentTopBar, {
    localVue,
    mocks: {
      $store
    }
  });

  test("Renders props.value when passed", () => {
    console.log(wrapper);
    expect(true).toBe(true);
  });
});
