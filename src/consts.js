import { MAX_KCAL, MAX_TIME } from "@/store/modules/filter/mutations-types";

export const leftFilterList = [
  {
    type: MAX_KCAL,
    storeField: "maxKcal",
    name: "Kcal",
    values: [
      { text: "< 500", value: 500 },
      { text: "< 1000", value: 1000 },
      { text: "< 1500", value: 1500 },
      { text: "< 2000", value: 2000 }
    ]
  },
  {
    type: MAX_TIME,
    storeField: "maxTime",
    name: "Czas",
    values: [
      { text: "10 min", value: 10 },
      { text: "20 min", value: 20 },
      { text: "30 min", value: 30 },
      { text: "40 min", value: 40 },
      { text: "60 min", value: 60 }
    ]
  }
];
