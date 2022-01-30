<template>
<table class="table">
  <tbody>
    <tr v-for="item in items" :key="item.title" class="row-item" :id="item.id">
      <td></td>
      <td>
          <div>
              <div class="title">{{ item.name }}</div>
              <div class="description">{{ item.description }}</div>
          </div>
      </td>
      <td class="price">{{ item.price }}</td>
      <td>
          <div class="controllers">
              <NuxtLink :to="{name:'formulario', query:{edit: item.id}}"><img src="../assets/icon-pen.svg"/></NuxtLink>
              <img src="../assets/icon-trash.svg" @click="deleteItem"/>
          </div>
      </td>
    </tr>
  </tbody>
</table>
</template>
<script>
import ItemList from '../src/ItemList.js';
import Item from '../src/Item.js';

export default {
  data () {
    return {
      items: []
    }
  },
  methods: {
    deleteItem(item) {
      Item.delete(item.target.closest('tr').id);
      let itemList = new ItemList();
      this.items = itemList.get();
    }
  },
  mounted() {
    let itemList = new ItemList();
    this.items = itemList.get();
  },
  name: 'DataTable'
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
$font-description-color: #CCAE52;
$title-description-color: #5B2D1F;
$font-price-color: #A83A2C;

.table {
    width: 100%;
    padding: 0 30px;
    border-collapse: collapse;
    margin-bottom: 70px;
}

.row-item {
    height: 80px;
    font-family: 'Roboto', sans-serif;
    border-bottom: 2px dashed #A83A2C;    
    .title {
        color: $title-description-color;
        font-size: 30px;
    }

    .description {
        color:$font-description-color;
        font-size: 15px;
    }
    
    .price {
        color: $font-price-color;
        font-size:53px;
        float: right;
        margin: 0 5px;
    }

    .controllers {
        img {
            width:25px;
            &:hover {
                cursor: pointer;
            }
        }

    }
}
</style>
