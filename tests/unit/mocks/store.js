import { STATE, GETTERS } from "./consts";

const {
  RECIPIES: {
    CURRENT_SORTING: { TEXT },
    SORTING_OPTIONS
  },
  FAVOUTIRES: { RECIPIES }
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
    }
  },
  getters: {
    totalRecipiesCount: TOTAL_RECIPIES_COUNT
  },
  commit: jest.fn()
};
