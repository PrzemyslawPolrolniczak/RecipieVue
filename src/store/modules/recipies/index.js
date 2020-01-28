import mutations from "./mutations";

export default {
  state: {
    sorting: { by: "name", direction: "desc", text: "A-z" },
    items: []
  },
  mutations
};
