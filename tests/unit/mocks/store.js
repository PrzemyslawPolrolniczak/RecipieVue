import { STATE, GETTERS } from "./consts";

const {
  RECIPIES: {
    CURRENT_SORTING: { TEXT },
    SORTING_OPTIONS
  },
  FAVOUTIRES: { RECIPIES },
  FILTER: { MAX_KCAL, MAX_TIME, AVAILABLE_TAGS, SELECTED_TAGS }
} = STATE;

const { TOTAL_RECIPIES_COUNT } = GETTERS;

export const $store = {
  state: {
    recipies: {
      currentSorting: {
        text: TEXT
      },
      sortingOptions: SORTING_OPTIONS
    },
    favourites: {
      recipies: RECIPIES
    },
    filter: {
      maxKcal: MAX_KCAL,
      maxTime: MAX_TIME,
      availableTags: AVAILABLE_TAGS,
      selectedTags: SELECTED_TAGS
    }
  },
  getters: {
    totalRecipiesCount: TOTAL_RECIPIES_COUNT
  },
  commit: jest.fn()
};
