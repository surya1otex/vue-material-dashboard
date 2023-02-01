import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";
import Items from "@/pages/Items.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Notifications from "@/pages/Notifications.vue";
import UpgradeToPRO from "@/pages/UpgradeToPRO.vue";
import Login from "@/pages/Login.vue";
import store from "@/store/store";

if (localStorage.getItem("setAuthentication") == 'true') {
    store.commit("setAuthentication", true);
  }
  else {
    store.commit("setAuthentication", false);
  }
const routes = [
  {
    path: '/',
    redirect: {
        name: "Login"
    }
  },
  {
    path: "/",
    component: DashboardLayout,
    redirect: "dashboard", 
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard,
        meta : {
          requiresAuth : true
        }
      },
      {
        path: "user",
        name: "User Profile",
        component: UserProfile,
        meta : {
          requiresAuth : true
        }
      },
      {
        path: "table",
        name: "Table List",
        component: TableList,
        meta : {
          requiresAuth : true
        }
      },
      {
        path: "items",
        name: "Items",
        component: Items,
        meta : {
          requiresAuth : true
        }
      },
      {
        path: "icons",
        name: "Icons",
        component: Icons,
      },
      {
        path: "maps",
        name: "Maps",
        meta: {
          hideFooter: true,
        },
        component: Maps,
      },
      {
        path: "notifications",
        name: "Notifications",
        component: Notifications,
      },
      {
        path: "upgrade",
        name: "Upgrade to PRO",
        component: UpgradeToPRO,
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];


export default routes;
