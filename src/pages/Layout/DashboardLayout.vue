<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <notifications></notifications>

    <side-bar
      :sidebar-item-color="sidebarBackground"
      :sidebar-background-image="sidebarBackgroundImage"
    >
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/dashboard">
        <md-icon>dashboard</md-icon>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link to="/user">
        <md-icon>person</md-icon>
        <p>User Profile</p>
      </sidebar-link>
      <sidebar-link to="/table">
        <md-icon>content_paste</md-icon>
        <p>User List</p>
      </sidebar-link>
      <sidebar-link to="/items">
        <md-icon>library_books</md-icon>
        <p>Items</p>
      </sidebar-link>
      <sidebar-link to="/icons">
        <md-icon>bubble_chart</md-icon>
        <p>Sales Order</p>
      </sidebar-link>
      <sidebar-link to="/maps">
        <md-icon>location_on</md-icon>
        <p>Invoices</p>
      </sidebar-link>
      <sidebar-link to="/notifications">
        <md-icon>notifications</md-icon>
        <p>Purchase Orders</p>
      </sidebar-link>
      <sidebar-link to="/login">
        <md-icon>Logout</md-icon>
        <p>Logout</p>
      </sidebar-link>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <fixed-plugin
        :color.sync="sidebarBackground"
        :image.sync="sidebarBackgroundImage"
      >
      </fixed-plugin>

      <dashboard-content> </dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>

<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "@/pages/Layout/MobileMenu.vue";
import FixedPlugin from "./Extra/FixedPlugin.vue";
import SideBar from "../../components/SidebarPlugin/SideBar.vue";

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu,
    FixedPlugin,
    SideBar,
  },
  data() {
    return {
      sidebarBackground: "green",
      sidebarBackgroundImage: require("@/assets/img/sidebar-2.jpg"),
    };
  },
};
</script>
