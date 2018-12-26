# v-burger-menu

[![npm version](https://badge.fury.io/js/v-burger-menu.svg)](https://badge.fury.io/js/v-burger-menu)
[![license](https://img.shields.io/github/license/echoulen/vue-burger-menu.svg)](https://opensource.org/licenses/MIT)
[![build](https://travis-ci.org/echoulen/vue-burger-menu.svg?branch=master)](https://travis-ci.org/echoulen/vue-burger-menu)

Burger menu for [vue js](https://vuejs.org/)

> no refs, no 3rd dependency, support [Nuxt js](https://nuxtjs.org/)

![](https://media.giphy.com/media/1fkFwcmRn9NuqhlE1X/giphy.gif)

## installation
`yarn add v-burger-menu`

> dont forget to import the css

`import './node_modules/v-burger-menu/dist/v-burger-menu.css'`

## Component props
|Name|Type|Required|default|
|:------:|:------:|:------:|:------:|
|isOpen|boolean|true|-|
|width|number|true|-|
|position|'left' or 'right'|false|left|

## Example
```vue
<template>
  <div id="app">
    <v-burger-menu :isOpen='isOpen' :width='300' position='right'>
      <div slot='content' @click='onOpen' class='content'>content</div>
      <div slot='menu' class='menu'>menu</div>
    </v-burger-menu>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import VBurgerMenu from 'v-burger-menu';

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
```

## Contributing
`yarn serve`
