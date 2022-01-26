<template>
  <div>
      <h1>
          <slot></slot>
      </h1>
  </div>
</template>
<script>
export default {
  name: 'HeaderCardapio'
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&family=Sedgwick+Ave&display=swap');
h1 {
  font-size: 80px;
  text-align: center;
  font-family: 'Sedgwick Ave', cursive;
}
</style>
