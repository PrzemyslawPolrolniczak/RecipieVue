import { UPDATE_FILTERS, MAX_KCAL, MAX_TIME } from "./mutations-types";

export default {
  [UPDATE_FILTERS]: (state, { type, payload }) => {
    switch (type) {
      case MAX_KCAL:
        state.maxKcal = payload;
        break;
      case MAX_TIME:
        state.maxTime = payload;
        break;
    }
  }
};
