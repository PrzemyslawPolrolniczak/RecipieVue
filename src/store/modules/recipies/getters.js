import { sortArrayOfObjects } from "@/utils";

export default {
  sortedRecipies: state => {
    const {
      items,
      currentSorting: { by, direction }
    } = state;
    return sortArrayOfObjects(items, by, direction);
  },
  totalRecipiesCount: (_, getters) => getters.filteredAndSortedRecipies.length,
  filteredAndSortedRecipies: (_, getters, rootState) => {
    const { sortedRecipies } = getters;
    const { maxKcal, maxTime, selectedTags } = rootState.filter;

    const applyFilters = recipie => {
      const {
        info: { kcal, time },
        tags
      } = recipie;

      const passMaxKcalFilter = maxKcal ? kcal <= maxKcal : true;
      const passMaxTimeFilter = maxTime ? time <= maxTime : true;
      const passTagsFilter = selectedTags.length
        ? selectedTags.every(tag => tags.includes(tag))
        : true;

      return passMaxKcalFilter && passMaxTimeFilter && passTagsFilter;
    };

    return sortedRecipies.filter(recipie => applyFilters(recipie));
  }
};
