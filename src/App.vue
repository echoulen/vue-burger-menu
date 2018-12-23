<template>
  <div id="app">
    <v-burger-menu :isOpen='isOpen' @onClose='onClose' :width='300' position='right'>
      <div slot='content' @click='onOpen' class='content'>content</div>
      <div slot='menu' class='menu'>menu</div>
    </v-burger-menu>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import VBurgerMenu from './components/VBurgerMenu.vue';

export default Vue.extend({
  name: 'app',
  components: {
    VBurgerMenu,
  },
  data() {
    return {isOpen: true};
  },
  methods: {
    onOpen() {
      this.isOpen = true;
    },
    onClose() {
      this.isOpen = false;
    },
  },
});
</script>

<style lang="scss">
  body {
    margin: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: white;
    line-height: 100vh;
    font-size: 30px;
    user-select: none;
  }
  .content {
    background-color: cornflowerblue;
    width: 100vw;
    height: 100vh;
  }
  .menu {
    background-color: cadetblue;
    height: 100vh;
    width: 300px;
  }
</style>
