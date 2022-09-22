// =========================================================
// * Vue Material Dashboard - v1.5.0
// =========================================================
//
// * Product Page: https://www.creative-tim.com/product/vue-material-dashboard
// * Copyright 2019 Creative Tim (https://www.creative-tim.com)
// * Licensed under MIT (https://github.com/creativetimofficial/vue-material-dashboard/blob/master/LICENSE.md)
//
// * Coded by Surya
//
// =========================================================
//
// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueRouter from "vue-router";
// import Vuex from "vuex";
import App from "./App";
import store from "./store/store";

//Vue.use(Vuex);

// const store = new Vuex.Store(
//   {
//       state: {
//           authenticated: false
//       },
//       mutations: {
//           setAuthentication(state, status) {
//               state.authenticated = status;
//           }
//       }
//   }
// );

// router setup
import routes from "./routes/routes";

// Plugins
import GlobalComponents from "./globalComponents";
import GlobalDirectives from "./globalDirectives";
import Notifications from "./components/NotificationPlugin";

// MaterialDashboard plugin
import MaterialDashboard from "./material-dashboard";

import Chartist from "chartist";

// configure router


Vue.prototype.$Chartist = Chartist;

Vue.use(VueRouter);

const router = new VueRouter({
  routes, // short for routes: routes
  linkExactActiveClass: "nav-item active",
});

// router.beforeEach((to, from, next) => {
//   if(to.matched.some(record => record.meta.requiresAuth)) {
//     if(store.state.authenticated == false) {
//        next('login');
//       } else {
//        next();
//     }
//   }
// })


Vue.use(MaterialDashboard);
Vue.use(GlobalComponents);
Vue.use(GlobalDirectives);
Vue.use(Notifications);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: (h) => h(App),
  router,
  store,
  data: {
    Chartist: Chartist,
  },
});
