import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';
Vue.use(Vuex);

const store = new Vuex.Store(
    {
        state: {
            authenticated: false,
            name: 'Suryanarayan panda',
            items:[]
        },
        mutations: {
            setAuthentication(state, status) {
                state.authenticated = status;
            },
            setData(state, newData) {
                state.items = newData;
            }
        },
        actions: {
            getAllitems(context) {
                axios.get('http://localhost:8000/api/items').then(response => {
                   // this.users = response.data
                   context.commit('setData', response.data);
                 });
            }
        },
        getters: {
            getData (state) {
              return state.items
            }
          }
    }
  );

  export default store