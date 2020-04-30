import { UPDATE_RECIPIES, SET_SORTING } from "./mutations-types";

export default {
  [UPDATE_RECIPIES]: (state, { type, payload }) => {
    switch (type) {
      case SET_SORTING:
        state.currentSorting = payload;
        break;
    }
  }
};
