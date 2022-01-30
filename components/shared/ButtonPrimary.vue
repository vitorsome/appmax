<template>
  <div>
    <button @click="emitClick">
      <NuxtLink v-if="link" :to="link">{{ text }}</NuxtLink>
      <span v-else>{{ text }}</span>
    </button>
  </div>
</template>
<script>

export default {
  props: ['text', 'link'],
  data () {
    return {}
  },
  methods: {
    emitClick() {
      this.$emit('button-primary-clicked');
    }
  },
  name: 'ButtonPrimary'
}
</script>
<style lang="scss">
$background-button-primary: #A83A2CB2;
$font-button-primary: #FFF;

button {
  background-color: $background-button-primary;
  color: $font-button-primary;
  font-size: 18px;
  border-radius: 20px;
  border: 0;
  min-width: 130px;
  height: 40px;
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
