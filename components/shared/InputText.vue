<template>
  <div class="container-input">
      <label :for="id"> {{ this.label }}</label>
      <input :id="id" :placeholder="placeholder" :value="value" :type="type || 'text'"/>
  </div>
</template>
<script>
export default {
    props: ['id', 'label', 'placeholder', 'value', 'type'],
    name: 'InputText'
}
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');

.container-input {
    
    display: flex;
    flex-flow: column;
    max-width: 560px;
    font-family: 'Roboto', sans-serif;

    label {
        font-size: 30px;
        color: #000;
    }

    input {
        border-radius: 10px;
        height: 60px;
        font-size: 30px;

        &::placeholder {
            color: #000;
            font-size: 30px;
            line-height: 60px;
        }
    }

}





</style>
