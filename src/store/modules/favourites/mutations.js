import {
  UPDATE_FAVOURITES,
  ADD_FAVOURITE,
  REMOVE_FAVOURITE
} from "./mutations-types";

export default {
  [UPDATE_FAVOURITES]: (state, { type, payload }) => {
    switch (type) {
      case ADD_FAVOURITE:
        state.recipies.push(payload);
        break;
      case REMOVE_FAVOURITE:
        state.recipies = state.recipies.filter(({ name }) => name !== payload);
        break;
    }
  }
};
