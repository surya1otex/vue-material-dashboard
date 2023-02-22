<template>
    <div>
        <md-icon class="md-size-2x" @click.native="closepanelitem()">close</md-icon>
        <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-25">
    <md-table v-model="users" md-card>
      <md-table-toolbar>
        <h1 class="md-title">All Items</h1>
        {{ orditems }}
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-checkbox v-model="orditems" v-bind:value="item.id"></md-checkbox>
        <md-table-cell>{{ item.name }}</md-table-cell>
      </md-table-row>
    </md-table>
</div>
<div class="md-layout-item md-card">
    <h3><b>Item - {{ item }}</b></h3>
    <h4>Price - {{ price }}</h4>
    <h4>In Stock - {{ instock }}</h4>
    <h4>Description - {{ description }}</h4>
</div>
</div>
    </div>
</template>

<script>
import axios from 'axios';
//import { response } from 'express';
export default {
   props: {
    itemID: Number
   },
   data: () => ({
     orditems:[],
     users:[],
     items: [],
     item: '',
     price:'',
     instock: '',
     description: '' 
   }),
   created() {
    this.users = this.$store.state.items;
     this.loadItemdata();
    // this.$store.dispatch('getAllitems');

    //  axios.get('http://localhost:8000/api/items').then(response => {

    //   console.log(response.data);
    //     this.$store.commit("setData", response.data);
    //  });

    // console.log('This is the Test' + this.users);

   },
    computed: {
      //this.users = this.$store.getters.getData;
    },
   async mounted() {

    //this.$store.dispatch('getAllitems');

    // this.users = this.$store.getters.getData;
    console.log(this.users);
    // console.log('Item from store' + this.$store.state.items);
    //console.log(response);

  },
  // computed: {
  //   itemsFromStore() {
  //     return this.users = this.$store.state.items;
  //   },
   methods: {
    getItems() {
        //axios.get('http://localhost:8000/api/items').then(response => {this.users = response.data });


    },
    showalert(e) {

      if (e.target.checked) {
        alert('checkbox checked');
    }
       // 
    },
     closepanelitem() {
       // alert(this.itemID);
        this.$emit('closepanel', true);
     },
     
     loadItemdata() {
        axios
        .get("http://localhost:8000/api/item/details", {
          params: {
            itemID: this.itemID,
          },
        })
        .then(
          function (response) {
           // this.blocks = response.data;
           console.log(response);
          this.item = response.data.name;
          this.price = response.data.price;
          this.instock = response.data.quantity;
          this.description = response.data.description;
          }.bind(this)
        );
     }
   }
}
</script>


<style>
.md-size-2x {
    cursor: pointer;
}
</style>