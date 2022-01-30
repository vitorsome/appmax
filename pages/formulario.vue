<template>
  <div>
    <Header>{{ this.title }}</Header>
    <div class="container-form">
      <input type="hidden" :value="item.id" id="itemId"/>
      <div>
        <InputText id="name" label="Título" placeholder="Título do produto" :value="item.name"></InputText>
      </div>
      <div>
        <InputText id="description" label="Descrição" placeholder="Descrição do produto" :value="item.description"></InputText>
      </div>
      <div>
        <InputText id="price" label="Valor" placeholder="Preço do produto" :value="item.price" type="number"></InputText>
      </div>
    </div>
    <div class="center">
      <ButtonSecondary text="Cancelar" link="/"></ButtonSecondary>
      <ButtonPrimary text="Salvar" @button-primary-clicked="saveItem"></ButtonPrimary>
    </div>
   
  </div>
</template>
<script>
import Header from '../components/shared/Header.vue';
import InputText from '../components/shared/InputText.vue';
import ButtonPrimary from '../components/shared/ButtonPrimary.vue';
import ButtonSecondary from '../components/shared/ButtonSecondary.vue';
import Item from '../src/Item.js';

export default {
  name: 'IndexPage',
  data() {
    return {
      item: new Item(),
      title: 'Cadastrar Item'
    }
  },
  methods: {
    saveItem() {
      let validForm = this.validateForm();
      if (validForm) {
        document.querySelectorAll('input').forEach((input) => {
          this.item[input.id] = input.value;
        });
        if (this.item.id > 0) {
          this.item.update();
        } else {
          this.item.save();
        }
        this.$router.push({
          path: '/'
        })
      }
    },
    validateForm() {
      return Array.from(document.querySelectorAll('input')).every(input => {
        if (input.value == '') {
          alert('Todos os campos devem estar preenchidos!');
          return false;
        }
        return true;
      });
    }
  },
  mounted() {
    if (this.$route.query.edit) {
      this.item.get(this.$route.query.edit);
      this.title = 'Editar Item';
    }
  },
  components: {
      Header,
      InputText,
      ButtonPrimary,
      ButtonSecondary
  }
}
</script>
<style lang="scss">

$background-color: #FBF6EA;

 body {
   background-color: $background-color;
 }

 .container-form {
   box-sizing: border-box;
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
   grid-gap: 20px;
   padding: 10px 151px;
 }

 @media (max-width: 750px) {
   .container-form {
     padding: 0;     
   }
 }

</style>
