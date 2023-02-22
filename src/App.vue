<template>

  <router-view></router-view>
</template>

<script>
import axios from 'axios';
//import { async } from 'q';
import store from './store/store';
export default {
   async created() {
   await axios.get('http://localhost:8000/api/items').then(response => {
                   store.state.items = response.data;
                   // this.users = response.data
                   //context.commit('setData', response.data);
                 });
   }
};
</script>
