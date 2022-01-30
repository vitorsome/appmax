<template>
<div>
  <Header>Cardápio</Header>
  <div class="center">
    <DataTable></DataTable>
  </div>
  <div class="center">
    <ButtonPrimary text="Novo Item" link='formulario'></ButtonPrimary>
  </div>
</div>
</template>
<script>
import Header from '../components/shared/Header.vue'
import ButtonPrimary from '../components/shared/ButtonPrimary.vue'
import DataTable from '../components/Datatable.vue'

export default {
  name: 'IndexPage',
  components: {
    Header,
    ButtonPrimary,
    DataTable
  }
}
</script>
<style lang="scss">

$background-color: #FBF6EA;

 body {
   background-color: $background-color;
 }

 .center {
   display: flex;
   justify-content: center;
 }

</style>
