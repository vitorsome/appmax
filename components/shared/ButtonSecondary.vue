<template>
  <div>
    <button>
      <NuxtLink v-if="link" :to="link">{{ text }}</NuxtLink>
    </button>
  </div>
</template>
<script>

export default {
  props: ['text', 'link'],
  data () {
    return {}
  },
  name: 'ButtonSecondary'
}
</script>
<style lang="scss" scoped>
$background-button-primary: #FFF;
$font-button-primary: #A83A2CB2;

button {
  background-color: $background-button-primary;
  color: $font-button-primary;
  font-size: 18px;
  border-radius: 20px;
  border: 0;
  min-width: 130px;
  height: 40px;
  margin: 10px 50px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }

  a {
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    color: $font-button-primary;
    text-decoration: none;
  }
}
</style>
