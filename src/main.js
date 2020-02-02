import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueCompositionApi from "@vue/composition-api";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faPlus,
  faMinus,
  faTrash,
  faChevronDown
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "./assets/tailwind.css";

library.add(faSearch, faPlus, faMinus, faTrash, faChevronDown);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(VueCompositionApi);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
