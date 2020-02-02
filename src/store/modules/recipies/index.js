import mutations from "./mutations";
import getters from "./getters";

export default {
  state: {
    sorting: { by: "name", direction: "asc", text: "A-z" },
    items: [
      {
        image:
          "https://assets.tmecosys.com/image/upload/t_web600x528/img/recipe/ras/Assets/F837F322-3C97-48AD-9A80-B4FE3E30215A/Derivates/B5EBFC12-24E4-4BBF-B8AE-76F51A5CD242.jpg",
        name: "Owsianka z malinami",
        info: {
          kcal: 750,
          time: 10,
          difficulty: "Bardzo łatwy"
        },
        macro: {
          protein: 15,
          fat: 15,
          carb: 15
        },
        tags: ["ciepłe", "śniadanie", "bez mięsa"]
      },
      {
        image:
          "https://assets.tmecosys.com/image/upload/t_web600x528/img/recipe/ras/Assets/F837F322-3C97-48AD-9A80-B4FE3E30215A/Derivates/B5EBFC12-24E4-4BBF-B8AE-76F51A5CD242.jpg",
        name: "Maliny z owsianką",
        info: {
          kcal: 750,
          time: 10,
          difficulty: "Bardzo łatwy"
        },
        macro: {
          protein: 15,
          fat: 15,
          carb: 15
        },
        tags: ["ciepłe", "śniadanie", "bez mięsa"]
      },
      {
        image:
          "https://assets.tmecosys.com/image/upload/t_web600x528/img/recipe/ras/Assets/F837F322-3C97-48AD-9A80-B4FE3E30215A/Derivates/B5EBFC12-24E4-4BBF-B8AE-76F51A5CD242.jpg",
        name: "Z malinami owsianka",
        info: {
          kcal: 750,
          time: 10,
          difficulty: "Bardzo łatwy"
        },
        macro: {
          protein: 15,
          fat: 15,
          carb: 15
        },
        tags: ["ciepłe", "śniadanie", "bez mięsa"]
      }
    ]
  },
  mutations,
  getters
};
