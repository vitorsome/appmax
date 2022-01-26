<template>
<table class="table">
  <tbody>
    <tr v-for="item in items" :key="item.title" class="row-item">
      <td></td>
      <td>
          <div>
              <div class="title">{{ item.title }}</div>
              <div class="description">{{ item.description }}</div>
          </div>
      </td>
      <td class="price">{{ item.price }}</td>
      <td>
          <div class="controllers">
              <img src="../assets/icon-pen.svg"/>
              <img src="../assets/icon-trash.svg"/>
          </div>
      </td>
    </tr>
  </tbody>
</table>
</template>
<script>
export default {
  data () {
    return {
      items: [
        {
            title:'Batata Frita',
            description: '50g de batata frita com bacon',
            price: 50.50
        },
        {
            title:'Pizza Média',
            description: '50g borda recheada',
            price: 70.50
        }
      ]
    }
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
