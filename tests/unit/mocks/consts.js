export const STATE = {
  RECIPIES: {
    CURRENT_SORTING: {
      TEXT: "test"
    },
    SORTING_OPTIONS: [
      { by: "name", direction: "asc", text: "sorting1" },
      { by: "name", direction: "desc", text: "sorting2" },
      { by: "kcal", direction: "asc", text: "sorting3" },
      { by: "kcal", direction: "desc", text: "sorting4" },
      { by: "time", direction: "asc", text: "sorting5" },
      { by: "time", direction: "desc", text: "sorting6" }
    ]
  },
  FILTER: {
    MAX_KCAL: 1000,
    MAX_TIME: 10,
    AVAILABLE_TAGS: ["tag1", "tag2", "tag3", "tag4"],
    SELECTED_TAGS: ["tag5", "tag6"]
  },
  FAVOUTIRES: {
    RECIPIES: [
      { name: "Recipie1", image: "Image1", kcal: 100, time: 10 },
      { name: "Recipie2", image: "Image2", kcal: 200, time: 20 },
      { name: "Recipie3", image: "Image3", kcal: 300, time: 30 },
      { name: "Recipie4", image: "Image4", kcal: 400, time: 40 }
    ]
  }
};

export const GETTERS = {
  TOTAL_RECIPIES_COUNT: 99
};
