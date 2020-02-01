import { sortArrayOfObjects } from "@/utils";

export default {
  sortedRecipies: ({ items, sorting: { by, direction } }) => {
    return sortArrayOfObjects(items, by, direction);
  }
};
