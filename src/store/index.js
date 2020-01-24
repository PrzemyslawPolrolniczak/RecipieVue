import Vue from "vue";
import Vuex from "vuex";
import filter from "./modules/filter";
import favourites from "./modules/favourites";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { filter, favourites }
});
