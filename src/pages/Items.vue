<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item">
        <md-card v-if="showList">
          <md-card-header data-background-color="green">
            <h4 class="title">Items</h4>
            <p class="category">All Inventory Items</p>
          </md-card-header>
          <md-card-content>
            <md-progress-bar md-mode="query" v-if="loading"></md-progress-bar>
            <md-table v-model="users" md-card>
             <!-- <md-table-toolbar>
              <h1 class="md-title">Items</h1>
             </md-table-toolbar> -->
             <ul>
                <li v-for="item in $store.state.items" :key="item.id">{{ item.name }}</li>
             </ul>
       <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Name" md-sort-by="Name" @click.native="showItem(item.id)">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="SKU" md-sort-by="SKU">{{ item.sku }}</md-table-cell>
        <md-table-cell md-label="In Stock" md-sort-by="Stock In Hand">{{ item.quantity }}</md-table-cell>
        <md-table-cell md-label="Price" md-sort-by="Price">{{ item.price }}</md-table-cell>
        <md-button class="md-raised md-primary" @click="showDialog = true; itempopup(item.id)">Modify</md-button>
      </md-table-row>
    </md-table>
          </md-card-content>
        </md-card>
        <ItemDetails v-if="expand" :itemID="itemID" @closepanel="closedetails"></ItemDetails>
      </div>
    </div>

    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>Modify Item</md-dialog-title>
      <md-card-content>
        <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="first-name">Item Name</label>
                <md-input name="item-name" id="item-name" autocomplete="given-name" v-model="form.itemName" />
              </md-field>
              <md-field>
                <label for="first-name">In Stock</label>
                <md-input name="item-stock" id="item-stock" autocomplete="given-name" v-model="form.stock" />
              </md-field>
              <md-field>
                <label for="price">Price</label>
                <md-input name="item.price" id="item-price" v-model="form.price" />
              </md-field>
            </div>
          </div>
      </md-card-content>

      <md-dialog-actions>
        <md-button class="md-primary" @click="showDialog = false">Close</md-button>
        <md-button class="md-primary" @click="showDialog = false; updateitem()">Save</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>

</template>

<script>
import axios from 'axios';
import ItemDetails from './ItemDetails.vue';
export default {
  components: {
    ItemDetails
  },
  props: {
    dataBackgroundColor: {
      type: String,
      default: "",
    },
  },
  data: () => ({
     // users: [],
      showList: true,
      expand: false,
      itemID: 3,
      showDialog: false,
      status: '',
      loader: false,
      table: true,
      //loading: true,
      form: {
        itemid:'',
        itemName: '',
        stock:'',
        price:''
      }
    }),
  async created() {
    // this.getItems()
   // this.users = await this.$store.state.items;
  },
  computed: {
    users() {
       return this.$store.state.items;
  
    }
  },
  methods: {
    getItems() {
       //axios.get('http://localhost:8000/api/items').then(response => {this.users = response.data });
      // this.users = this.$store.state.items;
       //this.loading = false;
    },
    showItem(item) {
      //alert('Product Info');
      // alert(item);
     
     this.showList = false;
     this.expand = true;
     this.itemID = item;
    },
    closedetails(value) {
      this.showList = value;
      this.expand = false;
    },
    itempopup(id) {
       axios.get('http://localhost:8000/api/items/' + id).then(response => {
           this.form.itemid = response.data.id; 
           this.form.itemName = response.data.name;
           this.form.stock = response.data.quantity;
           this.form.price = response.data.price;
       })
    },
    
    updateitem() {
        //this.table = false;
        //this.loader = true;
        this.loading = true;
        axios.post('http://localhost:8000/api/item/update', {
             itemid: this.form.itemid,
             name: this.form.itemName,
             quantity: this.form.stock,
             price: this.form.price
        },
        {
              headers: {
                'Content-Type': 'application/json; charset=UTF-8'
           }
          }
        ).then(response => {
           this.status = response.status;
          // this.loader = false;
           //this.table = true;
           this.loading = false;
           this.getItems();
        })
    }
  }

};
</script>
<style>
.md-dialog-container {
  min-width: 430px !important;
}
</style>