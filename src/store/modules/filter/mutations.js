import {
  UPDATE_FILTERS,
  MAX_KCAL,
  MAX_TIME,
  ADD_TAGS,
  REMOVE_TAGS
} from "./mutations-types";

export default {
  [UPDATE_FILTERS]: (state, { type, payload }) => {
    switch (type) {
      case MAX_KCAL:
        state.maxKcal = payload;
        break;
      case MAX_TIME:
        state.maxTime = payload;
        break;
      case ADD_TAGS:
        state.availableTags = state.availableTags.filter(tag => tag != payload);
        state.selectedTags.push(payload);
        break;
      case REMOVE_TAGS:
        state.selectedTags = state.selectedTags.filter(tag => tag != payload);
        state.availableTags.push(payload);
        break;
    }
  }
};
