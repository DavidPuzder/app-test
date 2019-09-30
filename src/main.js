import Vue from "vue";
import VueLazyLoad from "vue-lazyload";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";

Vue.config.productionTip = false;

Vue.use(VueLazyLoad);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
